/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    var linter = typeof require !== 'undefined' ? require('jslint/lib/linter.js') : gear.vendor.jslint;

    /**
     * Lint JS.
     *
     * @param options {Object} JSLint options.
     * @param options.callback {Function} Callback on lint status.
     * @param blob {Object} Incoming blob.
     * @param done {Function} Callback on task completion.
     */
    exports.jslint = function(options, blob, done) {
        options = options || {};

        var result = linter.lint(blob.toString(), options),
            linted = result ? new blob.constructor(blob, {jslint: result}) : blob;

        done(options.callback ? options.callback(linted) : null, linted);
    };
})(typeof exports === 'undefined' ? gear.tasks : exports);