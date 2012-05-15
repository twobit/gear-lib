var jslint = require('../lib/jslint').jslint,
    fixtures = {
        js: [{content: '^^^^'}]
    };

describe('jslint()', function() {
    it('should lint js', function(done) {
        jslint({}, fixtures.js, console, function(err, results) {
            console.log(results);
            done(err);
        });
    });
});