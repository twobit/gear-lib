var tasks = [
    './lib/csslint',
    './lib/cssminify',
    './lib/jslint',
    './lib/jsminify',
    './lib/s3'
];

tasks.forEach(function(task) {
    var mod = require(task),
        name;

    for (name in mod) {
        exports[name] = mod[name];
    }
});