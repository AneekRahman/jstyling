const JSConstructor = function (identifier) {
  if (identifier && identifier != "") {
    // Is an identifier string
    if (typeof identifier === "string")
      this.elements = document.querySelectorAll(identifier);
    // Is an element itself
    if (isElement(identifier)) this.elements = [identifier];
  }
};

function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}

// Entry point
JSConstructor.prototype.style = function (styles = {}) {
  // No elements found
  if (!this.elements || this.elements.length === 0) {
    console.error("JStyling: No elements found to style");
    return;
  }
  const styleKeys = Object.keys(styles);
  // No styles found
  if (!styleKeys || styleKeys.length === 0) {
    console.error("JStyling: No styles found to implement");
    return;
  }

  document.querySelector("body").style.boxSizing = "border-box";
  document.querySelector("body").style.margin = "0";

  this.elements.forEach((element) => {
    styleKeys.forEach((styleName) => {
      element.style[styleName] = styles[styleName];
    });
  });
};

// Todo finish this
JSConstructor.prototype.animate = function (styles = {}) {};

const JS = function (identifier) {
  return new JSConstructor(identifier);
};

export default JS;
