oranges = {
	onUse: function(tile) {
		if(game.global.orangeSeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.orangeSeeds--;
				updateOrangeSeedsText();
				var sprite = oranges.scene.add.sprite(tile.x, tile.y, 'oranges_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.timeInMiliseconds = 1500;
				tile.grow = function(){oranges.grow(sprite);};
				tile.pick = function(){
					game.global.orangeCount++;
					updateOrangesText();
					sprite.setTexture('oranges_4');
					sprite.tile.ready = false;
					addUpdateable(tile);
					sprite.tile.timeInMiliseconds = 7500;
					ga('send', 'event', "Action", "Harvest", "Orange");
				};
				tile.ready = false;
				addUpdateable(tile);
				ga('send', 'event', "Action", "Plant", "Orange");

			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'oranges_0'){
			sprite.setTexture('oranges_1');
			sprite.tile.timeInMiliseconds = 3000;
		}else if(sprite.texture.key == 'oranges_1'){
			sprite.setTexture('oranges_2');
			sprite.tile.timeInMiliseconds = 4500;
		}else if(sprite.texture.key == 'oranges_2'){
			sprite.setTexture('oranges_3');
			sprite.tile.timeInMiliseconds = 6000;
		}else if(sprite.texture.key == 'oranges_3'){
			sprite.setTexture('oranges_4');
			sprite.tile.timeInMiliseconds = 7500;
		}else if(sprite.texture.key == 'oranges_4'){
			sprite.setTexture('oranges_5');
			sprite.tile.ready = true;
		}
	}
}