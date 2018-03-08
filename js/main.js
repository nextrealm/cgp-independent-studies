var game = new Phaser.Game(750, 1334, Phaser.AUTO, 'game', { init: init, preload: preload, create: create, update: update });

game.global = {
    clicked: false
}

game.user = {
	serialize: function() {
		var saveObject = game.global;
		return JSON.stringify(saveObject);
	},
	unserialize: function(json) {
		var saveObject = JSON.parse(json);
		game.global = saveObject;
	},
	save: function(key) {
		if (key === undefined) key = 'default';
		localStorage.setItem('save-'+key, this.serialize());
	},
	load: function(key) {
		if (key === undefined) key = 'default';
		var state = localStorage.getItem('save-'+key);
		if (state) {
			this.unserialize(state);
		}
	}
}

function init() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh();
    game.stage.backgroundColor = 'rgb(37,77,109)';
    game.user.load();
}

function preload() {
    game.load.image('grass', 'assets/sprites/grass.png');
    game.load.image('dirt', 'assets/sprites/dirt.png');
    game.load.script('ColorMatrixFilter', 'https://rawgit.com/photonstorm/phaser/v2.6.2/filters/pixi/ColorMatrixFilter.js');
}

function create() {
    game.state.start("Select");
}

function update() {
    
}

game.state.add("Select", select);
game.state.add("Game", farmFactsGame);