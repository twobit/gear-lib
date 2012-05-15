var parser = require("uglify-js").parser,
    pro = require("uglify-js").uglify;

/**
 * Minify JS.
 *
 * @param options {Object} Ignored.
 * @param objects {Array} Object chain.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.jsminify = function(options, objects, logger, callback) {
    var ast,
        uglified = "";

    if (objects.length) {
        try {
            ast = parser.parse(objects[objects.length - 1].content, true);
            uglified = pro.gen_code(ast, {});
            callback(null, [{content: uglified}]);
        } catch (e) {
            // Uglify doesn't usually give descriptive errors if the parser fails.
            callback('The minify task failed, usually this means the source file was unparseable. Please check your syntax. Exception:' + e.message);
        }
    }
    else {
        callback(null, objects);
    }
};