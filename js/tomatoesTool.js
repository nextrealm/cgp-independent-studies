tomatoes = {
	onUse: function(tile) {
		if(game.global.tomatoeSeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.tomatoeSeeds--;
				updateTomatoeSeedsText();
				var sprite = tomatoes.scene.add.sprite(tile.x, tile.y, 'tomatoes_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.timeInMiliseconds = 1000;
				tile.grow = function(){tomatoes.grow(sprite);};
				tile.till = function(){
					game.global.tomatoeCount++;
					updateTomatoesText();
					tile.setTexture('dirt');
					ga('send', 'event', "Action", "Harvest", "Tomatoes");
				};
				tile.ready = false;
				addUpdateable(tile);
				ga('send', 'event', "Action", "Plant", "Tomatoes");
			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'tomatoes_0'){
			sprite.setTexture('tomatoes_1');
			sprite.tile.timeInMiliseconds = 2000;
		}else if(sprite.texture.key == 'tomatoes_1'){
			sprite.setTexture('tomatoes_2');
			sprite.tile.ready = true;
		}
	}
}