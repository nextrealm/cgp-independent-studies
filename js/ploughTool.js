plough = {
	onUse: function(tile) {
		if(tile.texture.key == 'dirt'){
			tile.setTexture('tilled');
		}else if(tile.texture.key == 'dirt-wet'){
			tile.setTexture('tilled-wet');
		}
	}
}