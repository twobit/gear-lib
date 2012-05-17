var parser = require("uglify-js").parser,
    pro = require("uglify-js").uglify;

/**
 * Minify JS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param logger {Object} Logger instance.
 * @param done {Function} Callback on task completion.
 */
exports.jsminify = {
    fn: function(options, message, logger, done) {
        var ast,
            uglified = "";

        try {
            ast = parser.parse(message.body, true);
            uglified = pro.gen_code(ast, {});
            done(null, {body: uglified});
        } catch (e) {
            // Uglify doesn't usually give descriptive errors if the parser fails.
            done('Minify failed, source file unparseable:' + e.message);
        }
    }
};