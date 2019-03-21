const allInputs = document.querySelectorAll(".controls input");

const handleChange = (e)=>{
const suffix = e.target.dataset.sizing || "";
    const root =document.documentElement;
    console.log(e.target.name,e.target.value,suffix);
    root.style.setProperty(`--${e.target.name}`,e.target.value+suffix)
};

//allInputs.forEach(input=> input.addEventListener("change",handleChange));
allInputs.forEach(input=> input.addEventListener("input",handleChange));