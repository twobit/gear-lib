var Blob = require('gear').Blob,
    stamp = require('../lib/stamp').stamp,
    fixtures = {
        prefix: 'function() {\n',
        postfix: '\n}\n',
        stamp: new Blob('var foo = 5;'),
        stamped: 'function() {\nvar foo = 5;\n}\n',
        replaced: 'function() {\nvar foo = 7;\n}\n'
    };

describe('stamp()', function() {
    it('should stamp text', function(done) {
        stamp({prefix: fixtures.prefix, postfix: fixtures.postfix}, fixtures.stamp, function(err, res) {
            res.result.should.equal(fixtures.stamped);
            done(err);
        });
    });

    it('should call callback', function(done) {
        stamp({callback: function(blob) {
            return 'var foo = 7;';
        }, prefix: fixtures.prefix, postfix: fixtures.postfix}, fixtures.stamp, function(err, res) {
            res.result.should.equal(fixtures.replaced);
            done(err);
        });
    });
});