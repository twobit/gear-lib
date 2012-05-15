var jsminify = require('../lib/jsminify').jsminify,
    fixtures = {
        js: [{content: 'function   test(  x )  {console.log(x);;;;}'}]
    };

describe('jsminify()', function() {
    it('should minify js', function(done) {
        jsminify({}, fixtures.js, console, function(err, results) {
            console.log(results);
            done(err);
        });
    });
});