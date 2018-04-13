sickle = {
	onUse: function(tile) {
		if(typeof(tile.plant) != 'undefined'){
			if(tile.plant.texture.key == 'tomatoes_2'){
				tile.plant.destroy();
				tile.plant = undefined;
				game.global.tomatoeCount++;
				updateTomatoesText();
			}
		}
	}
}