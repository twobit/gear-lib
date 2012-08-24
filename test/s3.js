var Blob = require('gear').Blob,
    s3 = require('../lib/s3').s3,
    fixtures = {
        options: {
            name: 'test.js',
            client: {
                key: 'AKIAJ6RILQHB3LDITXYQ',
                secret: '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',
                bucket: 'gearjs'
            }
        },
        js: new Blob('function   test(  x )  {console.log(x);;;;}')
    };

describe('s3()', function() {
    // Travis CI can't write to S3
    /*
    it('should deploy to s3', function(done) {
        s3(fixtures.options, fixtures.js, function(err, results) {
            done(err);
        });
    });
    */

    it('should replace {checksum} in filename');
});