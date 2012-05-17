var cssminify = require('../lib/cssminify').cssminify.fn,
    fixtures = {
        css: {body: ' .bar { display: none;  } '}
    };

describe('cssminify()', function() {
    it('should minify css', function(done) {
        cssminify({}, fixtures.css, function(err, results) {
            done(err);
        });
    });
});