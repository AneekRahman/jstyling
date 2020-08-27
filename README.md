# <img src="./docs/jstyling-logo.svg" height="120">

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/jstyling.svg
[npm-url]: https://npmjs.org/package/jstyling
[downloads-image]: https://img.shields.io/npm/dm/jstyling.svg
[downloads-url]: https://npmjs.org/package/jstyling

# What is this?

This is a library which can do Styling totally inside of JavaScript. React.JS inspired object passing in as the styling. No more having to make everything look gibberish inside your JS file to update or set the styling.

The power of JavaScript and CSS, In one file!

Like this:

```
// Style it! Keep it Neat & Clean
JS("button").style({
  backgroundColor: "transparent",
  backgroundImage: "linear-gradient(rgba(0,0,0,.02), rgba(0,0,0,.03))",
  border: "1px solid rgba(0,0,0,.05)",
  color: "#006edb",
  padding: ".5em 1.6em",
  borderRadius: ".5em",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.04)",
});

// Again style it on click!
document
  .querySelector("button")
  .addEventListener("mousedown", () => {

    JS("button").style({
      backgroundColor: "#006edb",
      color: "white",
    });

});
```

<p style="color: rgba(0,0,0,0.4)">Also help the development by reporting any bugs. Feel free to contribute to this project. Thanks ❤</p>

# Example

![JStyling demo][example]

[example]: ./docs/example.gif "JStyling demo"

Code for this inside `example/client.js` (Check out how simple it is!)

# Benefits

- Easy and readable syntax
- JavaScript + CSS alteration together
- Extremely lightweight: Only 1.2kB (500B gzipped!)
- Zero dependencies

# CDN

```
<script src="https://unpkg.com/jstyling/src/jstyling.js">
```

# NPM Installation

```
npm i jstyling
```

# Usage

```

var style = {
  color: "pink",
  fontFamily: "sans-serif",
  fontSize: "1.5em",
  transform: "rotate(45deg)",
}

// Select using any of the css selectors!

JS("h4").style(style);
JS("#thebestdiv").style(style);
JS("ul li").style(style); // Children of ul

// It's a JS object, use it as you wish
style.transform = "rotate(360deg)";

// Also DOMElements work!
const element = document.querySelector("p");
JS(element).style(style);
```

Because it is javascript, you can do all sorts of things!

```
JS("#hero").style({
  width: "100%",
  height: "500px",
  backgroundColor: "orange",
  transition: "1s",
});

// Animate it on any events!
document
  .querySelector("button")
  .addEventListener("mousedown", () => {

  JS("#hero").style({
    style.transform = "translateX(30px)"
  });

});

```

# Options

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
    All of the JavaScript supported options!

##### The full list of all the options are the same as vanilla javascript. You can follow this useful guide for all the possible options:

[w3schools.com](https://www.w3schools.com/jsref/dom_obj_style.asp)
