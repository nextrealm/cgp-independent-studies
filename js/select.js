var sprite;
var title;

class Select extends Phaser.Scene {
    constructor() {
        super({key: 'Select'/*, files: [{
            key: 'aqua_ball',
            type: 'image',
            url: 'assets/sprites/aqua_ball.png'
        }]*/});
    }

    preload() {
        this.load.image('level', 'assets/sprites/level.png');
    }

    create() {
        console.info('Select scene started.');

        sprite = this.add.sprite(160, 120, 'level');
        //sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'level');
        /*sprite.scale.set(1);
        sprite.anchor.set(0.5);
        sprite.smoothed = false;*/
        sprite.setOrigin(0.5, 0.5);
        sprite.setScale(1);

        var style = {
            font: 'bold 20pt Arial',
            fill: 'rgb(85,85,85)'
        };
        title = this.add.text(148, 258, "Testing...", style);
        //title.anchor.set(0);
        title.setOrigin(0);
    }

    onButtonClick(button, pointer, isOver) {
        if(isOver) {
            this.scene.launch('FarmFactsGame');
        }
    }
}