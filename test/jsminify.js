var jsminify = require('../lib/jsminify').jsminify.fn,
    fixtures = {
        js: {body: 'function   test(  x )  {console.log(x);;;;}'}
    };

describe('jsminify()', function() {
    it('should minify js', function(done) {
        jsminify({}, fixtures.js, function(err, results) {
            done(err);
        });
    });
});