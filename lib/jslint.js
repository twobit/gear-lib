var linter = require('jslint/lib/linter.js');

/**
 * Lint JS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.jslint = {
    fn: function(options, message, logger, callback) {
        var result;

        result = linter.lint(message.body, {});
        callback(null, {body: '', result: result});
    }
};