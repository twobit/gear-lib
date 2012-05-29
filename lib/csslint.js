/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var csslint = require('csslint').CSSLint;

/**
 * Lint CSS.
 *
 * @param options {Object} CSSLint options.
 * @param options.callback {Function} Callback on lint status.
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
exports.csslint = function(options, message, done) {
    var result = csslint.verify('' + message.body, options), // Cast buffer to string
        errors = result.messages.map(function(m) {return m.message;});

    if (options.callback) {
        done(options.callback(message.meta.name ? message.meta.name : undefined, errors.length ? errors : undefined), message);
    } else {
        done(null, message);
    }
};