const allCheckbox = [...document.querySelectorAll(".item")];
console.log(allCheckbox);
const isKeyPressed = ()=> {
	return event.shiftKey;
};
let firstClickIndex ;
let secondClickIndex ;

allCheckbox.forEach((element) => element.addEventListener("click",(e) => {
	const currentCheckBox = e.currentTarget.firstChild.nextSibling;
	const currentIndex = allCheckbox.indexOf(e.currentTarget);
	currentCheckBox.checked = !currentCheckBox.checked;
	if( !(firstClickIndex === currentIndex) &&
		isKeyPressed() && firstClickIndex !== undefined && (currentCheckBox.checked) ){
		 secondClickIndex = currentIndex;

		if(firstClickIndex < secondClickIndex){
			for (let i = firstClickIndex+1; i<secondClickIndex; i++){
				allCheckbox[i].firstChild.nextSibling.checked = true;
			}
		}
		if(firstClickIndex > secondClickIndex){
			for (let i = secondClickIndex+1; i<firstClickIndex; i++){
				allCheckbox[i].firstChild.nextSibling.checked = true;
			}
		}
		return
	}
	 firstClickIndex = currentIndex;
}));
 for (let i =1; i < 12 ; i++){
 
 }