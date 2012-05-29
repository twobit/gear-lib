/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
 var tasks = [
    './lib/csslint',
    './lib/cssminify',
    './lib/jslint',
    './lib/jsminify',
    './lib/s3'
];

tasks.forEach(function(task) {
    var mod = require(task),
        name;

    for (name in mod) {
        exports[name] = mod[name];
    }
});