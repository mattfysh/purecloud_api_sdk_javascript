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
var pclibSwaggerGen = require('purecloud-api-sdk-common').swaggerGen();
var pclibSwaggerVersion = require('purecloud-api-sdk-common').swaggerVersioning();
var pclib = require('purecloud-api-sdk-common');
var runSequence = require('run-sequence');
var gulpJsdoc2md = require('gulp-jsdoc-to-markdown')


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

function getModelDefinition(isResponse, swagger, modelName, depth){
    if(typeof(modelName) === "undefined"){
        return "";
    }
    var modelName = modelName.replace('#/definitions/','');
    if(depth >1){
        return "{}";
    }

    var definition = [];

    var properties = swagger.definitions[modelName].properties;
    for(var name in properties){
        var defaultValue = '""';
        if(properties[name]["$ref"]){
            defaultValue = getModelDefinition(isResponse, swagger, properties[name]["$ref"], depth + 1);
        }else{
            defaultValue = getDefaultValue(properties[name].type);
        }

        if(isResponse === true || properties[name].readOnly !== true){
            definition.push('"' + name + '" : ' + defaultValue );
        }
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
        moduleName: opts.moduleName,
        methods: {},
        classes: []
    };

    var swaggerTags = {};
    _.forEach(swagger.tags, function(tag){
        swaggerTags[tag["name"]] = tag["description"]
    });

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
                hasDescription: op.description && op.description.length > 0,
                parameters: [],
                tags: op.tags

            };

            if(method.methodName === "delete"){
                method.methodName = "performDelete"
            }

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
                parameter.default = getDefaultValue(parameter.type);

                if(parameter.enum && parameter.enum.length === 1) {
                    parameter.isSingleton = true;
                    parameter.singleton = parameter.enum[0];
                }
                if(parameter.in === 'body'){
                    parameter.isBodyParameter = true;
                    if(parameter.schema["$ref"]){
                        method.bodyExample = getModelDefinition(false, swagger, parameter.schema["$ref"], 0);
                    }else if(parameter.schema.items && parameter.schema.items["$ref"]){
                        method.bodyExample = JSON.stringify(JSON.parse("[" + getModelDefinition(false, swagger, parameter.schema.items["$ref"], 0) + "]");
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

            for(var tagIndex =0; tagIndex < op.tags.length; tagIndex++){
                var tag = op.tags[tagIndex].replace(/[ -]/g, "");
                if (data.methods[tag] == null){
                    data.methods[tag] = [];
                }
                if(method.method != "HEAD"){
                    data.methods[tag].push(method);
                }
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
            description : swaggerTags[key],
            key: key,
            keylowercase: key.toLowerCase()
        });
    }
    data.methods = methodArray;
    //console.log(JSON.stringify(data, null, " "))

    return data;
}

var build = function() {
    return gulp.src('./gen/*core.js')
                .pipe(addsrc('./gen/*[^core].js'))
                .pipe(jshint())
                .pipe(concat('purecloud-api.js'))
                .pipe(jshint.reporter('default'))
                .pipe(gulp.dest('./dist/'))
                .pipe(minify())
                .pipe(gulp.dest('./dist'));
};

var buildNode = function() {
    return gulp.src('./gen/*.js')
                .pipe(addsrc.prepend('./templates/node_pre.js'))
                .pipe(addsrc.append('./nodegen/*.js'))
                .pipe(jshint())
                .pipe(concat('purecloud-api-node.js'))
                .pipe(jshint.reporter('default'))
                .pipe(gulp.dest('./dist/'));
};

