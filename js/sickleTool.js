sickle = {
	onUse: function(tile) {
		if(typeof(tile.plant) != 'undefined'){
			if(tile.ready && typeof(tile.till) == "function"){
				tile.plant.destroy();
				tile.plant = undefined;
				tile.till();
			}
		}
	}
}