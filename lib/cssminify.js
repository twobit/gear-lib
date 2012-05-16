var less = require('less');

/**
 * Minify CSS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.cssminify = {
    fn: function(options, message, logger, callback) {
        var parser = new less.Parser();

        parser.parse(message.body, function(err, tree) {
            if (err) {
                callback(err);
            } else {
                callback(null, {body: tree.toCSS({compress: true})});
            }
        });
    }
};