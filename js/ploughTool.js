plough = {
	onUse: function(tile) {
		if(tile.texture.key == 'dirt'){
			tile.setTexture('tilled');
			ga('send', 'event', "Action", "Tool", "Plough Dry");
		}else if(tile.texture.key == 'dirt-wet'){
			tile.setTexture('tilled-wet');
			ga('send', 'event', "Action", "Tool", "Plough Wet");
		}
	}
}