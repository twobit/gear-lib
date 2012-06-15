/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var parser = require('uglify-js').parser,
    uglify = require('uglify-js').uglify;

/**
 * Minify JS.
 *
 * @param options {Object} Minify options.
 * @param blob {Object} Incoming blob.
 * @param done {Function} Callback on task completion.
 */
exports.jsminify = function(options, blob, done) {
    options = options || {};
    try {
        var ast = parser.parse(blob.result, options.semicolon || false);
        done(null, new blob.constructor(uglify.gen_code(ast, options), blob));
    } catch (e) {
        this._log(e);
        done('Minify failed, ' + (blob.name || 'file') + ' unparseable');
    }
};