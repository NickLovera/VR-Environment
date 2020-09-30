
//turn on off music of radio
document.querySelector('#radio').addEventListener('click', function () {
	var entity = document.querySelector('[sound]');
	
	if(entity.components.sound.isPlaying == true) {
		entity.components.sound.pauseSound();
	} else {
		entity.components.sound.playSound();
	}
});
