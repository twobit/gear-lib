var linter = require('jslint/lib/linter.js');

/**
 * Lint JS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
exports.jslint = {
    fn: function(options, message, done) {
        var result = linter.lint(message.body, {});
        done(null, {
            meta: {
                errors: result
            },
            body: message
        });
    }
};