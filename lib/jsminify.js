var parser = require("uglify-js").parser,
    pro = require("uglify-js").uglify;

/**
 * Minify JS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.jsminify = {
    fn: function(options, message, logger, callback) {
        var ast,
            uglified = "";

        try {
            ast = parser.parse(message.body, true);
            uglified = pro.gen_code(ast, {});
            callback(null, {body: uglified});
        } catch (e) {
            // Uglify doesn't usually give descriptive errors if the parser fails.
            callback('The minify task failed, usually this means the source file was unparseable. Please check your syntax. Exception:' + e.message);
        }
    }
};