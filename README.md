# gear-lib

## Collection of common [Gear.js](/twobit/gear) tasks

Useful tasks to lint, minify, and deploy assets.

## Installation

```
npm install gear-lib
```

## Quick Examples

### Deploy to S3

```
gear.queue()
 .load(['foo.js', 'bar.js', 'baz.js'])
 .concat()
 .jslint()
 .jsminify()
 .s3({file: 'foobarbaz.js', client: {
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

```
.jslint()
```

---------------------------------------

<a name="jsminify" />
### jsminify()

Minify Javascript files.

__Arguments__

 * options - Options for uglify-js.

__Example__

```
.jsminify()
```

---------------------------------------

<a name="csslint" />
### csslint()

Lint CSS files.

__Arguments__

 * options - Options for CSSLint.

__Example__

```
.csslint()
```

---------------------------------------

<a name="cssminify" />
### cssminify()

Minify CSS files.

__Example__

```
.cssminify()
```

---------------------------------------

<a name="s3" />
### s3()

Deploy file to S3.

__Arguments__

 * options.file - Filename to write to S3.
 * options.client.key - S3 key.
 * options.client.secret - S3 secret.
 * options.client.bucket - S3 bucket.

__Example__

```
 .s3({file: 'foobarbaz.js', client: {
    key: '<key>',
    secret: '<secret>',
    bucket: 'gearjs'
 }})
```