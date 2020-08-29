class JSConstructor {
  constructor(identifier) {
    if (identifier && identifier != "") {
      // Is an identifier string
      if (typeof identifier === "string")
        this.elements = document.querySelectorAll(identifier);
      // Is an element itself
      if (this.isElement(identifier)) this.elements = [identifier];
    }
  }
  isElement = (element) => {
    return element instanceof Element || element instanceof HTMLDocument;
  };
  checkIfRequestValid = (styleKeys) => {
    // No elements found
    if (!this.elements || this.elements.length === 0) {
      console.error("JStyling: No elements found to style");
      return false;
    }
    // No styles found
    if (!styleKeys || styleKeys.length === 0) {
      console.error(
        "JStyling: No styles found to implement for: " +
          this.elements[0].tagName.toLowerCase()
      );
      return false;
    }
    return true;
  };
  setupStyleOnElements = ({ styles, styleKeys, duration, ease }) => {
    if (this.elements.length === 1) {
      styleKeys.forEach((styleName) => {
        this.elements[0].style[styleName] = styles[styleName];
        if (duration) this.elements[0].style.transition = `${duration}ms`;
        if (ease) this.elements[0].style.transitionTimingFunction = ease;
      });
    } else if (this.elements.length > 1) {
      this.elements.forEach((element) => {
        styleKeys.forEach((styleName) => {
          element.style[styleName] = styles[styleName];
          if (duration) element.style.transition = `${duration}ms`;
          if (ease) this.elements[0].style.transitionTimingFunction = ease;
        });
      });
    }
  };
  // ----------------- ENTRY POINTS
  style = (styles = {}) => {
    const styleKeys = Object.keys(styles);
    if (!this.checkIfRequestValid(styleKeys)) return;
    this.setupStyleOnElements({ styles, styleKeys });
    return this;
  };
  animate = ({ styles, duration, ease }) => {
    const styleKeys = Object.keys(styles);
    if (!this.checkIfRequestValid(styleKeys)) return;
    this.setupStyleOnElements({ styles, styleKeys, duration, ease });
    return this;
  };
  setStyle = (styleString) => {
    let styleElement = document.querySelector("style");
    if (!styleElement) {
      const newStyleElement = document.createElement("style");
      document.querySelector("head").appendChild(newStyleElement);
      styleElement = newStyleElement;
    }
    styleElement.innerHTML += styleString;
  };
}
const JS = function (identifier) {
  return new JSConstructor(identifier);
};

export default JS;
