# Anchor/Null

The null module exports `null` and is used when mapping modules to an
unsupported runtime.

## Install

##### volo

    $ volo add anchorjs/null

For more information on using volo to manage JavaScript modules, visit [http://volojs.org/](http://volojs.org/).

## Usage

#### Configure

To map an unsupported module to the `null` module, use the `map` option when
[configuring](https://github.com/amdjs/amdjs-api/wiki/Common-Config) a
compatible [AMD](https://github.com/amdjs/amdjs-api) loader, such as [RequireJS](http://requirejs.org/).

```javascript
require.config({
  packages: [
    { name: 'null', main: 'null' },
  ],
  map: {
    '*': {
      'fs': 'null'
    }
  }
});
```

#### Detect Module Support

In the above example, any time the `fs` module is `require()`'d, the `null`
module will be substituted.  This is particularly useful when using [Node](http://nodejs.org/)
modules in a browser context, via technologies such as [JSMT](https://github.com/jaredhanson/jsmt).

Inside a module that uses the file system, support can be conditionally checked.

```javascript
if (fs) {
  // access the file system
} else {
  // fallback behavior
}
```

When running in Node, the module has access to the file system.  However, when
running within a browser, the file system is not available and fallback behavior
is executed.

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
