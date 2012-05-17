var csslint = require('../lib/csslint').csslint.fn,
    fixtures = {
        css: {body: '%%%%'}
    };

describe('csslint()', function() {
    it('should lint css', function(done) {
        csslint({}, fixtures.css, function(err, results) {
            done(err);
        });
    });
});