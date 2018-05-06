strawberries = {
	onUse: function(tile) {
		if(game.global.strawberrySeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.strawberrySeeds--;
				updateStrawberrySeedsText();
				var sprite = strawberries.scene.add.sprite(tile.x, tile.y, 'strawberries_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.timeInMiliseconds = 1000;
				tile.grow = function(){strawberries.grow(sprite);};
				tile.till = function(){
					game.global.strawberryCount++;
					updateStrawberriesText();
					tile.setTexture('dirt');
					ga('send', 'event', "Action", "Harvest", "Strawberries");
				};
				tile.ready = false;
				addUpdateable(tile);
				ga('send', 'event', "Action", "Plant", "Strawberries");
			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'strawberries_0'){
			sprite.setTexture('strawberries_1');
			sprite.tile.timeInMiliseconds = 1000;
		}else if(sprite.texture.key == 'strawberries_1'){
			sprite.setTexture('strawberries_2');
			sprite.tile.ready = true;
		}
	}
}