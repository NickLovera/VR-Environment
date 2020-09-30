document.querySelector('#radio').addEventListener('mouseenter', function () {
	radio.setAttribute('scale', '5.4 5.4 5.4');	
});


document.querySelector('#chair').addEventListener('mouseenter', function () {
	chair.setAttribute('scale', '5.4 5.4 5.4');	
});

//turn on off music of radio
document.querySelector('#radio').addEventListener('click', function () {
	var entity = document.querySelector('[sound]');
	
	if(entity.components.sound.isPlaying == true) {
		entity.components.sound.pauseSound();
	} else {
		entity.components.sound.playSound();
	}
});
