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
JS("h1").style({
  color: "#ffe570",
  fontFamily: "sans-serif",
});
```

<p style="color: rgba(0,0,0,0.4)">Also help the development by reporting any bugs. Feel free to contribute to this project. Thanks ❤</p>

### Benefits

- Easy and readable syntax
- Just one JavaScript file. You won't need css
- Extremely lightweight: Only 500B (271B gzipped!)
- Zero dependencies

### CDN

```
<script src="https://unpkg.com/jstyling/src/jstyling.js">
```

### NPM Installation

```
npm i jstyling
```

### Usage

```
JS("h4").style({
  color: "pink",
  fontFamily: "sans-serif",
});

// Also you can pass in a raw DOMElement
const element = document.querySelector("h4");
JS(element).style({
  color: "pink",
});
```

### Options

```
JS(indentifier).style({
  // Your styles go here!
  fontFamily: "",
  fontSize: "",
  color: "",
  // ...
  // ...
  // Remember, it's all camelCase
});
```

- indentifier: [string] or DOMElement
  - The element you want to style

##### The full list of all the options are the same as vanilla javascript. You can follow this useful guide for all the possible options: [w3schools.com](https://www.w3schools.com/jsref/dom_obj_style.asp)
