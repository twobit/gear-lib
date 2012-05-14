var knox = require('knox'),
    Crypto = require('crypto'),
    mime = require('mime');

/**
 * Send content to S3 with an optional checksum in the filename.
 *
 * @param options {Object} S3 task options.
 * @param options.name {String} Resource name.
 * @param options.client {Object} S3 client (key, secret, bucket).
 * @param objects {Array} Object chain.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.s3 = function(options, objects, logger, callback) {
    var self = this,
        name = options.name,
        root = (options && options.root) || '',
        client,
        md5sum,
        req;

    client = knox.createClient(options.client);

    if (name.indexOf('{checksum}') > -1) {  // Replace {checksum} with md5 string
        md5sum = Crypto.createHash('md5');
        md5sum.update(data);
        name = name.replace('{checksum}', md5sum.digest('hex'));
    }

    name = root + name;
    req = client.put(name, {'Content-Length': data.length, 'Content-Type': mime.lookup(name)});

    req.on('response', function (res) {
        if (res.statusCode === 200) {
            callback(null, objects);
        } else {
            logger.log('Failed to write to S3');
            callback(true);
        }
    });
    
    req.end(data);
};