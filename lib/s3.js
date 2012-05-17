var knox = require('knox'),
    Crypto = require('crypto'),
    mime = require('mime');

/**
 * Send message to S3 with an optional checksum in the filename.
 *
 * @param options {Object} S3 task options.
 * @param options.name {String} Resource name.
 * @param options.client {Object} S3 client (key, secret, bucket).
 * @param message {Object} Incoming message.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.s3 = {
    fn: function(options, message, logger, callback) {
        var self = this,
            name = options.name,
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
                callback(null, message);
            } else {
                logger.log('Failed to write to S3');
                callback(true);
            }
        });
        
        req.end(body);
    }
};