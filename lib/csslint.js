var csslint = require('csslint').CSSLint;

/**
 * Lint CSS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
exports.csslint = {
    fn: function(options, message, done) {
        var result = csslint.verify('' + message.body, {}); // Cast buffer to string
        done(null, {
            meta: {
                errors: result.messages.map(function(m) {return m.message;})
            },
            body: message
        });
    }
};