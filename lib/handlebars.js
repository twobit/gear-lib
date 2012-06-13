/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
(function(exports) {
    var handlebars = typeof require !== 'undefined' ? require('handlebars') : gear.vendor.handlebars;

    /**
     * Handlebars templating.
     *
     * @param vars {Object} N/A.
     * @param blob {Object} Incoming blob.
     * @param done {Function} Callback on task completion.
     */
    exports.handlebars = function(vars, blob, done) {
        var tmpl = handlebars.compile(blob.result);
        done(null, new blob.constructor(tmpl(vars), blob));
    };
})(typeof exports === 'undefined' ? gear.tasks : exports);