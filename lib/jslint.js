/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var linter = require('jslint/lib/linter');

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

    var result = linter.lint(blob.result, options),
        errors = result.errors.map(function(err) {
            return err ? 'line ' + err.line + ' character ' + err.character + ': ' + err.reason : null;
        }).filter(function(err) { // Filter nulls
            return err;
        }),
        linted = errors ? new blob.constructor(blob, {jslint: errors}) : blob;

    done(options.callback ? options.callback(linted) : null, linted);
};