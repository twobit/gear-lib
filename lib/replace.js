/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
/**
 * Replace with regular expresion.
 *
 * @param options {Object} RegEx options.
 * @param blob {Object} Incoming blob.
 * @param done {Function} Callback on task completion.
 */
exports.replace = function(params, blob, done) {
    params = params || {};
    var replace  = params.replace || '',
        flags    = params.flags || 'mg',
        regex    = new RegExp(params.regex, flags),
        encoding = params.encoding || 'utf8',
        output   = "";

        output = blob.result.replace(regex, replace);

    done(null, new blob.constructor(output, blob));
};