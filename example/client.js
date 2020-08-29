JS("body").style({
  padding: "3em",
  maxWidth: "500px",
});

JS("h1, h2, h3, h4, h5, h6, p").style({
  fontFamily: "sans-serif",
  textAlign: "center",
});

JS("p").style({
  color: "orange",
  fontSize: "1.3em",
  transition: ".4s",
});

JS("button").style({
  fontSize: "1em",
  backgroundColor: "transparent",
  backgroundImage: "linear-gradient(rgba(0,0,0,.02), rgba(0,0,0,.03))",
  border: "1px solid rgba(0,0,0,.05)",
  color: "#006edb",
  padding: ".5em 1.6em",
  borderRadius: ".5em",
  boxShadow: "0px 1px 3px rgba(0,0,0,0.04)",
  cursor: "pointer",
  width: "100%",
  marginTop: ".3em",
});

JS("img").style({
  marginTop: "2em",
  transition: "1s",
});

document.querySelector("#button1").addEventListener("mousedown", () => {
  JS("img").style({
    transform: "rotate(360deg)",
  });
  JS("p").style({
    color: "orange",
  });
});

document.querySelector("#button2").addEventListener("mousedown", () => {
  JS("img").style({
    transform: "rotate(-360deg)",
  });
  JS("p").style({
    color: "lightblue",
  });
});

document.querySelector("#button3").addEventListener("mousedown", () => {
  JS("#button3").animate({
    styles: {
      fontSize: "2em",
      backgroundColor: "#006edb",
      color: "white",
    },
    duration: 1000,
    ease: "ease-in-out",
  });
});

JS().setStyle(`
* {
  box-sizing: border-box;
}
`);
