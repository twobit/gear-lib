/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    var linter = typeof require !== 'undefined' ? require('csslint').CSSLint : gear.vendor.csslint;

    /**
     * Lint CSS.
     *
     * @param options {Object} CSSLint options.
     * @param options.callback {Function} Callback on lint status.
     * @param blob {Object} Incoming blob.
     * @param done {Function} Callback on task completion.
     */
    exports.csslint = function(options, blob, done) {
        options = options || {};

        var result = linter.verify(blob.result, options), // Cast buffer to string
            errors = result.messages.map(function(err) {return err.message;}),
            linted = errors ? new blob.constructor(blob, {csslint: errors}) : blob;

        done(options.callback ? options.callback(linted) : null, linted);
    };
})(typeof exports === 'undefined' ? gear.tasks : exports);