var csslint = require('csslint').CSSLint;

/**
 * Lint CSS.
 *
 * @param options {Object} Ignored.
 * @param objects {Array} Object chain.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.csslint = function(options, objects, logger, callback) {
    var result,
        errors;

    function logResults(prefix, result) {
        if (result.messages.length > 0) {
            logger.log(prefix + result.messages.map(function(m) {return m.message;}).join("\n"));
        }
        return result.messages.length;
    }

    if (objects.length) {
        result = csslint.verify(objects[objects.length - 1].content, {});
        errors = logResults('Lint errors found:\n', result);
        callback(null, [{content: errors}]);
    }
    else {
        callback(null, objects);
    }
};