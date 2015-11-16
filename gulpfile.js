'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var jshint = require('gulp-jshint');
var fs = require('fs');
var Mustache = require('mustache');
var _ = require('lodash');

function getDefaultValue(type){

    switch (type) {
        case 'integer':
            return 0;
            break;
        case 'array':
            return '[]';
            break;
        case 'boolean':
            return 'true';
            break;
        case 'string':
            return '""';
            break;
        default:
            return "{}";

    }
}

function getModelDefinition(swagger, modelName, depth){
    var modelName = modelName.replace('#/definitions/','');
    if(depth >1){
        return "{}";
    }

    var definition = [];

    var properties = swagger.definitions[modelName].properties;
    for(var name in properties){
        var defaultValue = '""';
        if(properties[name]["$ref"]){
            defaultValue = getModelDefinition(swagger, properties[name]["$ref"], depth + 1);
        }else{
            defaultValue = getDefaultValue(properties[name].type);
        }

        definition.push('"' + name + '" : ' + defaultValue );

    }


    return JSON.stringify(JSON.parse("{" + definition.join(',') + "}"), null, "   ");
}

var camelCase = function(id) {
    if(id.indexOf('-') === -1) {
        return id;
    }
    var tokens = [];
    id.split('-').forEach(function(token, index){
        if(index === 0) {
            tokens.push(token[0].toLowerCase() + token.substring(1));
        } else {
            tokens.push(token[0].toUpperCase() + token.substring(1));
        }
    });
    return tokens.join('');
};

function getMethodName(str)
{
    var titleCase = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    return titleCase.charAt(0).toLowerCase() + titleCase.substr(1);
}

function parseJsonSchema(opts, type){
    var classPaths = [];

    var swagger = opts.swagger;
    var authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLIK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND'];
    var data = {
        isNode: type === 'node',
        description: swagger.info.description,
        isSecure: swagger.securityDefinitions !== undefined,
        moduleName: opts.moduleName,
        className: opts.className,
        domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? swagger.schemes[0] + '://' + swagger.host + swagger.basePath : '',
        methods: {},
        classes: []
    };

    _.forEach(swagger.paths, function(api, path){

        var classPath = "PureCloud" + path.replace(/\/api\/v1/, '').replace(/\//g,'.').replace(/\.\{[A-Za-z]*\}/g, '')
        var operationGroup = classPath.split('.')[1];
        //console.log(operationGroup);

        _.forEach(api, function(op, m){

            //console.log('---')
            //console.log(op.operationId);
            //*********
            op.operationId = getMethodName(op.operationId).replace(/[ '\.\/\(\)-]/g, '');
            //op.operationId = null;
            //******

            var relativePath = classPath.split('.');
            relativePath.shift();
            relativePath.shift();

            var method = {
                path: path,
                className: classPath.split('.').pop(),
                classPath: classPath,
                namespacePath: classPath.replace(/\./g,'/').replace("PureCloud/",''),
                methodName: op.operationId,
                method: m.toUpperCase(),
                isGET: m.toUpperCase() === 'GET',
                summary: op.description,
                parameters: []

            };

            if(relativePath.join('.') != ''){
                method.relativePath= relativePath.join('.');

                var parentPath = relativePath;
                parentPath.pop();
                method.parentPath= [];
                while(parentPath.length > 0){
                    method.parentPath.unshift(parentPath.join('.'));
                    parentPath.pop();
                }

            }

            var params = [];
            if(_.isArray(op.parameters)) {
                params = op.parameters;
            }
            params.forEach(function(parameter) {
                if (_.isString(parameter.$ref)) {
                    var segments = parameter.$ref.split('/');
                    parameter = swagger.parameters[segments.length === 1 ? segments[0] : segments[2] ];
                }
                parameter.camelCaseName = camelCase(parameter.name).replace(/[ \.\/\(\)'-]/g, '').replace('delete','doDelete');

                if(parameter.enum && parameter.enum.length === 1) {
                    parameter.isSingleton = true;
                    parameter.singleton = parameter.enum[0];
                }
                if(parameter.in === 'body'){
                    parameter.isBodyParameter = true;
                    if(parameter.schema["$ref"]){
                        method.bodyExample = getModelDefinition(swagger, parameter.schema["$ref"], 0);
                    }

                } else if(parameter.in === 'path'){
                    parameter.isPathParameter = true;
                } else if(parameter.in === 'query'){
                    parameter.isQueryParameter = true;
                }
                method.parameters.push(parameter);

            });
            if(method.parameters.length > 0){
                method.parameters[method.parameters.length-1].last = true;
            }
            //data.methods.push(method);
            if (data.methods[operationGroup] == null){
                data.methods[operationGroup] = [];
            }
            if(method.method != "HEAD"){
                data.methods[operationGroup].push(method);
            }

        });
    });

    var methodList = data.methods;

    var methodArray = [];
    for (var key in data.methods) {
        var methods = data.methods[key];
        var namespaces = [];
        methods.forEach(function(ns){
            if(namespaces.indexOf(ns.namespacePath) == -1){
                namespaces.push(ns.namespacePath);
            }
        });

        methodArray.push({
            moduleName: 'PureCloud.' + key,
            value : data.methods[key],
            namespaces: namespaces
        });
    }
    data.methods = methodArray;
    //console.log(JSON.stringify(data, null, " "))

    return data;
}

var build = function(env) {
    return gulp.src('./gen/*core.js')
                .pipe(addsrc('./gen/*[^core].js'))
                .pipe(concat('purecloud-api.js'))
                .pipe(jshint())
                .pipe(jshint.reporter('default'))
                .pipe(gulp.dest('./dist/'))
                .pipe(minify())
                .pipe(gulp.dest('./dist'));
};

gulp.task('doc', function() {
    require('shelljs/global');
    var version = exec('node_modules/jsdoc/jsdoc.js dist/purecloud-api.js --readme README.md -d doc -u tutorials', {silent:true}).output;
});

gulp.task('build', function() {

    var file = 'swagger_full.json';
    var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));

    var data = parseJsonSchema({
        moduleName: 'PureCloud',
        className: 'PureCloud',
        swagger: swagger,
    });

    _.forEach(data.methods, function(moduledata){
        var source = Mustache.render(fs.readFileSync('templates/module.mustache', 'utf-8'), moduledata);
        source = source.replace(/&#x2F;/g,'/')
        fs.writeFileSync("gen/" + moduledata.moduleName + ".js", source);
    });

    //Write the core file
    var source = Mustache.render(fs.readFileSync('templates/core.mustache', 'utf-8'), swagger);
    fs.writeFileSync("gen/PureCloud.core.js", source);

    return build();

});

gulp.task('default', ['build', 'doc']);
