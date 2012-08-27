var Blob = require('gear').Blob,
    jsminify = require('../lib/jsminify').jsminify,
    fixtures = {
        js: new Blob('function   test(  x )  {console.log(x);;;;}'),
        min: 'function test(x){console.log(x);}'
    };

describe('jsminify()', function() {
    it('should minify js', function(done) {
        jsminify({}, fixtures.js, function(err, res) {
            res.result.should.equal(fixtures.min);
            done(err);
        });
    });
});