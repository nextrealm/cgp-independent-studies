pick = {
	onUse: function(tile) {
		if(typeof(tile.plant) != 'undefined'){
			if(tile.ready && typeof(tile.pick) == "function"){
				tile.pick();
				ga('send', 'event', "Action", "Tool", "Pick");
			}
		}
	}
}