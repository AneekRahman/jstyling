##### <img src="./jstyling-logo.svg" height="120">

<b> _- I don't hate css files, but you just won't need them anymore._ </b>

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/jstyling.svg
[npm-url]: https://npmjs.org/package/jstyling
[downloads-image]: https://img.shields.io/npm/dm/jstyling.svg
[downloads-url]: https://npmjs.org/package/jstyling

# Intro

<b>You won't ever need a CSS file every again! Why not just do everything in JavaScript!</b>

This is a library which can do Styling totally inside of JavaScript.

React.JS inspired object passing in as the styling, and CSS like element selection!
No more having to make everything look gibberish inside your JS file for styling.

# What's new in v1.0.13

- Ability to animate using `.animate()`
- Write raw CSS in JS using `.setStyle()`

# Example

<img src="./example.gif" width="400px">

Code for this inside `example/client.js` (Check out how simple it is!)

# Intro Code Example

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
```

<p style="color: rgba(0,0,0,0.4)">Also help the development by reporting any bugs. Feel free to contribute to this project. Thanks ❤</p>

# Benefits

- Easy and readable syntax
- IT'S JUST ONE JS FILE, NO CSS
- Extremely lightweight: Only 1.2kB (500B gzipped!)

# CDN

```
<script src="https://unpkg.com/jstyling@1.0.12/src/jstyling.js">
```

# NPM Installation

```
npm i jstyling
```

# Docs

## .style()

Set the styling using this method:

```
// You pass in a JavaScript Object to .style({})
JS("button").style({
  backgroundColor: "transparent",
  backgroundImage: "linear-gradient(rgba(0,0,0,.02), rgba(0,0,0,.03))",
  border: "1px solid rgba(0,0,0,.05)",
  color: "#006edb",
  padding: ".5em 1.6em",
  borderRadius: ".5em",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.04)",
});
```

Select any elements just like you would in CSS:

```
JS("h4").style(style); // Every h4
JS("#hero").style(style); // Just #hero
JS("ul li").style(style); // Children of ul

// Also DOMElements work!
const element = document.querySelector("p");
JS(element).style(style);
```

Reapply new styles on callbacks:

```
// Set a transition to get the animation effect!
JS("#hero").style({
  width: "100%",
  height: "500px",
  backgroundColor: "orange",
});

document
  .querySelector("button")
  .addEventListener("mousedown", () => {

  JS("#hero").style({
    style.transform = "translateX(30px)"
  });
});
```

## .animate()

If you want to animate an element, you should use this method.

```
JS("#button3").animate({
  styles: {
    backgroundColor: "#006edb",
    height: "500px",
  },
  duration: 1000,
  ease: "ease-in-out",
});
```

`.animate()` takes in an `Object` with these parameters:

1. `styles:` - Pass in a styling `Object` consisting all of your styles you want to animate in.
2. `duration:` - Duration of the animation in `integer` miliseconds.
3. `ease:` - The transition-timing-function easing as `string`. All of the CSS easing work

## .setStyle()

If you feel like you can't access anything from the JavaScript Style Object, you can always use this method to write the CSS, inside of JavaScript of course.

```
// Use backticks as they can give you multi-line strings!
JS().setStyle(`
  * {
    font-family: Arial
  }
  h2::after{
    content: "hello"
  }
`);
```

---

# Styling Options

```
JS("#indentifier").style({
  // Your styles go here!
  maxHeight: "",
  fontSize: "",
  color: "",
  // ...
  // Remember, it's all camelCase
});
```

<b>The full list of all the options are the same as vanilla javascript. You can follow this useful guide for all the possible options:<b>

[w3schools.com](https://www.w3schools.com/jsref/dom_obj_style.asp)
