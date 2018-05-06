cauliflower = {
	onUse: function(tile) {
		if(game.global.cauliflowerSeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.cauliflowerSeeds--;
				updateCauliflowerSeedsText();
				var sprite = cauliflower.scene.add.sprite(tile.x, tile.y, 'cauliflower_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.timeInMiliseconds = 1000;
				tile.grow = function(){cauliflower.grow(sprite);};
				tile.till = function(){
					game.global.cauliflowerCount++;
					updateCauliflowerText();
					tile.setTexture('dirt');
					ga('send', 'event', "Action", "Harvest", "Cauliflower");
				};
				tile.ready = false;
				addUpdateable(tile);
				ga('send', 'event', "Action", "Plant", "Cauliflower");
			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'cauliflower_0'){
			sprite.setTexture('cauliflower_1');
			sprite.tile.timeInMiliseconds = 1000;
		}else if(sprite.texture.key == 'cauliflower_1'){
			sprite.setTexture('cauliflower_2');
			sprite.tile.ready = true;
		}
	}
}