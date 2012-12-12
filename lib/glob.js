/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var Blob = require('gear').Blob,
    Glob = require('glob'),
    async = require('async'),
    path  = require('path');

/**
 * Glob files. See https://github.com/isaacs/node-glob
 *
 * @param options {Object} Options object.
 * @param options.pattern {Object} Glob pattern.
 * @param options.options {Object} Glob options.
 * @param done {Function} Callback on task completion.
 */
var glob = exports.glob = function(options, blobs, done) {
    options = options || {};
    var pattern = options.pattern,
        globoptions = options.options || {},
        encoding = options.encoding || 'utf8',
        cwd = globoptions.cwd;

    Glob(pattern, globoptions, function(err, matches) {
        if (err) {
            done(err);
            return;
        }

        async.map(matches, function(match, matchcb) {
            Blob.readFile(path.join(cwd, match), encoding, matchcb);
        }, function(err, results) {
            done(err, blobs.concat(results));
        });
    });
};

glob.type = 'collect';
