/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    if (typeof require !== 'undefined') {
        var csslint = require('csslint').CSSLint;
    }

    /**
     * Lint CSS.
     *
     * @param options {Object} CSSLint options.
     * @param options.callback {Function} Callback on lint status.
     * @param blob {Object} Incoming blob.
     * @param done {Function} Callback on task completion.
     */
    exports.csslint = function(options, blob, done) {
        var result = csslint.verify(blob.toString(), options), // Cast buffer to string
            errors = result.messages.map(function(m) {return m.message;});

        if (options.callback) {
            done(options.callback(blob.properties.name ? blob.properties.name : undefined, errors.length ? errors : undefined), blob);
        } else {
            done(null, blob);
        }
    };
})(typeof exports === 'undefined' ? this.tasks || (this.tasks = {}) : exports);