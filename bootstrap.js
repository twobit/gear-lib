/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

/*
 * Bootstraps browser based Gear.js library tasks.
 */
var gear = require('gear');

var namespace = 'var gear = gear || {};' +
                'gear.tasks = gear.tasks || {};' +
                'gear.vendor = gear.vendor || {};';

var files = [
    'vendor/csslint.js',
    'vendor/uglify.js',
    'vendor/jslint.js',
    'lib/csslint.js',
    'lib/jsminify.js',
    'lib/jslint.js'
];

new gear.Queue({registry: new gear.Registry({dirname: __dirname + '/lib/'})})
    .load(namespace)
    .read(files)
    .jslint({callback: function(blob) {
        console.log(blob.name, blob.jslint);
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