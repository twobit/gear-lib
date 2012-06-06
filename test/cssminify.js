var Blob = require('gear').Blob,
    cssminify = require('../lib/cssminify').cssminify,
    fixtures = {
        css: new Blob(' .bar { display: none;  } ')
    };

describe('cssminify()', function() {
    it('should minify css', function(done) {
        cssminify({}, fixtures.css, function(err, results) {
            done(err);
        });
    });
});