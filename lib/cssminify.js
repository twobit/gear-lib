/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var less = require('less');

/**
 * Minify CSS. Also compiles LESS stylesheets.
 *
 * @param options {Object} Ignored.
 * @param blob {Object} Incoming blob.
 * @param done {Function} Callback on task completion.
 */
exports.cssminify = exports.less = function(options, blob, done) {
    options = options || {};

    var parser = new less.Parser(),
        compress = options.compress !== false;

    parser.parse(blob.result, function(err, tree) {
        if (err) {
            done(err);
        } else {
            done(null, new blob.constructor(tree.toCSS({compress: compress}), blob));
        }
    });
};