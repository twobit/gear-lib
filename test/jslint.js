var jslint = require('../lib/jslint').jslint.fn,
    fixtures = {
        js: {body: '^^^^'}
    };

describe('jslint()', function() {
    it('should lint js', function(done) {
        jslint({}, fixtures.js, console, function(err, results) {
            console.log(results);
            done(err);
        });
    });
});