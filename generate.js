'use strict';

var fs = require('fs');
var Mustache = require('mustache');
var beautify = require('js-beautify').js_beautify;
var lint = require('jshint').JSHINT;
var _ = require('lodash');

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

        _.forEach(api, function(op, m){
            op.operationId = op.operationId.replace(/[ \/-]/g, '');

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
                parameter.camelCaseName = camelCase(parameter.name);

                if(parameter.enum && parameter.enum.length === 1) {
                    parameter.isSingleton = true;
                    parameter.singleton = parameter.enum[0];
                }
                if(parameter.in === 'body'){
                    parameter.isBodyParameter = true;
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
            data.methods[operationGroup].push(method)
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
      //console.log(key, yourobject[key]);
    }
    data.methods = methodArray;
    //console.log(JSON.stringify(data, null, " "))

    return data;
}

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

    var lintOptions = {
        undef: true,
        trailing: true,
        smarttabs: true,
        maxerr: 999
    };
    lint(source, lintOptions);
    lint.errors.forEach(function(error) {
        if (error.code[0] === 'E') {
            throw new Error(error.reason + ' in ' + error.evidence + ' (' + error.code + ')');
        }
    });
});

//Write the core file
var source = Mustache.render(fs.readFileSync('templates/core.mustache', 'utf-8'), swagger);
fs.writeFileSync("gen/PureCloud.core.js", source);


require('shelljs/global');

// Sync call to exec()
var version = exec('node_modules/jsdoc/jsdoc.js dist/purecloud-api.js ', {silent:true}).output;
