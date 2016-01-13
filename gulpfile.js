'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var fs = require('fs');
var Mustache = require('mustache');
var _ = require('lodash');
var replace = require('gulp-replace');
var rimraf = require('gulp-rimraf');

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

function parseJsonSchema(opts, type){

    var swagger = opts.swagger;
    var authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLIK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND'];
    var data = {
        isNode: type === 'node',
        description: swagger.info.description,
        isSecure: swagger.securityDefinitions !== undefined,
        moduleName: opts.moduleName,
        domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? swagger.schemes[0] + '://' + swagger.host + swagger.basePath : '',
        methods: {},
        classes: []
    };

    _.forEach(swagger.paths, function(api, path){

        var classPath = "PureCloud" + path.replace(/\/api\/v1/, '').replace(/\//g,'.').replace(/\.\{[A-Za-z]*\}/g, '')
        var operationGroup = classPath.split('.')[1];
        //console.log(operationGroup);

        _.forEach(api, function(op, m){

            var relativePath = classPath.split('.');
            relativePath.shift();
            relativePath.shift();

            var method = {
                path: path,
                classPath: classPath,
                methodName: op.operationId,
                method: m.toUpperCase(),
                isGET: m.toUpperCase() === 'GET',
                summary: op.summary,
                description: op.description,
                parameters: [],
                tags: op.tags

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

        methodArray.push({
            moduleName: key[0].toUpperCase() + key.substring(1) + "Api",
            value : data.methods[key],
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
    exec('node_modules/jsdoc/jsdoc.js dist/partials/*.js --readme README.md -d doc -u tutorials', {silent:true}).output;

    //copy examples and dist to /doc too so that whan we map
    //the repo to the gh-pages branch, the examples can be run from there.
    gulp.src("./examples/*.html")
            .pipe(gulp.dest('./doc/examples'));

    gulp.src("./dist/**/*")
            .pipe(gulp.dest('./doc/examples/dist'));

    return gulp.src('./doc/*.html')
                .pipe(replace(/<footer[\W\w]*<\/footer>/gm, ''))
                .pipe(gulp.dest('./doc/'));

});

gulp.task('movegen', function(){
    return gulp.src("./gen/*.*")
                  .pipe(rename(function (path) {
                    path.basename = path.basename.toLowerCase();
                  }))
                  .pipe(gulp.dest("./dist/partials")); // ./dist/main/text/ciao/hello-goodbye.md

});

function fileExists(filePath)
{
    try
    {
        return fs.statSync(filePath).isDirectory();
    }
    catch (err)
    {
        return false;
    }
}

gulp.task('clean:doc', function(){
    return gulp.src('./doc', { read: false })
        .pipe(rimraf());
});

gulp.task('clean:gen', function(){
    if (fileExists("gen")) {
        return gulp.src('./gen', { read: false })
            .pipe(rimraf());
    }

});

gulp.task('clean:dist', function(){
    return gulp.src('./dist', { read: false })
        .pipe(rimraf());
});

gulp.task('clean', ['clean:doc', 'clean:dist', 'clean:gen']);

gulp.task('download', function(){
    var url = "https://api.inindca.com/api/v1/docs/swagger  ";

    var download = require("gulp-download");

    return download(url)
        .pipe(rename(function (path) {
          path.basename = path.basename + ".json"
        }))
        .pipe(gulp.dest("."));
});

gulp.task('build', ['clean'], function() {

    if (!fileExists("gen")) {
        fs.mkdirSync('gen');
    }

    var file = 'swagger.json';
    var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));

    var data = parseJsonSchema({
        moduleName: 'PureCloud',
        swagger: swagger,
    });

    _.forEach(data.methods, function(moduledata){
        var source = Mustache.render(fs.readFileSync('templates/module.mustache', 'utf-8'), moduledata);
        source = source.replace(/&#x2F;/g,'/')
        fs.writeFileSync("gen/" + moduledata.moduleName + ".js", source);
    });

    //Write the core file
    var source = Mustache.render(fs.readFileSync('templates/core.mustache', 'utf-8'), swagger);
    fs.writeFileSync("gen/purecloudsession.js", source);

    return build();

});

gulp.task('gh-pages', function(){
    require('shelljs/global');
    exec('git subtree push --prefix doc origin gh-pages', {silent:true}).output;
});

gulp.task('watch', function() {
    gulp.watch('./templates/*', ['default']);
    gulp.watch('./tutorials/*', ['doc']);
});

gulp.task('default', ['build'], function () {
  gulp.start(['movegen', 'doc']);
  //gulp.start(['movegen']);
});
