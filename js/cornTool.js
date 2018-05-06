corn = {
	onUse: function(tile) {
		if(game.global.cornSeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.cornSeeds--;
				updateCornSeedsText();
				var sprite = corn.scene.add.sprite(tile.x, tile.y, 'corn_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.timeInMiliseconds = 1000;
				tile.grow = function(){corn.grow(sprite);};
				tile.till = function(){
					game.global.cornCount++;
					updateCornText();
					tile.setTexture('dirt');
					ga('send', 'event', "Action", "Harvest", "Corn");
				};
				tile.ready = false;
				addUpdateable(tile);
				ga('send', 'event', "Action", "Plant", "Corn");
			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'corn_0'){
			sprite.setTexture('corn_1');
			sprite.tile.timeInMiliseconds = 2000;
		}else if(sprite.texture.key == 'corn_1'){
			sprite.setTexture('corn_2');
			sprite.tile.timeInMiliseconds = 3000;
		}else if(sprite.texture.key == 'corn_2'){
			sprite.setTexture('corn_3');
			sprite.tile.ready = true;
		}
	}
}