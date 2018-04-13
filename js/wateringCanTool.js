wateringCan = {
	onUse: function(tile) {
		if(tile.texture.key == 'water') {
			game.global.water++;
			updateWaterText();
		} else if(game.global.water > 0) {
			if(tile.texture.key == 'dirt'){
				game.global.water--;
				updateWaterText();
				tile.setTexture('dirt-wet');
			}else if(tile.texture.key == 'tilled'){
				game.global.water--;
				updateWaterText();
				tile.setTexture('tilled-wet');
			}
		}
	}
}