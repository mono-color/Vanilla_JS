const h1 = document.querySelector("body h1");
const body = document.querySelector("body");

const changeColor = {
  textColor: function () {
    h1.style.color = "white";
  },
  classColor: function () {
    if (window.innerWidth > 1000) {
      body.classList.remove("normal-size");
      body.classList.remove("small-size");
      body.classList.add("big-size");
    } else if (window.innerWidth < 1000 && window.innerWidth > 600) {
      body.classList.remove("big-size");
      body.classList.remove("small-size");
      body.classList.add("normal-size");
    } else {
      body.classList.remove("big-size");
      body.classList.remove("normal-size");
      body.classList.add("small-size");
    }
  },
};

changeColor.textColor();
window.addEventListener("resize", changeColor.classColor);
