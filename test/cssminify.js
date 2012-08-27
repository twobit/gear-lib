var Blob = require('gear').Blob,
    cssminify = require('../lib/cssminify').cssminify,
    fixtures = {
        css: new Blob(' .bar { display: none;  } '),
        min: '.bar{display:none;}\n'
    };

describe('cssminify()', function() {
    it('should minify css', function(done) {
        cssminify({}, fixtures.css, function(err, res) {
            res.result.should.equal(fixtures.min);
            done(err);
        });
    });
});