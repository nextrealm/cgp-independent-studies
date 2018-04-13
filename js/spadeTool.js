spade = {
	onUse: function(tile) {
		if(tile.texture.key == 'grass'){
			tile.setTexture('dirt');
		}
	}
}