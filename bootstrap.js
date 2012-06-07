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
    .load(files)
    .concat()
    .tasks({
        write: {task: 'write', options: 'build/gear-lib.js'},
        minify: {task: 'jsminify'},
        writeminify: {task: 'write', options: 'build/gear-lib.min.js', requires: 'minify'},
        join: {requires: ['write', 'writeminify']}
    })
    .run(function(err, results) {
        if (err) {
            console.error(err);
        }
    });