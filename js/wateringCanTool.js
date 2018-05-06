wateringCan = {
	onUse: function(tile) {
		if(tile.texture.key == 'water') {
			game.global.water++;
			updateWaterText();
			ga('send', 'event', "Action", "Tool", "Collect Water");
		} else if(game.global.water > 0) {
			if(tile.texture.key == 'dirt'){
				game.global.water--;
				updateWaterText();
				tile.setTexture('dirt-wet');
				ga('send', 'event', "Action", "Tool", "Water Dirt");
			}else if(tile.texture.key == 'tilled'){
				game.global.water--;
				updateWaterText();
				tile.setTexture('tilled-wet');
				ga('send', 'event', "Action", "Tool", "Water Tilled");
			}
		}
	}
}