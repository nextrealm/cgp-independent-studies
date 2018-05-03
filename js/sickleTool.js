sickle = {
	onUse: function(tile) {
		if(typeof(tile.plant) != 'undefined'){
			if(tile.ready){
				tile.plant.destroy();
				tile.plant = undefined;
				tile.till();
			}
		}
	}
}