/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    if (typeof require !== 'undefined') {
        var parser = require("uglify-js").parser,
            pro = require("uglify-js").uglify;
    }

    /**
     * Minify JS.
     *
     * @param options {Object} Minify options.
     * @param blob {Object} Incoming blob.
     * @param done {Function} Callback on task completion.
     */
    exports.jsminify = function(options, blob, done) {
        var ast,
            uglified = "";

        try {
            ast = parser.parse(blob.toString(), true);
            uglified = pro.gen_code(ast, options);
            done(null, blob.create(uglified));
        } catch (e) {
            // Uglify doesn't usually give descriptive errors if the parser fails.
            done('Minify failed, source file unparseable:' + e.blob);
        }
    };
})(typeof exports === 'undefined' ? this.tasks || (this.tasks = {}) : exports);