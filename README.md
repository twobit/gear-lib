# taskjs-common

## Collection of common tasksjs tasks

Useful tasks to lint, minify, and deploy assets.

## Quick Examples

### Deploy to S3

```
new taskjs.Queue()
 .files(['foo.js', 'bar.js', 'baz.js']
 .concat()
 .jslint()
 .jsminify()
 .s3()
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

__Example__

```
.jslint()
```

---------------------------------------

<a name="jsminify" />
### jsminify()

Minify Javascript files.

__Example__

```
.jsminify()
```

---------------------------------------

<a name="csslint" />
### csslint()

Lint CSS files.

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

__Example__

```
.s3()
```