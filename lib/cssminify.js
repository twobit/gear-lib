var less = require('less');

/**
 * Minify CSS.
 *
 * @param options {Object} Ignored.
 * @param objects {Array} Object chain.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.cssminify = function(options, objects, logger, callback) {
    var parser = new less.Parser();

    if (objects.length) {
        parser.parse(objects[objects.length - 1].content, function(err, tree) {
            if (err) {
                callback(err);
            } else {
                callback(null, [{content: '', output: tree.toCSS({ compress: true })}]);
            }
        });
    }
    else {
        callback(null, objects);
    }
};