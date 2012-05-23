var cssminify = require('../lib/cssminify').cssminify,
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