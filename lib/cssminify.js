var less = require('less');

/**
 * Minify CSS.
 *
 * @param options {Object} Ignored.
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
exports.cssminify = function(options, message, done) {
    var parser = new less.Parser();

    parser.parse(message.body, function(err, tree) {
        if (err) {
            done(err);
        } else {
            done(null, {body: tree.toCSS({compress: true})});
        }
    });
};