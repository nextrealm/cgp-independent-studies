apples = {
	onUse: function(tile) {
		if(game.global.appleSeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.appleSeeds--;
				updateAppleSeedsText();
				var sprite = apples.scene.add.sprite(tile.x, tile.y, 'apples_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.timeInMiliseconds = 1000;
				tile.grow = function(){apples.grow(sprite);};
				tile.pick = function(){
					game.global.appleCount++;
					updateApplesText();
					sprite.setTexture('apples_4');
					sprite.tile.ready = false;
					addUpdateable(tile);
					sprite.tile.timeInMiliseconds = 5000;
					ga('send', 'event', "Action", "Harvest", "Apple");
				};
				tile.ready = false;
				addUpdateable(tile);
				ga('send', 'event', "Action", "Plant", "Apple");

			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'apples_0'){
			sprite.setTexture('apples_1');
			sprite.tile.timeInMiliseconds = 2000;
		}else if(sprite.texture.key == 'apples_1'){
			sprite.setTexture('apples_2');
			sprite.tile.timeInMiliseconds = 3000;
		}else if(sprite.texture.key == 'apples_2'){
			sprite.setTexture('apples_3');
			sprite.tile.timeInMiliseconds = 4000;
		}else if(sprite.texture.key == 'apples_3'){
			sprite.setTexture('apples_4');
			sprite.tile.timeInMiliseconds = 5000;
		}else if(sprite.texture.key == 'apples_4'){
			sprite.setTexture('apples_5');
			sprite.tile.ready = true;
		}
	}
}