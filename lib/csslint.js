/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var linter = require('csslint').CSSLint;

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

    var result,
        callback = options.callback,
        errors,
        linted;
    
    delete options.callback; //clear the callback from the options

    if (Object.keys(options).length === 0) {
        //If no options, set to null to get csslint's defaults
        options = null;
    }

    result = linter.verify(blob.result, options); // Cast buffer to string
    errors = result.messages.map(function(err) {return err.message;});
    linted = errors ? new blob.constructor(blob, {csslint: errors}) : blob;

    done(callback ? callback(linted) : null, linted);
};
