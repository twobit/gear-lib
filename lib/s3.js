var knox = require('knox'),
    Crypto = require('crypto'),
    mime = require('mime');

/**
 * Send message to S3 with an optional checksum in the filename.
 *
 * @param options {Object} S3 task options.
 * @param options.file {String} Resource name.
 * @param options.client {Object} S3 client (key, secret, bucket).
 * @param message {Object} Incoming message.
 * @param done {Function} Callback on task completion.
 */
var s3 = exports.s3 = function s3(options, message, done) {
    var self = this,
        name = options.file,
        root = (options && options.root) || '',
        body,
        client,
        checksum,
        req;

    body = message.body;
    client = knox.createClient(options.client);

    if (name.indexOf('{checksum}') > -1) {  // Replace {checksum} with md5 string
        checksum = Crypto.createHash('md5');
        checksum.update(body);
        name = name.replace('{checksum}', checksum.digest('hex'));
    }

    name = root + name;
    req = client.put(name, {'Content-Length': body.length, 'Content-Type': mime.lookup(name)});

    req.on('response', function (res) {
        if (res.statusCode === 200) {
            done(null, message);
        } else {
            done('Failed to write to S3');
        }
    });
    
    req.end(body);
};
s3.type = 'take';