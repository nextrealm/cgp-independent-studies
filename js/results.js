var sprite;
var title;

class Results extends Phaser.Scene {
    constructor() {
        super({key: 'Results'/*, files: [{
            key: 'aqua_ball',
            type: 'image',
            url: 'assets/sprites/aqua_ball.png'
        }]*/});
    }

    preload() {
        this.load.image('button-login', 'assets/sprites/button-login.png');
        this.load.image('button-logout', 'assets/sprites/button-logout.png');
    }

    create() {
        console.info('Results scene started.');

        /*sprite = this.add.sprite(160, 120, 'level');
        //sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'level');
        /*sprite.scale.set(1);
        sprite.anchor.set(0.5);
        sprite.smoothed = false;*/
        /*sprite.setOrigin(0.5, 0.5);
        sprite.setScale(1);*/

        this.titleText = this.add.text(game.config.width * 0.5, 100, "Results", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});

        this.loginButton = this.add.sprite(game.config.width * 0.5, 256, 'button-login').setInteractive();
        this.loginButton.x -= this.loginButton.width;
        this.loginButton.on('pointerup', function (pointer) {
            showLogin();
        });

        this.loginText = this.add.text(this.loginButton.x, this.loginButton.y, "Login", {fontFamily: 'Arial', fontSize: 16, color: '#000'});
    }
}