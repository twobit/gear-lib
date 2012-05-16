var cssminify = require('../lib/cssminify').cssminify.fn,
    fixtures = {
        css: {body: ' .bar { display: none;  } '}
    };

describe('cssminify()', function() {
    it('should minify css', function(done) {
        cssminify({}, fixtures.css, console, function(err, results) {
            console.log(results);
            done(err);
        });
    });
});