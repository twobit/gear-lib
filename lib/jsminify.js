/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    var parser, uglify;
    if (typeof require !== 'undefined') {
        parser = require("uglify-js").parser;
        uglify = require("uglify-js").uglify;
    }
    else {
        parser = this.uglify.parser;
        uglify = this.uglify.uglify;
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
            uglified = uglify.gen_code(ast, options);
            done(null, new blob.constructor(uglified));
        } catch (e) {
            console.error(e);
            done('Minify failed, source file unparseable');
        }
    };
})(typeof exports === 'undefined' ? this.gear.tasks : exports);