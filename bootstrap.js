/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

/*
 * Bootstraps browser based Gear.js library tasks.
 */
var gear = require('gear');

var namespace = '' + //'"use strict";\n' +
                'var gear = gear || {};\n' +
                'gear.tasks = gear.tasks || {};\n' +
                'gear.vendor = gear.vendor || {};\n';

var files = [
    'vendor/cssminify.js',
    'vendor/csslint.js',
    'vendor/uglify.js',
    'vendor/jslint.js',
    'lib/cssminify.js',
    'lib/csslint.js',
    'lib/jsminify.js',
    'lib/jslint.js'
];

new gear.Queue({registry: new gear.Registry({dirname: __dirname + '/lib/'})})
    .load(namespace)
    .read(files)
    .jslint({nomen: true, sloppy: true, white: true, vars: true, callback: function(blob) {
        console.log(blob.name ? blob.name : 'inline', blob.jslint);
    }})
    .concat()
    .tasks({
        dev:     {task: ['write', 'build/gear-lib.js']},
        prodmin: {task: 'jsminify'},
        prod:    {requires: 'minify', task: ['write', 'build/gear-lib.min.js']},
        join:    {requires: ['dev', 'prod']}
    })
    .run(function(err, results) {
        if (err) {
            console.error(err);
        }
    });