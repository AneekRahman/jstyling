const JSConstructor = function (identifier) {
  if (identifier && identifier != "")
    this.elements = document.querySelectorAll(identifier);
};

JSConstructor.prototype.style = function (styles) {
  const styleKeys = Object.keys(styles);
  if (this.elements && this.elements.length != 0) {
    this.elements.forEach((element) => {
      styleKeys.forEach((styleName) => {
        element.style[styleName] = styles[styleName];
      });
    });
  }
};

const JS = function (identifier) {
  return new JSConstructor(identifier);
};
