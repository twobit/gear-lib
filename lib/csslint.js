var csslint = require('csslint').CSSLint;

/**
 * Lint CSS.
 *
 * @param options {Object} CSSLint options.
 * @param options.fatal {Boolean} Should lint failures raise fatal errors.
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
exports.csslint = {
    fn: function(options, message, done) {
        var result = csslint.verify('' + message.body, options), // Cast buffer to string
            errors = result.messages.map(function(m) {return m.message;});

        done(null, {
            meta: {
                file: '',
                lint: errors.join('\n')
            },
            body: message
        });
    }
};