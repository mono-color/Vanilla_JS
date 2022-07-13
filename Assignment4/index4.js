const dDay = document.querySelector("#dDay")

function countTime(){
    const cristmas = new Date(2022, 11, 25, 0, 0, 0)
    const today = new Date();
    const timeTerm = (cristmas - today)/1000;
    const day = String(Math.floor(timeTerm / (60*60*24))).padStart(3, "0");
    const hour = String(Math.floor((timeTerm % (60*60*24))/(60*60))).padStart(2, "0");
    const minute = String(Math.floor(((timeTerm % (60*60*24)) % (60*60)) / 60)).padStart(2, "0");
    const second = String(Math.floor(timeTerm % 60)).padStart(2, "0");
    dDay.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}

setInterval(countTime, 1000);