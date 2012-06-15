/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

/*
 * Bootstraps browser based Gear.js library tasks.
 */
var gear = require('gear'),
    handlebars = require('handlebars'),
    wrap = handlebars.compile(
        "\n\ndefine('{{name}}', ['require', 'exports'{{#modules}}, '{{.}}'{{/modules}}], function(require, exports{{#input}}, {{.}}{{/input}}) {\n\n" +
        "{{{result}}}\n\n" +
        "});\n\n"
    ),
    helper = handlebars.compile(
        "define('gear-lib', ['require', 'exports'{{#tasks}}, '{{.}}'{{/tasks}}], function(require, exports) {\n" +
        "var tasks = [];\n" +
        "{{#tasks}}tasks.push(require('{{.}}'));{{/tasks}}\n" +
        "tasks.forEach(function(mod) {for (var task in mod) {exports[task] = mod[task];}});\n" +
        "});\n\n"
    ),
    files = {
        'vendor/csslint.js': {},
        'vendor/less.js': {},
        'vendor/jslint.js': {},
        'vendor/uglify.js': {},
        'vendor/handlebars.js': {},
        'lib/csslint.js': {name: 'gear-csslint', modules: ['csslint'], task: true},
        'lib/cssminify.js': {name: 'cssminify', modules: ['less'], task: true},
        'lib/jslint.js': {name: 'gear-jslint', modules: ['jslint/lib/linter'], task: true},
        'lib/jsminify.js': {name: 'jsminify', modules: ['uglify-js'], task: true},
        'lib/handlebars.js': {name: 'gear-handlebars', modules: ['handlebars'], task: true}
    },
    tasks = [];

for (var key in files) {if (files[key].task) {tasks.push(files[key].name);}}

new gear.Queue({registry: new gear.Registry({dirname: __dirname + '/lib/'})})
    .read(Object.keys(files))
    .load(helper({tasks: tasks}))
    .jslint({nomen: true, sloppy: true, white: true, vars: true, callback: function(blob) {
        //console.log(blob.name ? blob.name : 'inline', blob.jslint);
    }})
    .concat({callback: function(blob) {
        if (blob.name in files && files[blob.name].name) {
            var obj = files[blob.name];
            var vars = {result: blob.result, modules: []};
            Object.keys(obj).forEach(function(attr) {vars[attr] = obj[attr];});
            //Object.keys(vars.modules).forEach(function(attr) {vars.paths[attr] = obj[attr];});
            return wrap(vars);
        }
        return blob.result;
    }})
    .tasks({
        dev:     {task: ['write', 'build/gear-lib.js']},
        prodmin: {task: 'jsminify'},
        prod:    {requires: 'prodmin', task: ['write', 'build/gear-lib.min.js']},
        join:    {requires: ['dev', 'prod']}
    })
    .run(function(err, results) {
        if (err) {
            console.error(err);
        }
    });