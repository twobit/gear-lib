/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var linter = require('jslint/lib/linter.js');

/**
 * Lint JS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
exports.jslint = function(options, message, done) {
    var result = linter.lint(message.body, options);
    done(null, {
        meta: {
            errors: result
        },
        body: message
    });
};