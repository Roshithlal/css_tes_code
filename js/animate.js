function moveTheSun(argument) {
	var initalPositon = 0;
	var event = setInterval(sunRise, 5);
	var elem = document.querySelector(".ball");
	function sunRise(){
		if(initalPositon == 210){
			clearInterval(event);
		}else{
			initalPositon++;
			elem.style.height = initalPositon + 'px';
			elem.style.width = initalPositon +'px';
			elem.style.opacity = '0.5';
		}
	}
}