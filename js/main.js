class Main extends Phaser.Scene {
    constructor() {
        super({key: 'Main'/*, files: [{
            key: 'aqua_ball',
            type: 'image',
            url: 'assets/sprites/aqua_ball.png'
        }]*/});
    }

    preload() {
        //this.load.image('level', 'assets/sprites/level.png');
    }

    create() {
        console.info('Main scene started.');

        /*var that = this;

        window.onresize = function ()
	    {
	    	that.cameras.main.setBounds(0, 0, 1334, 750);
	    	var zoom = 750 / window.innerHeight;
	    	console.log(zoom);
	    	that.cameras.main.setZoom(zoom);
	    	that.cameras.main.scrollX = 0;
	        game.renderer.resize(window.innerWidth, window.innerHeight, 1.0);
	    }*/

        /*game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    game.scale.pageAlignHorizontally = true;
	    game.scale.pageAlignVertically = true;
	    game.scale.refresh();
	    game.stage.backgroundColor = 'rgb(37,77,109)';*/
	    game.user.load();

        //this.scene.launch('Select');
        game.user.reset();
        this.scene.launch('FarmFactsGame');
    }
}

//var game = new Phaser.Game(750, 1334, Phaser.CANVAS, 'game', { init: init, preload: preload, create: create, update: update });
const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    scene: [Main, Select, FarmFactsGame, Results]
});

game.global = {
    user_id: -1,
    water: 0,
    tomatoeSeeds: 0,
    tomatoeCount: 0,
    beanSeeds: 0,
    beanCount: 0,
    score: 10,
    scores: []
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
    },
    reset: function() {
        game.global.score = 10;
        game.global.water = 0;
        game.global.tomatoeSeeds = 0;
        game.global.tomatoeCount = 0;
        game.global.beanSeeds = 0;
        game.global.beanCount = 0;
    }
}

function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

setTimeout(function() {
	resize();
}, 1);

window.addEventListener("resize", resize, false);