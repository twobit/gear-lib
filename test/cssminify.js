var Blob = require('gear').Blob,
    cssminify = require('../lib/cssminify').cssminify,
    less = require('../lib/cssminify').less,
    fixtures = {
        css: new Blob(' .bar { display: none;  } '),
        min: '.bar{display:none}',
        less: new Blob('@color: #FF0;\ndiv { color: @color; }'),
        compiled: 'div{color:#ff0}'
    };

describe('cssminify()', function() {
    it('should minify css', function(done) {
        cssminify({}, fixtures.css, function(err, res) {
            res.result.should.equal(fixtures.min);
            done(err);
        });
    });
});

describe('less()', function() {
    it('should compile LESS stylesheets', function(done) {
        less({compress: false}, fixtures.less, function(err, res) {
            res.result.should.equal(fixtures.compiled);
            done(err);
        });
    });
});
