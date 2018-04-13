tomatoes = {
	onUse: function(tile) {
		if(game.global.tomatoeSeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.tomatoeSeeds--;
				updateTomatoeSeedsText();
				var sprite = tomatoes.scene.add.sprite(tile.x, tile.y, 'tomatoes_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.interval = setInterval(function(){tomatoes.onGrow(sprite);}, 1000);
			}
		}
	},
	onGrow: function(sprite) {
		console.log(sprite.texture.key);
		if(sprite.texture.key == 'tomatoes_0'){
			sprite.setTexture('tomatoes_1');
		}else if(sprite.texture.key == 'tomatoes_1'){
			sprite.setTexture('tomatoes_2');
			clearTimeout(sprite.tile.interval);
		}
	}
}