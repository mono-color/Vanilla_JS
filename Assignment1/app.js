
const dib = document.querySelector(".hell");

if(dib.style.color ===""){
    dib.style.color = "tomato";
}else if(dib.style.color ==="tomato"){
    dib.style.color = "white";
}
function hello(){
    
}
dib.addEventListener("click", hello);

const superEventHandler = {
    handleEnter: function () {
        nico.innerText = "Pointer is here!";
        nico.style.color = "#1abc9c";
    },
    handleLeave: function () {
        nico.innerText = "Pointer is gone!";
        nico.style.color = "#9b59b6";
    },
    handleResize: function () {
        nico.innerText = "Resizing~~";
        nico.style.color = "#e74c3c";
    },
    handleRightClick: function () {
        nico.innerText = "What will you do?";
        nico.style.color = "#3498db";
    },
};
const nico = document.querySelector("body h2");

nico.addEventListener("mouseenter", superEventHandler.handleEnter);
nico.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleRightClick);