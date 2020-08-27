# <img src="./docs/jstyling-logo.svg" height="120">

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/jstyling.svg
[npm-url]: https://npmjs.org/package/jstyling
[downloads-image]: https://img.shields.io/npm/dm/jstyling.svg
[downloads-url]: https://npmjs.org/package/jstyling

## What is this?

This is a library which can do Styling totally inside of JavaScript. React like object passing in as the styling. No more having to make everything look gibberish inside you JS file to update or set the styling.

The power of JavaScript and CSS, In one file!

Like this:

```
// Create a style object or directly pass it in
var style = {
  height: "400px",
  backgroundColor: "rgb(100, 150, 200)",
  transform: "translateX(50px)"
}

// Apply styles to all div and #hero
JS("div, #hero").style(style);

// Reapply all styles with a twist! To another element!
style.opacity = ".5";
JS(".another").style(style);
```

<p style="color: rgba(0,0,0,0.4)">Also help the development by reporting any bugs. Feel free to contribute to this project. Thanks ❤</p>

## Benefits

- Easy and readable syntax
- JavaScript + CSS alteration together
- Extremely lightweight: Only 1.2kB (500B gzipped!)
- Zero dependencies

## CDN

```
<script src="https://unpkg.com/jstyling/src/jstyling.js">
```

## NPM Installation

```
npm i jstyling
```

## Usage

```

var style = {
  color: "pink",
  fontFamily: "sans-serif",
  fontSize: "1.5em",
  transform: "rotate(45deg)",
}

// ---- Select and Style!

JS("h4").style(style);
JS("#thebestdiv").style(style);

style.transform = "rotate(360deg)"; // -- These changes will only affect later JStyled elements from here

JS(".weirdclass").style(style);
JS("ul li").style(style); // -- Children of ul
JS("div .someClass").style(style); // -- Only .someClass children of div

const element = document.querySelector("p"); // -- Also you can pass in a element as well
JS(element).style(style);
```

Because it is javascript, you can do all sorts of things!

```
var style = {
  width: "100%",
  height: "500px",
  backgroundColor: "orange",
  transition: "1s",
}
JS("#hero").style(style);

setTimeout(()=>{

  style.backgroundColor = "blue";
  style.height = "1000px",
  JS("#hero").style(style);

}, 2000);

// A click callback
document.querySelector("button")
  .addEventListener("mousedown", () => {

  style.transform = "translateX(30px)";
  JS("#hero").style(style);

});

```

## Options

```
JS(indentifier).style({
  // Your styles go here!
  maxHeight: "",
  fontSize: "",
  color: "",
  // ...
  // Remember, it's all camelCase
});
```

- indentifier: [string] or DOMElement
  - The element you want to style
- Style object: [object]
  - styleName: "string"

### The full list of all the options are the same as vanilla javascript. You can follow this useful guide for all the possible options:

[w3schools.com](https://www.w3schools.com/jsref/dom_obj_style.asp)
