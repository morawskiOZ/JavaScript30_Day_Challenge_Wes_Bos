let time;
let hours;
let minutes;
let seconds;
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

let checkTime = ()=>{
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    if (seconds === 0){
        secondHand.style.transition = `none`;
    } else
        secondHand.style.transition = "";
    if (minutes === 0){
        minHand.style.transition = `none`;
    } else
        minHand.style.transition = "";
    if (hours === 0 || hours === 12){
        hourHand.style.transition = `none`;
    } else
        hourHand.style.transition = "";
    hourHand.style.transform = `rotate(${(hours+12)*30+90}deg)`;
    minHand.style.transform = `rotate(${(minutes)*6+90}deg)`;
    secondHand.style.transform = `rotate(${(seconds)*6+90}deg)`;
} ;
checkTime();
let myClock = setInterval(()=> checkTime(), 1000);


