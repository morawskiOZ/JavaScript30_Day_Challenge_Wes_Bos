console.log("dom")
const panels = document.querySelectorAll(".panel")

const toggleOpen = (e) => {
  e.currentTarget.classList.toggle("open")

};
const toggleOpenActive = (e) => {
    console.log(e)
    console.log(e.propertyName)
    if (e.propertyName.includes("flex")){
        e.currentTarget.classList.toggle("open-active")
    }

};



panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleOpenActive));
