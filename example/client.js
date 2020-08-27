JS("body").style({
  backgroundColor: "rgba(0,0,0,0.8)",
  padding: "2em",
  paddingBottom: "20%",
});

// const element = document.querySelector("h4");
// JS(element).style({
//   color: "pink",
// });

let style = {
  color: "#ffe570",
  fontFamily: "sans-serif",
  border: "3px solid #ffe570",
  padding: ".4em",
  height: "100px",
};

JS("div .someClass").style(style);

setTimeout(() => {
  style.backgroundColor = "blue";
  style.transition = "1s";
  style.height = "1000px";
  JS("h3").style(style);
}, 2000);

document.querySelector("h4").addEventListener("mousedown", () => {
  style.transform = "translateX(30px)";
  JS("h4").style(style);
});