gulp.task('doc', function() {
    gulp.src('./README.md')
            .pipe(rename("index.md"))
            .pipe(gulp.dest('./doc/'));

    return gulp.src('dist/partials/purecloudsession.js')
        .pipe(concat('PureCloudSession.md'))
        .pipe(gulpJsdoc2md({ plugin: 'dmd-kramdown-plugin', template: fs.readFileSync('./templates/purecloud_session_doc.hbs', 'utf8') })) //
        .pipe(replace(/`/g, '~'))
        .pipe(replace('[PureCloudSession](#PureCloudSession)', 'PureCloudSession'))
        .on('error', function (err) {
          gutil.log('jsdoc2md failed:', err.message)
        })
        .pipe(gulp.dest('doc'))
});

gulp.task('movegen', function(){
    return gulp.src("./gen/*.*")
                  .pipe(rename(function (path) {
                    path.basename = path.basename.toLowerCase();
                  }))
                  .pipe(gulp.dest("./dist/partials"));

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
    if (fileExists("doc")) {
        return gulp.src('./doc', { read: false })
            .pipe(rimraf());
    }
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

gulp.task('build', ['clean'], function() {

    if (!fileExists("gen")) {
        fs.mkdirSync('gen');
    }

    if (!fileExists("doc")) {
        fs.mkdirSync('doc');
    }

    if (!fileExists("nodegen")) {
        fs.mkdirSync('nodegen');
    }

    var file = 'swagger.json';
    var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));

    var data = parseJsonSchema({
        moduleName: 'PureCloud',
        swagger: swagger,
    });

    var version = process.env.SDK_VERSION;

    _.forEach(data.methods, function(moduledata){
        moduledata.version = version;
        var source = Mustache.render(fs.readFileSync('templates/module.mustache', 'utf-8'), moduledata);
        source = source.replace(/&#x2F;/g,'/')
        fs.writeFileSync("gen/" + moduledata.moduleName + ".js", source);

        //console.log(moduledata)
        var docSource = Mustache.render(fs.readFileSync('templates/api_doc.mustache', 'utf-8'), moduledata);
        docSource = docSource.replace(/&#x2F;/g,'/')
        fs.writeFileSync("doc/" + moduledata.moduleName + ".md", docSource);
    });

    if(!version){
        version = pclibSwaggerVersion.getVersionString("version.json");
    }
    swagger.info.version = version;

    //Write the core file
    var source = Mustache.render(fs.readFileSync('templates/purecloudsession.mustache', 'utf-8'), swagger);
    fs.writeFileSync("gen/purecloudsession.js", source);

    //write the node templates
    var source = Mustache.render(fs.readFileSync('templates/node.mustache', 'utf-8'), data);
    fs.writeFileSync("nodegen/purecloud_node.js", source);

    buildNode();

    return build();

});

gulp.task('jshint', function(){
    return gulp.src('./gen/*core.js')
                .pipe(addsrc('./gen/*[^core].js'))
                .pipe(jshint.extract('always'))
                .pipe(jshint())
                .pipe(jshint.reporter('default'))
                .pipe(jshint.reporter('fail'))

});

gulp.task('watch', function() {
    gulp.watch('./templates/*', ['default']);
    gulp.watch('./tutorials/*', ['doc']);
});

gulp.task('default', function (callback) {

  runSequence('build',
   ['movegen', 'jshint'],
   callback);

});


gulp.task('jenkins', function(callback){

    var oldSwagger = JSON.parse(fs.readFileSync('swagger.json', 'UTF-8'));
    var oldVersion = pclibSwaggerVersion.getVersionString("version.json");
    console.log("old version: " + oldVersion);

    pclib.updateSwaggerAndVersion('swagger.json', 'version.json', 'mypurecloud.com', function(hasChanges){
        var version = pclibSwaggerVersion.getVersionString("version.json");
        console.log("new version: " + version);

        if(hasChanges){
            console.log("has changes")
            fs.writeFileSync("newVersion.md", version);

            var versionData = JSON.parse(fs.readFileSync('version.json', 'UTF-8'));
            console.log(pclibSwaggerVersion.getChangeReadmeText(versionData.changelog[version]));


            var npmpackage = JSON.parse(fs.readFileSync('package.json', 'UTF-8'));
            npmpackage.version = version;
            fs.writeFileSync('package.json', JSON.stringify(npmpackage, null, "  "));

        }else{
            console.log("no changes")
        }

        runSequence('default',
         'doc',
         callback);
    });
});
