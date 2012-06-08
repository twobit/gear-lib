/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

/*
 * Bootstraps browser based Gear.js library tasks.
 */
var gear = require('gear');

var files = [
    'vendor/uglify.js',
    'lib/jsminify.js'
];

new gear.Queue({registry: new gear.Registry({dirname: __dirname + '/lib/'})})
    .read(files)
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