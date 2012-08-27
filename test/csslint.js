var should = require('should'),
    Blob = require('gear').Blob,
    csslint = require('../lib/csslint').csslint,
    fixtures = {
        css: new Blob('%%%%')
    };

describe('csslint()', function() {
    it('should lint css', function(done) {
        csslint({}, fixtures.css, function(err, res) {
            res.csslint.length.should.be.above(0);
            done(err);
        });
    });
});