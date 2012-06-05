/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var less = require('less');

/**
 * Minify CSS.
 *
 * @param options {Object} Ignored.
 * @param blob {Object} Incoming blob.
 * @param done {Function} Callback on task completion.
 */
exports.cssminify = function(options, blob, done) {
    var parser = new less.Parser();

    parser.parse(blob.body, function(err, tree) {
        if (err) {
            done(err);
        } else {
            done(null, {body: tree.toCSS({compress: true})});
        }
    });
};