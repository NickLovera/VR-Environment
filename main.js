document.querySelector('#radio').addEventListener('mouseenter', function () {
	radio.setAttribute('scale', '1.5 1.5 1.5');	
});

//scaledown when mouse is out off radio
document.querySelector('#radio').addEventListener('mouseleave', function () {
	radio.setAttribute('scale', '1 1 1');	
});

//Scale up button
document.querySelector('#button').addEventListener('mouseenter', function () {
	button.setAttribute('scale', '1.5 1.5 1.5');	
});

//scaledown button
document.querySelector('#button').addEventListener('mouseleave', function () {
	button.setAttribute('scale', '1 1 1');	
});

//Turn Covid on/off
var pressed = false;
document.querySelector('#button').addEventListener('click', function () {
	if(pressed == false){
		button.setAttribute('color', 'red');
		pressed = true;
	}
	else{
		button.setAttribute('color', 'blue');
		pressed = false;
	}

});


//turn music on/off
document.querySelector('#radio').addEventListener('click', function () {
	var entity = document.querySelector('[sound]');
	
	if(entity.components.sound.isPlaying == true) {
		entity.components.sound.pauseSound();
	} else {
		entity.components.sound.playSound();
	}
});
