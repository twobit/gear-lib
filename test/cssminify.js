var cssminify = require('../lib/cssminify').cssminify,
    fixtures = {
        css: [{content: ' .bar { display: none;  } '}]
    };

describe('cssminify()', function() {
    it('should minify css', function(done) {
        cssminify({}, fixtures.css, console, function(err, results) {
            console.log(results);
            done(err);
        });
    });
});