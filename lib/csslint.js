var csslint = require('csslint').CSSLint;

/**
 * Lint CSS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.csslint = {
        fn: function(options, message, logger, callback) {
        var result,
            errors;

        function logResults(prefix, result) {
            if (result.messages.length > 0) {
                logger.log(prefix + result.messages.map(function(m) {return m.message;}).join("\n"));
            }
            return result.messages.length;
        }

        result = csslint.verify(message.body, {});
        errors = logResults('Lint errors found:\n', result);
        callback(null, {body: errors});
    }
};