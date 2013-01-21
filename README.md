# serializeForm

Make an object out of form elements

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/danheberden/serializeForm/master/dist/serializeForm.min.js
[max]: https://raw.github.com/danheberden/serializeForm/master/dist/serializeForm.js

## To Use

$.fn.serializeForm makes an object out of form elements inside of the specified item.

Example:

```html
<div id="test">
  <input name="text1" value="txt-one" />
  <input type="checkbox" name="top[child][]" value="1" checked="checked" />
  <input type="checkbox" name="top[child][]" value="2" checked="checked" />
  <input type="checkbox" name="top[child][]" value="3" checked="checked" />

  <select name="another[select]">
    <option value="opt"></option>
  </select>
</div>
```


```javascript
$( '#test' ).serializeForm();
```

Returns

```javascript
{ text1: "txt-one",
  top: {
    child: [ "1", "2", "3" ]
  },
  another: {
    select: "opt"
  }
}
```

## Release History

1.1.3 Fix multiwork keyword in jquery manifest file
1.1.2 Update manifest files and erase old tags for plugin site
1.1.1 Rename to serializeForm from serializeObject
1.1.0 Support finding input elements on the jQuery collection itself and find in multiple elements
1.0.0 Actual release while moving to grunt and adding licensing information

## License
Copyright (c) 2012 Dan Heberden  
Licensed under the MIT, GPL licenses.

### Important notes
Please don't edit files in the `dist` subdirectory as they are generated via grunt. You'll find source code in the `src` subdirectory!

While grunt can run the included unit tests via PhantomJS, this shouldn't be considered a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in _actual_ browsers.

### Installing grunt
_This assumes you have [node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed already._

1. Test that grunt is installed globally by running `grunt --version` at the command-line.
1. If grunt isn't installed globally, run `npm install -g grunt` to install the latest version. _You may need to run `sudo npm install -g grunt`._
1. From the root directory of this project, run `npm install` to install the project's dependencies.

### Installing PhantomJS

In order for the qunit task to work properly, [PhantomJS](http://www.phantomjs.org/) must be installed and in the system PATH (if you can run "phantomjs" at the command line, this task should work).

Unfortunately, PhantomJS cannot be installed automatically via npm or grunt, so you need to install it yourself. There are a number of ways to install PhantomJS.

* [PhantomJS and Mac OS X](http://ariya.ofilabs.com/2012/02/phantomjs-and-mac-os-x.html)
* [PhantomJS Installation](http://code.google.com/p/phantomjs/wiki/Installation) (PhantomJS wiki)

Note that the `phantomjs` executable needs to be in the system `PATH` for grunt to see it.

* [How to set the path and environment variables in Windows](http://www.computerhope.com/issues/ch000549.htm)
* [Where does $PATH get set in OS X 10.6 Snow Leopard?](http://superuser.com/questions/69130/where-does-path-get-set-in-os-x-10-6-snow-leopard)
* [How do I change the PATH variable in Linux](https://www.google.com/search?q=How+do+I+change+the+PATH+variable+in+Linux)
