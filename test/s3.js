var s3 = require('../lib/s3').s3.fn,
    fixtures = {
        options: {
            name: 'test.js',
            client: {
                key: 'AKIAJ6RILQHB3LDITXYQ',
                secret: '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',
                bucket: 'gear'
            }
        },
        js: {body: 'function   test(  x )  {console.log(x);;;;}'}
    };

describe('s3()', function() {
    it('should deploy to s3', function(done) {
        s3(fixtures.options, fixtures.js, function(err, results) {
            done(err);
        });
    });
});