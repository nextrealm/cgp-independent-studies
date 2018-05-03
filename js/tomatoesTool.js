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
				};
				tile.ready = false;
				addUpdateable(tile);
			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'tomatoes_0'){
			sprite.setTexture('tomatoes_1');
			sprite.tile.timeInMiliseconds = 1000;
		}else if(sprite.texture.key == 'tomatoes_1'){
			sprite.setTexture('tomatoes_2');
			sprite.tile.ready = true;
		}
	}
}