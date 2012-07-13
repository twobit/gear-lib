var Blob = require('gear').Blob,
    replace = require('../lib/replace').replace,
    fixtures = {
        js: new Blob("function (x) { Y.log('REMOVEME');}"),
        options : {
			regex: "^[ ]+(?:this\\.Y\\.log|Y\\.log|console\\.log).*?(?:;|\\).*;|(?:\r?\n.*?)*?\\).*;).*;?.*?\r?\n",
			replace: '',
			flags: 'mg'
        }
    };

describe('replace()', function() {
    it('should replace text', function(done) {
        replace(fixtures.options, fixtures.js, function(err, results) {
            done(err);
        });
    });
});