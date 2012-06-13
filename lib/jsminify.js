/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    var parser = typeof require !== 'undefined' ? require("uglify-js").parser : gear.vendor.uglify.parser,
        uglify = typeof require !== 'undefined' ? require("uglify-js").uglify : gear.vendor.uglify.uglify;

    /**
     * Minify JS.
     *
     * @param options {Object} Minify options.
     * @param blob {Object} Incoming blob.
     * @param done {Function} Callback on task completion.
     */
    exports.jsminify = function(options, blob, done) {
        try {
            var ast = parser.parse(blob.result, true);
            done(null, new blob.constructor(uglify.gen_code(ast, options)));
        } catch (e) {
            this._log(e);
            done('Minify failed, ' + (blob.name || 'file') + ' unparseable');
        }
    };
})(typeof exports === 'undefined' ? gear.tasks : exports);