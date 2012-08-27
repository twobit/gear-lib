var Blob = require('gear').Blob,
    replace = require('../lib/replace').replace,
    fixtures = {
        js: new Blob("function (x) { Y.log('REMOVEME');}"),
        replaced: "function (x) { }",
        object: {
			regex: "Y.log\\(.+?\\);?",
			replace: '',
			flags: 'mg'
        },
        string:  {
            regex: /Y.log\(.+?\);?/mg,
            replace: ''
        }
    };

describe('replace()', function() {
    it('should use regexp objects', function(done) {
        replace(fixtures.object, fixtures.js, function(err, res) {
            res.result.should.equal(fixtures.replaced);
            done(err);
        });
    });

    it('should use regexp strings', function(done) {
        replace(fixtures.string, fixtures.js, function(err, res) {
            res.result.should.equal(fixtures.replaced);
            done(err);
        });
    });
});