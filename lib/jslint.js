/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    var linter = typeof require !== 'undefined' ? require('jslint/lib/linter.js') : this.JSLINT;

    /**
     * Lint JS.
     *
     * @param options {Object} Ignored.
     * @param blob {Object} Incoming blob.
     * @param done {Function} Callback on task completion.
     */
    exports.jslint = function(options, blob, done) {
        var result = linter.lint(blob.toString(), options);
        done(null, new blob.constructor(blob, {errors: result}));
    };
})(typeof exports === 'undefined' ? this.gear.tasks : exports);