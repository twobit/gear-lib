/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
var parser = require("uglify-js").parser,
    pro = require("uglify-js").uglify;

/**
 * Minify JS.
 *
 * @param options {Object} Minify options.
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
exports.jsminify = function(options, message, done) {
    var ast,
        uglified = "";

    try {
        ast = parser.parse(message.body, true);
        uglified = pro.gen_code(ast, options);
        done(null, {body: uglified});
    } catch (e) {
        // Uglify doesn't usually give descriptive errors if the parser fails.
        done('Minify failed, source file unparseable:' + e.message);
    }
};