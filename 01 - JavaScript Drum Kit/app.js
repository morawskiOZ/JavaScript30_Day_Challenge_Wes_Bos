document.addEventListener("keydown", (e)=> {

let audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
let key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
if (!key) return;
key.classList.add("playing");
if (!audio) return; 
audio.currentTime = 0;
audio.play() 
})  ;

const removeTransition = (e) => {
    if (e.propertyName !== "transform") return;
e.target.classList.remove("playing")
};
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend" , removeTransition) );