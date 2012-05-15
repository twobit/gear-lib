/**
 * Lint JS.
 *
 * @param options {Object} Ignored.
 * @param objects {Array} Object chain.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.jslint = function(options, objects, logger, callback) {
    callback(null, objects);
};