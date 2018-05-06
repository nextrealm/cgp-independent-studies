beans = {
	onUse: function(tile) {
		if(game.global.beanSeeds > 0){
			if(tile.texture.key == 'tilled-wet' && typeof(tile.plant) == "undefined"){
				game.global.beanSeeds--;
				updateBeanSeedsText();
				var sprite = beans.scene.add.sprite(tile.x, tile.y, 'beans_0');
				tile.plant = sprite;
				sprite.tile = tile;
				tile.timeInMiliseconds = 3000;
				tile.grow = function(){beans.grow(sprite);};
				tile.till = function(){
					game.global.beanCount++;
					updateBeansText();
					tile.setTexture('dirt');
					ga('send', 'event', "Action", "Harvest", "Beans");
				};
				tile.ready = false;
				addUpdateable(tile);
				ga('send', 'event', "Action", "Plant", "Beans");
			}
		}
	},
	grow: function(sprite) {
		if(sprite.texture.key == 'beans_0'){
			sprite.setTexture('beans_1');
			sprite.tile.timeInMiliseconds = 3000;
		}else if(sprite.texture.key == 'beans_1'){
			sprite.setTexture('beans_2');
			sprite.tile.timeInMiliseconds = 3000;
		}else if(sprite.texture.key == 'beans_2'){
			sprite.setTexture('beans_3');
			sprite.tile.ready = true;
		}
	}
}