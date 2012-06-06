var Blob = require('gear').Blob,
    jslint = require('../lib/jslint').jslint,
    fixtures = {
        js: new Blob('^^^^')
    };

describe('jslint()', function() {
    it('should lint js', function(done) {
        jslint({}, fixtures.js, function(err, results) {
            done(err);
        });
    });
});