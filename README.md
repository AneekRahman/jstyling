# JStyling

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/jstyling.svg
[npm-url]: https://npmjs.org/package/jstyling
[downloads-image]: https://img.shields.io/npm/dm/jstyling.svg
[downloads-url]: https://npmjs.org/package/jstyling

### What is this?

This is a library which can do Styling totally inside of JavaScript. Just like you would do inside of a CSS file. Without having to make everything look gibberish inside you JS file.

Like this:

```
JS("body").style({
  backgroundColor: "rgba(0,0,0,0.8)",
  paddingBottom: "20%",
});
JS("h1").style({
  color: "#ffe570",
  fontFamily: "sans-serif",
});
```

<p style="color: rgba(0,0,0,0.4)">Also help the development by reporting any bugs. Feel free to contribute to this project. Thanks ❤</p>

### Benefits

- Extremely lightweight: Only 500B (271B gzipped! You can't go lower than this!)
- No dependency: It's all Pure javascript
- Makes your code readable

### CDN

```
<script src="https://unpkg.com/jstyling/src/jstyling.js">
```

And then use it like this:

```
JS("h4").style({
  color: "pink",
  fontFamily: "sans-serif",
});
```

### NPM Installation

```
npm i jstyling
```

And then use it like this:

```
import LazLoad from 'lazload';

JS("div").style({
  backgroundImage: "url(...)",
  backgroundPosition: "center"
});
```

### Options

```
JS("any-tag-here").style({
  // Your styles go here!
  fontFamily: "",
  fontSize: "",
  color: "",
  // ...
  // ...
  // Remember, it's all camelCase
});
```
