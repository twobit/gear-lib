# gear-lib

## Collection of common [Gear.js](/twobit/gear) tasks

Useful tasks to lint, minify, and deploy assets.

[![Build Status](https://secure.travis-ci.org/twobit/gear-lib.png)](http://travis-ci.org/twobit/gear-lib)

## Installation

```bash
$ npm install gear-lib
```

## Quick Examples

### Deploy to S3

```javascript
new Queue({registry: new Registry({module: 'gear-lib'})})
    .read(['foo.js', 'bar.js', 'baz.js'])
    .concat()
    .jslint()
    .jsminify()
    .s3({name: 'foobarbaz.js', client: {
        key: '<key>',
        secret: '<secret>',
        bucket: 'gearjs'
    }})
    .run();
```

## Documentation

### Tasks

 * [jslint](#jslint)
 * [jsminify](#jsminify)
 * [csslint](#csslint)
 * [cssminify](#cssminify)
 * [s3](#s3)

## Tasks

<a name="jslint" />
### jslint()

Lint Javascript files.

__Arguments__

 * options - Options for JSLint.

__Example__

```javascript
.jslint()
```

---------------------------------------

<a name="jsminify" />
### jsminify()

Minify Javascript files.

__Arguments__

 * options - Options for uglify-js.

__Example__

```javascript
.jsminify()
```

---------------------------------------

<a name="csslint" />
### csslint()

Lint CSS files.

__Arguments__

 * options - Options for CSSLint.

__Example__

```javascript
.csslint()
```

---------------------------------------

<a name="cssminify" />
### cssminify()

Minify CSS files.

__Example__

```javascript
.cssminify()
```

---------------------------------------

<a name="s3" />
### s3()

Deploy file to S3.

__Arguments__

 * options.name - Filename to write to S3.
 * options.client.key - S3 key.
 * options.client.secret - S3 secret.
 * options.client.bucket - S3 bucket.

__Example__

```javascript
 .s3({name: 'foobarbaz.js', client: {
    key: '<key>',
    secret: '<secret>',
    bucket: 'gearjs'
 }})
```
