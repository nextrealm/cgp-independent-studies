var waters = [];
var tiles = [];
var title;
var updatables = [];

var tomatoesCost = 5;
var tomatoesValue = 15;
var beansCost = 10;
var beansValue = 60;
var strawberriesCost = 5;
var strawberriesValue = 15;
var cauliflowerCost = 5;
var cauliflowerValue = 15;
var cornCost = 10;
var cornValue = 60;
var applesCost = 50;
var applesValue = 250;
var orangesCost = 75;
var orangesValue = 375;

class FarmFactsGame extends Phaser.Scene {
    constructor() {
        super({key: 'FarmFactsGame'/*, files: [{
            key: 'aqua_ball',
            type: 'image',
            url: 'assets/sprites/aqua_ball.png'
        }]*/});
    }

    preload() {
        this.load.image('water', 'assets/sprites/water.png');
        this.load.image('grass', 'assets/sprites/grass.png');
        this.load.image('dirt', 'assets/sprites/dirt.png');
        this.load.image('dirt-wet', 'assets/sprites/dirt-wet.png');
        this.load.image('tilled', 'assets/sprites/tilled.png');
        this.load.image('tilled-wet', 'assets/sprites/tilled-wet.png');
        this.load.image('tomatoes_0', 'assets/sprites/tomatoes_0.png');
        this.load.image('tomatoes_1', 'assets/sprites/tomatoes_1.png');
        this.load.image('tomatoes_2', 'assets/sprites/tomatoes_2.png');
        this.load.image('beans_0', 'assets/sprites/beans_0.png');
        this.load.image('beans_1', 'assets/sprites/beans_1.png');
        this.load.image('beans_2', 'assets/sprites/beans_2.png');
        this.load.image('beans_3', 'assets/sprites/beans_3.png');
        this.load.image('strawberries_0', 'assets/sprites/strawberries_0.png');
        this.load.image('strawberries_1', 'assets/sprites/strawberries_1.png');
        this.load.image('strawberries_2', 'assets/sprites/strawberries_2.png');
        this.load.image('cauliflower_0', 'assets/sprites/cauliflower_0.png');
        this.load.image('cauliflower_1', 'assets/sprites/cauliflower_1.png');
        this.load.image('cauliflower_2', 'assets/sprites/cauliflower_2.png');
        this.load.image('corn_0', 'assets/sprites/corn_0.png');
        this.load.image('corn_1', 'assets/sprites/corn_1.png');
        this.load.image('corn_2', 'assets/sprites/corn_2.png');
        this.load.image('corn_3', 'assets/sprites/corn_3.png');
        this.load.image('apples_0', 'assets/sprites/apples_0.png');
        this.load.image('apples_1', 'assets/sprites/apples_1.png');
        this.load.image('apples_2', 'assets/sprites/apples_2.png');
        this.load.image('apples_3', 'assets/sprites/apples_3.png');
        this.load.image('apples_4', 'assets/sprites/apples_4.png');
        this.load.image('apples_5', 'assets/sprites/apples_5.png');
        this.load.image('oranges_0', 'assets/sprites/oranges_0.png');
        this.load.image('oranges_1', 'assets/sprites/oranges_1.png');
        this.load.image('oranges_2', 'assets/sprites/oranges_2.png');
        this.load.image('oranges_3', 'assets/sprites/oranges_3.png');
        this.load.image('oranges_4', 'assets/sprites/oranges_4.png');
        this.load.image('oranges_5', 'assets/sprites/oranges_5.png');

        this.load.image('button-hilight', 'assets/sprites/button-hilight.png');
        this.load.image('button-shovel', 'assets/sprites/button-shovel.png');
        this.load.image('button-spade', 'assets/sprites/button-spade.png');
        this.load.image('button-wateringCan', 'assets/sprites/button-wateringCan.png');
        this.load.image('button-plough', 'assets/sprites/button-plough.png');
        this.load.image('button-shop', 'assets/sprites/button-shop.png');
        this.load.image('button-tomatoes', 'assets/sprites/button-tomatoes.png');
        this.load.image('button-beans', 'assets/sprites/button-beans.png');
        this.load.image('button-strawberries', 'assets/sprites/button-strawberries.png');
        this.load.image('button-cauliflower', 'assets/sprites/button-cauliflower.png');
        this.load.image('button-corn', 'assets/sprites/button-corn.png');
        this.load.image('button-apple', 'assets/sprites/button-apple.png');
        this.load.image('button-orange', 'assets/sprites/button-orange.png');
        this.load.image('button-sickle', 'assets/sprites/button-sickle.png');
        this.load.image('button-pick', 'assets/sprites/button-pick.png');

        this.load.image('shop-bg', 'assets/sprites/shop-bg.png');
        this.load.image('shop-panel-bg', 'assets/sprites/shop-panel-bg.png');
        this.load.image('shop-buy', 'assets/sprites/shop-buy.png');
        this.load.image('shop-sell', 'assets/sprites/shop-sell.png');
        this.load.image('shop-close', 'assets/sprites/shop-close.png');

        this.load.image('icon-tomatoes-large', 'assets/sprites/icon-tomatoes-large.png');
        this.load.image('icon-beans-large', 'assets/sprites/icon-beans-large.png');
        this.load.image('icon-strawberries-large', 'assets/sprites/icon-strawberries-large.png');
        this.load.image('icon-cauliflower-large', 'assets/sprites/icon-cauliflower-large.png');
        this.load.image('icon-corn-large', 'assets/sprites/icon-corn-large.png');
        this.load.image('icon-apple-large', 'assets/sprites/icon-apple-large.png');
        this.load.image('icon-orange-large', 'assets/sprites/icon-orange-large.png');
        this.load.image('icon-tomatoes', 'assets/sprites/icon-tomatoes.png');
        this.load.image('icon-beans', 'assets/sprites/icon-beans.png');
        this.load.image('icon-strawberries', 'assets/sprites/icon-strawberries.png');
        this.load.image('icon-cauliflower', 'assets/sprites/icon-cauliflower.png');
        this.load.image('icon-corn', 'assets/sprites/icon-corn.png');
        this.load.image('icon-apple', 'assets/sprites/icon-apple.png');
        this.load.image('icon-orange', 'assets/sprites/icon-orange.png');
        this.load.image('icon-coin', 'assets/sprites/icon-coin.png');

        this.load.image('seasons', 'assets/sprites/seasons.png');
        this.load.image('arrow', 'assets/sprites/arrow.png');

        this.load.image('up', 'assets/sprites/up.png');
        this.load.image('down', 'assets/sprites/down.png');
        this.load.image('spring', 'assets/sprites/spring.png');
        this.load.image('summer', 'assets/sprites/summer.png');
        this.load.image('autumn', 'assets/sprites/autumn.png');
        this.load.image('winter', 'assets/sprites/winter.png');
    }

    create() {
        //console.info('FarmFactsGame scene started.');

        this.currentTool = emptyHand;

        var that = this;

        window.setCameraOffset = function(x, y) {
            that.cameras.main.scrollX = x;
            that.cameras.main.scrollY = y;
        }

        window.updateCameraZoom = function() {
            var zoom = window.innerHeight / 750;
            console.log(zoom);
            that.cameras.main.setZoom(zoom);
            //that.cameras.main.scrollX = 500;
            that.cameras.main.scrollY = 750 - (750 * zoom);
            game.renderer.resize(window.innerWidth, window.innerHeight, 1.0);
        }

        //sprite = this.add.sprite(game.config.width * 0.5, game.config.height * 0.5, 'grass');
        /*sprite.scale.set(1);
        sprite.anchor.set(0.5);
        sprite.smoothed = false;*/

        for (var i = 0;i < 8;i++){
            var pos = cartesianToIsometric(i, -1);
            var tile = this.add.sprite(pos.x * 42, pos.y * 49, 'water');
            tile.x += game.config.width * 0.5;
            tile.y += (game.config.height * 0.5) - (49 * 4);
            tile.isoX = i;
            tile.isoY = j;
            var shape = new Phaser.Geom.Polygon([
                42.5, 0,
                89, 24.5,
                42.5, 49,
                0, 24.5
            ]);
            tile.setInteractive(shape, Phaser.Geom.Polygon.Contains);
            tile.on('pointerdown', function (pointer) {
                //this.setTint(0xff0000);
                that.currentTool.onUse(this);
            });
            tile.on('pointerout', function (pointer) {
                //this.clearTint();
            });
            tile.on('pointerup', function (pointer) {
                //this.clearTint();
            });
            //tile.setOrigin(0, 0);
            waters.push(tile);

            if(false){
                var graphics = this.add.graphics({ x: tile.x - tile.displayOriginX, y: tile.y - tile.displayOriginY });
                //graphics.lineStyle(2, 0x00aa00);
                graphics.beginPath();
                graphics.moveTo(shape.points[0].x, shape.points[0].y);
                for (var i = 1; i < shape.points.length; i++)
                {
                    graphics.lineTo(shape.points[i].x, shape.points[i].y);
                }
                graphics.closePath();
                graphics.strokePath();
            }
        }

        for (var i = 0;i < 8;i++){
            for (var j = 0;j < 8;j++){
                var pos = cartesianToIsometric(i, j);
                var tile = this.add.sprite(pos.x * 42, pos.y * 49, 'grass');
                tile.x += game.config.width * 0.5;
                tile.y += (game.config.height * 0.5) - (49 * 4);
                tile.isoX = i;
                tile.isoY = j;
                var shape = new Phaser.Geom.Polygon([
                    42.5, 0,
                    89, 24.5,
                    42.5, 49,
                    0, 24.5
                ]);
                tile.setInteractive(shape, Phaser.Geom.Polygon.Contains);
                tile.on('pointerdown', function (pointer) {
                    //this.setTint(0xff0000);
                    that.currentTool.onUse(this);
                });
                tile.on('pointerout', function (pointer) {
                    //this.clearTint();
                });
                tile.on('pointerup', function (pointer) {
                    //this.clearTint();
                });
                //tile.setOrigin(0, 0);
                tiles.push(tile);

                if(false){
                    var graphics = this.add.graphics({ x: tile.x - tile.displayOriginX, y: tile.y - tile.displayOriginY });
                    //graphics.lineStyle(2, 0x00aa00);
                    graphics.beginPath();
                    graphics.moveTo(shape.points[0].x, shape.points[0].y);
                    for (var i = 1; i < shape.points.length; i++)
                    {
                        graphics.lineTo(shape.points[i].x, shape.points[i].y);
                    }
                    graphics.closePath();
                    graphics.strokePath();
                }
            }
        }

        /*var style = {
            font: 'bold 20pt Arial',
            fill: 'rgb(85,85,85)'
        };
        title = this.add.text(148, 258, "Testing...", style);
        //title.anchor.set(0);*/

        this.input.on('pointerup', function (event) {
            /*var pos = {'x':event.x, 'y':event.y};
            pos.x /= 42;
            pos.y /= 49;
            var iso = isometricToCartesian(pos.x, pos.y);
            iso.x = Math.floor(iso.x);
            iso.y = Math.floor(iso.y);
            console.log(iso);*/
        });

        /*this.music = this.sound.add('music');
        this.music.play({ loop: true });*/

        this.seasons = this.add.sprite(game.config.width - 90, 72, 'seasons');
        this.seasons.x -= this.seasons.width;
        this.arrow = this.add.sprite(this.seasons.x, this.seasons.y, 'arrow').setOrigin(0.5, 0.85);

        this.buttonHilight = this.add.sprite(-100, -100, 'button-hilight');

        this.scoreText = this.add.text(game.config.width - 20, 8, game.global.score, {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 0);

        window.updateScoreText = function() {
            that.scoreText.setText(game.global.score);
        }

        this.spadeButton = this.add.sprite(game.config.width, 72, 'button-spade').setInteractive();
        this.spadeButton.x -= this.spadeButton.width;
        //this.spadeButton.input.useHandCursor = true;
        this.spadeButton.on('pointerup', function (pointer) {
            that.changeTool(spade);
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Spade");
        });

        this.scoreText.x = this.spadeButton.x;
        this.scoreText.x += this.spadeButton.width * 0.5;

        this.scoreIcon = this.add.sprite(this.scoreText.x, this.scoreText.y, 'icon-coin');
        this.scoreText.x -= this.scoreIcon.width;
        this.scoreIcon.x = this.scoreText.x;
        this.scoreIcon.x += this.scoreIcon.width * 0.5;
        this.scoreIcon.y += this.scoreIcon.height * 0.5;

        this.wateringCanButton = this.add.sprite(game.config.width, this.spadeButton.y + (this.spadeButton.height * 0.5), 'button-wateringCan').setInteractive();
        this.wateringCanButton.x -= this.wateringCanButton.width;
        this.wateringCanButton.y += (this.wateringCanButton.height * 0.5) + 10;
        //this.wateringCanButton.input.useHandCursor = true;
        this.wateringCanButton.on('pointerup', function (pointer) {
            that.changeTool(wateringCan);
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Watering Can");
        });

        this.waterText = this.add.text(this.wateringCanButton.x + (this.wateringCanButton.width * 0.5) - 10, this.wateringCanButton.y + (this.wateringCanButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);

        window.updateWaterText = function() {
            that.waterText.setText("x" + game.global.water);
        }

        this.ploughButton = this.add.sprite(game.config.width, this.wateringCanButton.y + (this.wateringCanButton.height * 0.5), 'button-plough').setInteractive();
        this.ploughButton.x -= this.ploughButton.width;
        this.ploughButton.y += (this.ploughButton.height * 0.5) + 10;
        //this.ploughButton.input.useHandCursor = true;
        this.ploughButton.on('pointerup', function (pointer) {
            that.changeTool(plough);
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Plough");
        });

        this.shopButton = this.add.sprite(game.config.width, this.ploughButton.y + (this.ploughButton.height * 0.5), 'button-shop').setInteractive();
        this.shopButton.x -= this.shopButton.width;
        this.shopButton.y += (this.shopButton.height * 0.5) + 10;
        //this.shopButton.input.useHandCursor = true;
        this.shopButton.on('pointerup', function (pointer) {
            that.openShop();
            ga('send', 'event', "Button", "Shop", "Open");
        });

        this.tomatoesButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-tomatoes').setInteractive();
        this.tomatoesButton.x -= this.tomatoesButton.width;
        this.tomatoesButton.start_x = this.tomatoesButton.x;
        this.tomatoesButton.y += (this.tomatoesButton.height * 0.5) + 10;
        //this.tomatoesButton.input.useHandCursor = true;
        this.tomatoesButton.on('pointerdown', function (pointer) {
            that.showSeedsButtons();
        });
        this.tomatoesButton.on('pointerup', function (pointer) {
            that.hideSeedsButtons();
            that.tomatoesButton.visible = true;
            that.tomatoeSeedsText.visible = true;
            that.changeTool(tomatoes);
            tomatoes.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Tomatoes");
        });

        this.tomatoeSeedsText = this.add.text(this.tomatoesButton.x + (this.tomatoesButton.width * 0.5) - 10, this.tomatoesButton.y + (this.tomatoesButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);
        this.tomatoeSeedsText.start_x = this.tomatoeSeedsText.x;

        window.updateTomatoeSeedsText = function() {
            that.tomatoeSeedsText.setText("x" + game.global.tomatoeSeeds);
        }

        this.beansButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-beans').setInteractive();
        this.beansButton.x -= this.beansButton.width;
        this.beansButton.x -= this.tomatoesButton.width;
        this.beansButton.start_x = this.beansButton.x;
        this.beansButton.y += (this.beansButton.height * 0.5) + 10;
        //this.beansButton.input.useHandCursor = true;
        this.beansButton.on('pointerdown', function (pointer) {
            that.showSeedsButtons();
        });
        this.beansButton.on('pointerup', function (pointer) {
            that.hideSeedsButtons();
            that.beansButton.x = that.tomatoesButton.start_x;
            that.beansButton.visible = true;
            that.beanSeedsText.x = that.tomatoeSeedsText.start_x;
            that.beanSeedsText.visible = true;
            that.changeTool(beans);
            beans.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Beans");
        });

        this.beanSeedsText = this.add.text(this.beansButton.x + (this.beansButton.width * 0.5) - 10, this.beansButton.y + (this.beansButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);
        this.beanSeedsText.start_x = this.beanSeedsText.x;

        window.updateBeanSeedsText = function() {
            that.beanSeedsText.setText("x" + game.global.beanSeeds);
        }

        this.strawberriesButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-strawberries').setInteractive();
        this.strawberriesButton.x -= this.strawberriesButton.width;
        this.strawberriesButton.x -= this.beansButton.width;
        this.strawberriesButton.x -= this.tomatoesButton.width;
        this.strawberriesButton.start_x = this.strawberriesButton.x;
        this.strawberriesButton.y += (this.strawberriesButton.height * 0.5) + 10;
        //this.strawberriesButton.input.useHandCursor = true;
        this.strawberriesButton.on('pointerdown', function (pointer) {
            that.showSeedsButtons();
        });
        this.strawberriesButton.on('pointerup', function (pointer) {
            that.hideSeedsButtons();
            that.strawberriesButton.x = that.tomatoesButton.start_x;
            that.strawberriesButton.visible = true;
            that.strawberrySeedsText.x = that.tomatoeSeedsText.start_x;
            that.strawberrySeedsText.visible = true;
            that.changeTool(strawberries);
            strawberries.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Strawberries");
        });

        this.strawberrySeedsText = this.add.text(this.strawberriesButton.x + (this.strawberriesButton.width * 0.5) - 10, this.strawberriesButton.y + (this.strawberriesButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);
        this.strawberrySeedsText.start_x = this.strawberrySeedsText.x;

        window.updateStrawberrySeedsText = function() {
            that.strawberrySeedsText.setText("x" + game.global.strawberrySeeds);
        }

        this.cauliflowerButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-cauliflower').setInteractive();
        this.cauliflowerButton.x -= this.cauliflowerButton.width;
        this.cauliflowerButton.x -= this.strawberriesButton.width;
        this.cauliflowerButton.x -= this.beansButton.width;
        this.cauliflowerButton.x -= this.tomatoesButton.width;
        this.cauliflowerButton.start_x = this.cauliflowerButton.x;
        this.cauliflowerButton.y += (this.cauliflowerButton.height * 0.5) + 10;
        //this.cauliflowerButton.input.useHandCursor = true;
        this.cauliflowerButton.on('pointerdown', function (pointer) {
            that.showSeedsButtons();
        });
        this.cauliflowerButton.on('pointerup', function (pointer) {
            that.hideSeedsButtons();
            that.cauliflowerButton.x = that.tomatoesButton.start_x;
            that.cauliflowerButton.visible = true;
            that.cauliflowerSeedsText.x = that.tomatoeSeedsText.start_x;
            that.cauliflowerSeedsText.visible = true;
            that.changeTool(cauliflower);
            cauliflower.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Cauliflower");
        });

        this.cauliflowerSeedsText = this.add.text(this.cauliflowerButton.x + (this.cauliflowerButton.width * 0.5) - 10, this.cauliflowerButton.y + (this.cauliflowerButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);
        this.cauliflowerSeedsText.start_x = this.cauliflowerSeedsText.x;

        window.updateCauliflowerSeedsText = function() {
            that.cauliflowerSeedsText.setText("x" + game.global.cauliflowerSeeds);
        }

        this.cornButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-corn').setInteractive();
        this.cornButton.x -= this.cornButton.width;
        this.cornButton.x -= this.cauliflowerButton.width;
        this.cornButton.x -= this.strawberriesButton.width;
        this.cornButton.x -= this.beansButton.width;
        this.cornButton.x -= this.tomatoesButton.width;
        this.cornButton.start_x = this.cornButton.x;
        this.cornButton.y += (this.strawberriesButton.height * 0.5) + 10;
        //this.cornButton.input.useHandCursor = true;
        this.cornButton.on('pointerdown', function (pointer) {
            that.showSeedsButtons();
        });
        this.cornButton.on('pointerup', function (pointer) {
            that.hideSeedsButtons();
            that.cornButton.x = that.tomatoesButton.start_x;
            that.cornButton.visible = true;
            that.cornSeedsText.x = that.tomatoeSeedsText.start_x;
            that.cornSeedsText.visible = true;
            that.changeTool(corn);
            corn.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Corn");
        });

        this.cornSeedsText = this.add.text(this.cornButton.x + (this.cornButton.width * 0.5) - 10, this.cornButton.y + (this.cornButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);
        this.cornSeedsText.start_x = this.cornSeedsText.x;

        window.updateCornSeedsText = function() {
            that.cornSeedsText.setText("x" + game.global.cornSeeds);
        }

        this.appleButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-apple').setInteractive();
        this.appleButton.x -= this.appleButton.width;
        this.appleButton.x -= this.cornButton.width;
        this.appleButton.x -= this.cauliflowerButton.width;
        this.appleButton.x -= this.strawberriesButton.width;
        this.appleButton.x -= this.beansButton.width;
        this.appleButton.x -= this.tomatoesButton.width;
        this.appleButton.start_x = this.appleButton.x;
        this.appleButton.y += (this.strawberriesButton.height * 0.5) + 10;
        //this.appleButton.input.useHandCursor = true;
        this.appleButton.on('pointerdown', function (pointer) {
            that.showSeedsButtons();
        });
        this.appleButton.on('pointerup', function (pointer) {
            that.hideSeedsButtons();
            that.appleButton.x = that.tomatoesButton.start_x;
            that.appleButton.visible = true;
            that.appleSeedsText.x = that.tomatoeSeedsText.start_x;
            that.appleSeedsText.visible = true;
            that.changeTool(apples);
            apples.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Apple");
        });

        this.appleSeedsText = this.add.text(this.appleButton.x + (this.appleButton.width * 0.5) - 10, this.appleButton.y + (this.appleButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);
        this.appleSeedsText.start_x = this.appleSeedsText.x;

        window.updateAppleSeedsText = function() {
            that.appleSeedsText.setText("x" + game.global.appleSeeds);
        }

        this.orangeButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-orange').setInteractive();
        this.orangeButton.x -= this.orangeButton.width;
        this.orangeButton.x -= this.appleButton.width;
        this.orangeButton.x -= this.cornButton.width;
        this.orangeButton.x -= this.cauliflowerButton.width;
        this.orangeButton.x -= this.strawberriesButton.width;
        this.orangeButton.x -= this.beansButton.width;
        this.orangeButton.x -= this.tomatoesButton.width;
        this.orangeButton.start_x = this.orangeButton.x;
        this.orangeButton.y += (this.strawberriesButton.height * 0.5) + 10;
        //this.orangeButton.input.useHandCursor = true;
        this.orangeButton.on('pointerdown', function (pointer) {
            that.showSeedsButtons();
        });
        this.orangeButton.on('pointerup', function (pointer) {
            that.hideSeedsButtons();
            that.orangeButton.x = that.tomatoesButton.start_x;
            that.orangeButton.visible = true;
            that.orangeSeedsText.x = that.tomatoeSeedsText.start_x;
            that.orangeSeedsText.visible = true;
            that.changeTool(oranges);
            oranges.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
            ga('send', 'event', "Tool", "Switch", "Orange");
        });

        this.orangeSeedsText = this.add.text(this.orangeButton.x + (this.orangeButton.width * 0.5) - 10, this.orangeButton.y + (this.orangeButton.height * 0.5) - 10, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'}).setOrigin(1, 1);
        this.orangeSeedsText.start_x = this.orangeSeedsText.x;

        window.updateOrangeSeedsText = function() {
            that.orangeSeedsText.setText("x" + game.global.orangeSeeds);
        }

        this.hideSeedsButtons();
        this.tomatoesButton.visible = true;
        this.tomatoeSeedsText.visible = true;

        this.sickleButton = this.add.sprite(game.config.width, this.tomatoesButton.y + (this.tomatoesButton.height * 0.5), 'button-sickle').setInteractive();
        this.sickleButton.x -= this.sickleButton.width;
        this.sickleButton.y += (this.sickleButton.height * 0.5) + 10;
        //this.sickleButton.input.useHandCursor = true;
        this.sickleButton.on('pointerup', function (pointer) {
            ga('send', 'event', "Tool", "Switch", "Sicle");
            that.changeTool(sickle);
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
        });

        this.tomatoesText = this.add.text(this.sickleButton.x - (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5), "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00', align: 'right'}).setOrigin(1, 0);
        this.tomatoesIcon = this.add.sprite(this.tomatoesText.x - this.tomatoesText.width, this.tomatoesText.y, "icon-tomatoes");
        this.tomatoesIcon.x -= this.tomatoesIcon.width * 0.5;
        this.tomatoesIcon.y += this.tomatoesIcon.height * 0.5;

        window.updateTomatoesText = function() {
            that.tomatoesText.setText("x" + game.global.tomatoeCount);
        }

        this.beansText = this.add.text(this.sickleButton.x - (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5) + 16, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00', align: 'right'}).setOrigin(1, 0);
        this.beansIcon = this.add.sprite(this.beansText.x - this.beansText.width, this.beansText.y, "icon-beans");
        this.beansIcon.x -= this.beansIcon.width * 0.5;
        this.beansIcon.y += this.beansIcon.height * 0.5;

        window.updateBeansText = function() {
            that.beansText.setText("x" + game.global.beanCount);
        }

        this.strawberriesText = this.add.text(this.sickleButton.x - (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5) + 16 + 16, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00', align: 'right'}).setOrigin(1, 0);
        this.strawberriesIcon = this.add.sprite(this.strawberriesText.x - this.strawberriesText.width, this.strawberriesText.y, "icon-strawberries");
        this.strawberriesIcon.x -= this.strawberriesIcon.width * 0.5;
        this.strawberriesIcon.y += this.strawberriesIcon.height * 0.5;

        window.updateStrawberriesText = function() {
            that.strawberriesText.setText("x" + game.global.strawberryCount);
        }

        this.cauliflowerText = this.add.text(this.sickleButton.x - (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5) + 16 + 16 + 16, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00', align: 'right'}).setOrigin(1, 0);
        this.cauliflowerIcon = this.add.sprite(this.cauliflowerText.x - this.cauliflowerText.width, this.cauliflowerText.y, "icon-cauliflower");
        this.cauliflowerIcon.x -= this.cauliflowerIcon.width * 0.5;
        this.cauliflowerIcon.y += this.cauliflowerIcon.height * 0.5;

        window.updateCauliflowerText = function() {
            that.cauliflowerText.setText("x" + game.global.cauliflowerCount);
        }

        this.cornText = this.add.text(this.sickleButton.x - (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5) + 16 + 16 + 16 + 16, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00', align: 'right'}).setOrigin(1, 0);
        this.cornIcon = this.add.sprite(this.cornText.x - this.cornText.width, this.cornText.y, "icon-corn");
        this.cornIcon.x -= this.cornIcon.width * 0.5;
        this.cornIcon.y += this.cornIcon.height * 0.5;

        window.updateCornText = function() {
            that.cornText.setText("x" + game.global.cornCount);
        }

        this.applesText = this.add.text(this.sickleButton.x - (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5) + 16 + 16 + 16 + 16 + 16, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00', align: 'right'}).setOrigin(1, 0);
        this.applesIcon = this.add.sprite(this.applesText.x - this.applesText.width, this.applesText.y, "icon-apple");
        this.applesIcon.x -= this.applesIcon.width * 0.5;
        this.applesIcon.y += this.applesIcon.height * 0.5;

        window.updateApplesText = function() {
            that.applesText.setText("x" + game.global.appleCount);
        }

        this.orangesText = this.add.text(this.sickleButton.x - (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5) + 16 + 16 + 16 + 16 + 16 + 16, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00', align: 'right'}).setOrigin(1, 0);
        this.orangesIcon = this.add.sprite(this.orangesText.x - this.orangesText.width, this.orangesText.y, "icon-orange");
        this.orangesIcon.x -= this.orangesIcon.width * 0.5;
        this.orangesIcon.y += this.orangesIcon.height * 0.5;

        window.updateOrangesText = function() {
            that.orangesText.setText("x" + game.global.orangeCount);
        }

        this.pickButton = this.add.sprite(game.config.width, this.sickleButton.y + (this.sickleButton.height * 0.5), 'button-pick').setInteractive();
        this.pickButton.x -= this.pickButton.width;
        this.pickButton.y += (this.pickButton.height * 0.5) + 10;
        //this.pickButton.input.useHandCursor = true;
        this.pickButton.on('pointerup', function (pointer) {
            ga('send', 'event', "Tool", "Switch", "Pick");
            that.changeTool(pick);
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
        });

        this.shopBg = this.add.sprite(0, game.config.height * 0.5, 'shop-bg');
        this.shopBg.setOrigin(0, 0.5);
        this.shopBg.visible = false;
        //this.shopContainer.add(this.shopBg);

        //this.shopContainer = this.add.group();
        this.shopContainer = this.add.container(0, 0);
        this.shopContainer.visible = false;

        this.shopClose = this.add.sprite(this.shopBg.x + this.shopBg.width, 0, 'shop-close').setInteractive();
        this.shopClose.x -= (this.shopClose.width * 0.5) + 24;
        this.shopClose.y += (this.shopClose.height * 0.5) + 6;
        this.shopClose.visible = false;
        //this.shopContainer.add(this.shopClose);
        this.shopClose.on('pointerup', function (pointer) {
            that.closeShop();
            ga('send', 'event', "Button", "Shop", "Close");
        });

        this.shopTomatoesPanelBg = this.add.sprite(0, 0, 'shop-panel-bg');
        this.shopTomatoesPanelBg.x += (this.shopTomatoesPanelBg.width * 0.5) + 16;
        this.shopTomatoesPanelBg.y += (this.shopTomatoesPanelBg.height * 0.5) + 16;
        //this.shopTomatoesPanelBg.visible = false;
        this.shopContainer.add(this.shopTomatoesPanelBg);

        //this.shopTomatoesNameText = this.add.text(this.shopTomatoesPanelBg.x - (this.shopTomatoesPanelBg.width * 0.5) + 32, this.shopTomatoesPanelBg.y - (this.shopTomatoesPanelBg.height * 0.5) + 32, "Tomatoes", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.shopTomatoesIcon = this.add.sprite(this.shopTomatoesPanelBg.x - (this.shopTomatoesPanelBg.width * 0.5) + 32, this.shopTomatoesPanelBg.y - (this.shopTomatoesPanelBg.height * 0.5) + 16, "icon-tomatoes-large");
        this.shopTomatoesIcon.x += this.shopTomatoesIcon.width * 0.5;
        this.shopTomatoesIcon.y += this.shopTomatoesIcon.height * 0.5;
        //this.shopTomatoesNameText.visible = false;
        this.shopContainer.add(this.shopTomatoesIcon);

        this.shopTomatoesBuy = this.add.sprite(this.shopTomatoesPanelBg.x + (this.shopTomatoesPanelBg.width * 0.5), this.shopTomatoesPanelBg.y + (this.shopTomatoesPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopTomatoesBuy.x -= (this.shopTomatoesBuy.width * 0.5) + 16;
        this.shopTomatoesBuy.y -= (this.shopTomatoesBuy.height * 0.5) + 16;
        //this.shopTomatoesBuy.visible = false;
        this.shopContainer.add(this.shopTomatoesBuy);
        this.shopTomatoesBuy.on('pointerup', function (pointer) {
            if(game.global.score >= tomatoesCost){
                game.global.score -= tomatoesCost;
                updateScoreText();
                game.global.tomatoeSeeds++;
                updateTomatoeSeedsText();
                ga('send', 'event', "Button", "Buy", "Tomatoes");
            }else{
                ga('send', 'event', "Button", "Can't afford", "Tomatoes");
            }
        });

        this.shopTomatoesCostText = this.add.text(this.shopTomatoesBuy.x, this.shopTomatoesBuy.y, "x" + tomatoesCost, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopTomatoesCostText.setOrigin(0.5);
        //this.shopTomatoesCostText.visible = false;
        this.shopContainer.add(this.shopTomatoesCostText);

        this.shopTomatoesSell = this.add.sprite(this.shopTomatoesPanelBg.x + (this.shopTomatoesPanelBg.width * 0.5), this.shopTomatoesPanelBg.y + (this.shopTomatoesPanelBg.height * 0.5), 'shop-sell').setInteractive();
        this.shopTomatoesSell.x -= (this.shopTomatoesSell.width * 0.5) + 16 + this.shopTomatoesBuy.width + 16;
        this.shopTomatoesSell.y -= (this.shopTomatoesSell.height * 0.5) + 16;
        //this.shopTomatoesSell.visible = false;
        this.shopContainer.add(this.shopTomatoesSell);
        this.shopTomatoesSell.on('pointerup', function (pointer) {
            if(game.global.tomatoeCount > 0){
                var multiplier = 1;
                var season = that.getSeason();
                if(season == 3){
                    multiplier = 1.2;
                }
                game.global.score += tomatoesValue * multiplier;
                updateScoreText();
                game.global.tomatoeCount--;
                updateTomatoesText();
                ga('send', 'event', "Button", "Sell", "Tomatoes");
            }
        });

        this.shopTomatoesValueText = this.add.text(this.shopTomatoesSell.x, this.shopTomatoesSell.y, "x" + tomatoesValue, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopTomatoesValueText.setOrigin(0.5);
        //this.shopTomatoesValueText.visible = false;
        this.shopContainer.add(this.shopTomatoesValueText);

        this.shopTomatoesUp = this.add.sprite(this.shopTomatoesSell.x, this.shopTomatoesSell.y - this.shopTomatoesSell.height, 'up');
        this.shopContainer.add(this.shopTomatoesUp);

        this.shopTomatoesUpIcon = this.add.sprite(this.shopTomatoesUp.x, this.shopTomatoesUp.y, 'autumn');
        this.shopTomatoesUpIcon.x += this.shopTomatoesUpIcon.width;
        this.shopContainer.add(this.shopTomatoesUpIcon);

        this.shopBeansPanelBg = this.add.sprite(0, this.shopTomatoesPanelBg.height + 16, 'shop-panel-bg');
        this.shopBeansPanelBg.x += (this.shopBeansPanelBg.width * 0.5) + 16;
        this.shopBeansPanelBg.y += (this.shopBeansPanelBg.height * 0.5) + 16;
        //this.shopBeansPanelBg.visible = false;
        this.shopContainer.add(this.shopBeansPanelBg);

        //this.shopBeansNameText = this.add.text(this.shopBeansPanelBg.x - (this.shopBeansPanelBg.width * 0.5) + 32, this.shopBeansPanelBg.y - (this.shopBeansPanelBg.height * 0.5) + 32, "Beans", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.shopBeansIcon = this.add.sprite(this.shopBeansPanelBg.x - (this.shopBeansPanelBg.width * 0.5) + 32, this.shopBeansPanelBg.y - (this.shopBeansPanelBg.height * 0.5) + 16, "icon-beans-large");
        this.shopBeansIcon.x += this.shopBeansIcon.width * 0.5;
        this.shopBeansIcon.y += this.shopBeansIcon.height * 0.5;
        //this.shopBeansNameText.visible = false;
        this.shopContainer.add(this.shopBeansIcon);

        this.shopBeansBuy = this.add.sprite(this.shopBeansPanelBg.x + (this.shopBeansPanelBg.width * 0.5), this.shopBeansPanelBg.y + (this.shopBeansPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopBeansBuy.x -= (this.shopBeansBuy.width * 0.5) + 16;
        this.shopBeansBuy.y -= (this.shopBeansBuy.height * 0.5) + 16;
        //this.shopBeansBuy.visible = false;
        this.shopContainer.add(this.shopBeansBuy);
        this.shopBeansBuy.on('pointerup', function (pointer) {
            if(game.global.score >= beansCost){
                game.global.score -= beansCost;
                updateScoreText();
                game.global.beanSeeds++;
                updateBeanSeedsText();
                ga('send', 'event', "Button", "Buy", "Beans");
            }else{
                ga('send', 'event', "Button", "Can't afford", "Beans");
            }
        });

        this.shopBeansCostText = this.add.text(this.shopBeansBuy.x, this.shopBeansBuy.y, "x" + beansCost, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopBeansCostText.setOrigin(0.5);
        //this.shopBeansCostText.visible = false;
        this.shopContainer.add(this.shopBeansCostText);

        this.shopBeansSell = this.add.sprite(this.shopBeansPanelBg.x + (this.shopBeansPanelBg.width * 0.5), this.shopBeansPanelBg.y + (this.shopBeansPanelBg.height * 0.5), 'shop-sell').setInteractive();
        this.shopBeansSell.x -= (this.shopBeansSell.width * 0.5) + 16 + this.shopBeansBuy.width + 16;
        this.shopBeansSell.y -= (this.shopBeansSell.height * 0.5) + 16;
        //this.shopBeansSell.visible = false;
        this.shopContainer.add(this.shopBeansSell);
        this.shopBeansSell.on('pointerup', function (pointer) {
            if(game.global.beanCount > 0){
                var multiplier = 1;
                var season = that.getSeason();
                if(season == 1){
                    multiplier = 1.2;
                }
                game.global.score += beansValue * multiplier;
                updateScoreText();
                game.global.beanCount--;
                updateBeansText();
                ga('send', 'event', "Button", "Sell", "Beans");
            }
        });

        this.shopBeansValueText = this.add.text(this.shopBeansSell.x, this.shopBeansSell.y, "x" + beansValue, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopBeansValueText.setOrigin(0.5);
        //this.shopBeansValueText.visible = false;
        this.shopContainer.add(this.shopBeansValueText);

        this.shopBeansUp = this.add.sprite(this.shopBeansSell.x, this.shopBeansSell.y - this.shopBeansSell.height, 'up');
        this.shopContainer.add(this.shopBeansUp);

        this.shopBeansUpIcon = this.add.sprite(this.shopBeansUp.x, this.shopBeansUp.y, 'spring');
        this.shopBeansUpIcon.x += this.shopBeansUpIcon.width;
        this.shopContainer.add(this.shopBeansUpIcon);

        this.shopStrawberriesPanelBg = this.add.sprite(0, this.shopBeansPanelBg.y + ((this.shopBeansPanelBg.height + 16) * 0.5), 'shop-panel-bg');
        this.shopStrawberriesPanelBg.x += (this.shopStrawberriesPanelBg.width * 0.5) + 16;
        this.shopStrawberriesPanelBg.y += (this.shopStrawberriesPanelBg.height * 0.5) + 16;
        //this.shopStrawberriesPanelBg.visible = false;
        this.shopContainer.add(this.shopStrawberriesPanelBg);

        //this.shopStrawberriesNameText = this.add.text(this.shopStrawberriesPanelBg.x - (this.shopStrawberriesPanelBg.width * 0.5) + 32, this.shopStrawberriesPanelBg.y - (this.shopStrawberriesPanelBg.height * 0.5) + 32, "Strawberries", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.shopStrawberriesIcon = this.add.sprite(this.shopStrawberriesPanelBg.x - (this.shopStrawberriesPanelBg.width * 0.5) + 32, this.shopStrawberriesPanelBg.y - (this.shopStrawberriesPanelBg.height * 0.5) + 16, "icon-strawberries-large");
        this.shopStrawberriesIcon.x += this.shopStrawberriesIcon.width * 0.5;
        this.shopStrawberriesIcon.y += this.shopStrawberriesIcon.height * 0.5;
        //this.shopStrawberriesNameText.visible = false;
        this.shopContainer.add(this.shopStrawberriesIcon);

        this.shopStrawberriesBuy = this.add.sprite(this.shopStrawberriesPanelBg.x + (this.shopStrawberriesPanelBg.width * 0.5), this.shopStrawberriesPanelBg.y + (this.shopStrawberriesPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopStrawberriesBuy.x -= (this.shopStrawberriesBuy.width * 0.5) + 16;
        this.shopStrawberriesBuy.y -= (this.shopStrawberriesBuy.height * 0.5) + 16;
        //this.shopStrawberriesBuy.visible = false;
        this.shopContainer.add(this.shopStrawberriesBuy);
        this.shopStrawberriesBuy.on('pointerup', function (pointer) {
            if(game.global.score >= strawberriesCost){
                game.global.score -= strawberriesCost;
                updateScoreText();
                game.global.strawberrySeeds++;
                updateStrawberrySeedsText();
                ga('send', 'event', "Button", "Buy", "Strawberries");
            }else{
                ga('send', 'event', "Button", "Can't afford", "Strawberries");
            }
        });

        this.shopStrawberriesCostText = this.add.text(this.shopStrawberriesBuy.x, this.shopStrawberriesBuy.y, "x" + strawberriesCost, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopStrawberriesCostText.setOrigin(0.5);
        //this.shopStrawberriesCostText.visible = false;
        this.shopContainer.add(this.shopStrawberriesCostText);

        this.shopStrawberriesSell = this.add.sprite(this.shopStrawberriesPanelBg.x + (this.shopStrawberriesPanelBg.width * 0.5), this.shopStrawberriesPanelBg.y + (this.shopStrawberriesPanelBg.height * 0.5), 'shop-sell').setInteractive();
        this.shopStrawberriesSell.x -= (this.shopStrawberriesSell.width * 0.5) + 16 + this.shopStrawberriesBuy.width + 16;
        this.shopStrawberriesSell.y -= (this.shopStrawberriesSell.height * 0.5) + 16;
        //this.shopStrawberriesSell.visible = false;
        this.shopContainer.add(this.shopStrawberriesSell);
        this.shopStrawberriesSell.on('pointerup', function (pointer) {
            if(game.global.strawberryCount > 0){
                var multiplier = 1;
                var season = that.getSeason();
                if(season == 2){
                    multiplier = 1.2;
                }
                game.global.score += strawberriesValue * multiplier;
                updateScoreText();
                game.global.strawberryCount--;
                updateStrawberriesText();
                ga('send', 'event', "Button", "Sell", "Strawberries");
            }
        });

        this.shopStrawberriesValueText = this.add.text(this.shopStrawberriesSell.x, this.shopStrawberriesSell.y, "x" + strawberriesValue, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopStrawberriesValueText.setOrigin(0.5);
        //this.shopStrawberriesValueText.visible = false;
        this.shopContainer.add(this.shopStrawberriesValueText);

        this.shopStrawberriesUp = this.add.sprite(this.shopStrawberriesSell.x, this.shopStrawberriesSell.y - this.shopStrawberriesSell.height, 'up');
        this.shopContainer.add(this.shopStrawberriesUp);

        this.shopStrawberriesUpIcon = this.add.sprite(this.shopStrawberriesUp.x, this.shopStrawberriesUp.y, 'summer');
        this.shopStrawberriesUpIcon.x += this.shopStrawberriesUpIcon.width;
        this.shopContainer.add(this.shopStrawberriesUpIcon);

        this.shopCauliflowerPanelBg = this.add.sprite(0, this.shopStrawberriesPanelBg.y + ((this.shopStrawberriesPanelBg.height + 16) * 0.5), 'shop-panel-bg');
        this.shopCauliflowerPanelBg.x += (this.shopCauliflowerPanelBg.width * 0.5) + 16;
        this.shopCauliflowerPanelBg.y += (this.shopCauliflowerPanelBg.height * 0.5) + 16;
        //this.shopCauliflowerPanelBg.visible = false;
        this.shopContainer.add(this.shopCauliflowerPanelBg);

        //this.shopCauliflowerNameText = this.add.text(this.shopCauliflowerPanelBg.x - (this.shopCauliflowerPanelBg.width * 0.5) + 32, this.shopCauliflowerPanelBg.y - (this.shopCauliflowerPanelBg.height * 0.5) + 32, "Cauliflower", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.shopCauliflowerIcon = this.add.sprite(this.shopCauliflowerPanelBg.x - (this.shopCauliflowerPanelBg.width * 0.5) + 32, this.shopCauliflowerPanelBg.y - (this.shopCauliflowerPanelBg.height * 0.5) + 16, "icon-cauliflower-large");
        this.shopCauliflowerIcon.x += this.shopCauliflowerIcon.width * 0.5;
        this.shopCauliflowerIcon.y += this.shopCauliflowerIcon.height * 0.5;
        //this.shopCauliflowerNameText.visible = false;
        this.shopContainer.add(this.shopCauliflowerIcon);

        this.shopCauliflowerBuy = this.add.sprite(this.shopCauliflowerPanelBg.x + (this.shopCauliflowerPanelBg.width * 0.5), this.shopCauliflowerPanelBg.y + (this.shopCauliflowerPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopCauliflowerBuy.x -= (this.shopCauliflowerBuy.width * 0.5) + 16;
        this.shopCauliflowerBuy.y -= (this.shopCauliflowerBuy.height * 0.5) + 16;
        //this.shopCauliflowerBuy.visible = false;
        this.shopContainer.add(this.shopCauliflowerBuy);
        this.shopCauliflowerBuy.on('pointerup', function (pointer) {
            if(game.global.score >= cauliflowerCost){
                game.global.score -= cauliflowerCost;
                updateScoreText();
                game.global.cauliflowerSeeds++;
                updateCauliflowerSeedsText();
                ga('send', 'event', "Button", "Buy", "Cauliflower");
            }else{
                ga('send', 'event', "Button", "Can't afford", "Cauliflower");
            }
        });

        this.shopCauliflowerCostText = this.add.text(this.shopCauliflowerBuy.x, this.shopCauliflowerBuy.y, "x" + cauliflowerCost, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopCauliflowerCostText.setOrigin(0.5);
        //this.shopCauliflowerCostText.visible = false;
        this.shopContainer.add(this.shopCauliflowerCostText);

        this.shopCauliflowerSell = this.add.sprite(this.shopCauliflowerPanelBg.x + (this.shopCauliflowerPanelBg.width * 0.5), this.shopCauliflowerPanelBg.y + (this.shopCauliflowerPanelBg.height * 0.5), 'shop-sell').setInteractive();
        this.shopCauliflowerSell.x -= (this.shopCauliflowerSell.width * 0.5) + 16 + this.shopCauliflowerBuy.width + 16;
        this.shopCauliflowerSell.y -= (this.shopCauliflowerSell.height * 0.5) + 16;
        //this.shopCauliflowerSell.visible = false;
        this.shopContainer.add(this.shopCauliflowerSell);
        this.shopCauliflowerSell.on('pointerup', function (pointer) {
            if(game.global.cauliflowerCount > 0){
                var multiplier = 1;
                var season = that.getSeason();
                if(season == 4){
                    multiplier = 1.2;
                }
                game.global.score += cauliflowerValue * multiplier;
                updateScoreText();
                game.global.cauliflowerCount--;
                updateCauliflowerText();
                ga('send', 'event', "Button", "Sell", "Cauliflower");
            }
        });

        this.shopCauliflowerValueText = this.add.text(this.shopCauliflowerSell.x, this.shopCauliflowerSell.y, "x" + cauliflowerValue, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopCauliflowerValueText.setOrigin(0.5);
        //this.shopCauliflowerValueText.visible = false;
        this.shopContainer.add(this.shopCauliflowerValueText);

        this.shopCauliflowerUp = this.add.sprite(this.shopCauliflowerSell.x, this.shopCauliflowerSell.y - this.shopCauliflowerSell.height, 'up');
        this.shopContainer.add(this.shopCauliflowerUp);

        this.shopCauliflowerUpIcon = this.add.sprite(this.shopCauliflowerUp.x, this.shopCauliflowerUp.y, 'winter');
        this.shopCauliflowerUpIcon.x += this.shopCauliflowerUpIcon.width;
        this.shopContainer.add(this.shopCauliflowerUpIcon);

        this.shopCornPanelBg = this.add.sprite(0, this.shopCauliflowerPanelBg.y + ((this.shopCauliflowerPanelBg.height + 16) * 0.5), 'shop-panel-bg');
        this.shopCornPanelBg.x += (this.shopCornPanelBg.width * 0.5) + 16;
        this.shopCornPanelBg.y += (this.shopCornPanelBg.height * 0.5) + 16;
        //this.shopCornPanelBg.visible = false;
        this.shopContainer.add(this.shopCornPanelBg);

        //this.shopCornNameText = this.add.text(this.shopCornPanelBg.x - (this.shopCornPanelBg.width * 0.5) + 32, this.shopCornPanelBg.y - (this.shopCornPanelBg.height * 0.5) + 32, "Corn", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.shopCornIcon = this.add.sprite(this.shopCornPanelBg.x - (this.shopCornPanelBg.width * 0.5) + 32, this.shopCornPanelBg.y - (this.shopCornPanelBg.height * 0.5) + 16, "icon-corn-large");
        this.shopCornIcon.x += this.shopCornIcon.width * 0.5;
        this.shopCornIcon.y += this.shopCornIcon.height * 0.5;
        //this.shopCornNameText.visible = false;
        this.shopContainer.add(this.shopCornIcon);

        this.shopCornBuy = this.add.sprite(this.shopCornPanelBg.x + (this.shopCornPanelBg.width * 0.5), this.shopCornPanelBg.y + (this.shopCornPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopCornBuy.x -= (this.shopCornBuy.width * 0.5) + 16;
        this.shopCornBuy.y -= (this.shopCornBuy.height * 0.5) + 16;
        //this.shopCornBuy.visible = false;
        this.shopContainer.add(this.shopCornBuy);
        this.shopCornBuy.on('pointerup', function (pointer) {
            if(game.global.score >= cornCost){
                game.global.score -= cornCost;
                updateScoreText();
                game.global.cornSeeds++;
                updateCornSeedsText();
                ga('send', 'event', "Button", "Buy", "Corn");
            }else{
                ga('send', 'event', "Button", "Can't afford", "Corn");
            }
        });

        this.shopCornCostText = this.add.text(this.shopCornBuy.x, this.shopCornBuy.y, "x" + cornCost, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopCornCostText.setOrigin(0.5);
        //this.shopCornCostText.visible = false;
        this.shopContainer.add(this.shopCornCostText);

        this.shopCornSell = this.add.sprite(this.shopCornPanelBg.x + (this.shopCornPanelBg.width * 0.5), this.shopCornPanelBg.y + (this.shopCornPanelBg.height * 0.5), 'shop-sell').setInteractive();
        this.shopCornSell.x -= (this.shopCornSell.width * 0.5) + 16 + this.shopCornBuy.width + 16;
        this.shopCornSell.y -= (this.shopCornSell.height * 0.5) + 16;
        //this.shopCornSell.visible = false;
        this.shopContainer.add(this.shopCornSell);
        this.shopCornSell.on('pointerup', function (pointer) {
            if(game.global.cornCount > 0){
                var multiplier = 1;
                var season = that.getSeason();
                if(season == 2){
                    multiplier = 1.2;
                }
                game.global.score += cornValue * multiplier;
                updateScoreText();
                game.global.cornCount--;
                updateCornText();
                ga('send', 'event', "Button", "Sell", "Corn");
            }
        });

        this.shopCornValueText = this.add.text(this.shopCornSell.x, this.shopCornSell.y, "x" + cornValue, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopCornValueText.setOrigin(0.5);
        //this.shopCornValueText.visible = false;
        this.shopContainer.add(this.shopCornValueText);

        this.shopCornUp = this.add.sprite(this.shopCornSell.x, this.shopCornSell.y - this.shopCornSell.height, 'up');
        this.shopContainer.add(this.shopCornUp);

        this.shopCornUpIcon = this.add.sprite(this.shopCornUp.x, this.shopCornUp.y, 'summer');
        this.shopCornUpIcon.x += this.shopCornUpIcon.width;
        this.shopContainer.add(this.shopCornUpIcon);

        this.shopApplePanelBg = this.add.sprite(0, this.shopCornPanelBg.y + ((this.shopCornPanelBg.height + 16) * 0.5), 'shop-panel-bg');
        this.shopApplePanelBg.x += (this.shopApplePanelBg.width * 0.5) + 16;
        this.shopApplePanelBg.y += (this.shopApplePanelBg.height * 0.5) + 16;
        //this.shopApplePanelBg.visible = false;
        this.shopContainer.add(this.shopApplePanelBg);

        //this.shopAppleNameText = this.add.text(this.shopApplePanelBg.x - (this.shopApplePanelBg.width * 0.5) + 32, this.shopApplePanelBg.y - (this.shopApplePanelBg.height * 0.5) + 32, "Apple", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.shopAppleIcon = this.add.sprite(this.shopApplePanelBg.x - (this.shopApplePanelBg.width * 0.5) + 32, this.shopApplePanelBg.y - (this.shopApplePanelBg.height * 0.5) + 16, "icon-apple-large");
        this.shopAppleIcon.x += this.shopAppleIcon.width * 0.5;
        this.shopAppleIcon.y += this.shopAppleIcon.height * 0.5;
        //this.shopAppleNameText.visible = false;
        this.shopContainer.add(this.shopAppleIcon);

        this.shopAppleBuy = this.add.sprite(this.shopApplePanelBg.x + (this.shopApplePanelBg.width * 0.5), this.shopApplePanelBg.y + (this.shopApplePanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopAppleBuy.x -= (this.shopAppleBuy.width * 0.5) + 16;
        this.shopAppleBuy.y -= (this.shopAppleBuy.height * 0.5) + 16;
        //this.shopAppleBuy.visible = false;
        this.shopContainer.add(this.shopAppleBuy);
        this.shopAppleBuy.on('pointerup', function (pointer) {
            if(game.global.score >= applesCost){
                game.global.score -= applesCost;
                updateScoreText();
                game.global.appleSeeds++;
                updateAppleSeedsText();
                ga('send', 'event', "Button", "Buy", "Apples");
            }else{
                ga('send', 'event', "Button", "Can't afford", "Apples");
            }
        });

        this.shopAppleCostText = this.add.text(this.shopAppleBuy.x, this.shopAppleBuy.y, "x" + applesCost, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopAppleCostText.setOrigin(0.5);
        //this.shopAppleCostText.visible = false;
        this.shopContainer.add(this.shopAppleCostText);

        this.shopAppleSell = this.add.sprite(this.shopApplePanelBg.x + (this.shopApplePanelBg.width * 0.5), this.shopApplePanelBg.y + (this.shopApplePanelBg.height * 0.5), 'shop-sell').setInteractive();
        this.shopAppleSell.x -= (this.shopAppleSell.width * 0.5) + 16 + this.shopAppleBuy.width + 16;
        this.shopAppleSell.y -= (this.shopAppleSell.height * 0.5) + 16;
        //this.shopAppleSell.visible = false;
        this.shopContainer.add(this.shopAppleSell);
        this.shopAppleSell.on('pointerup', function (pointer) {
            if(game.global.appleCount > 0){
                var multiplier = 1;
                var season = that.getSeason();
                if(season == 3){
                    multiplier = 1.2;
                }
                game.global.score += applesValue * multiplier;
                updateScoreText();
                game.global.appleCount--;
                updateApplesText();
                ga('send', 'event', "Button", "Sell", "Apples");
            }
        });

        this.shopAppleValueText = this.add.text(this.shopAppleSell.x, this.shopAppleSell.y, "x" + applesValue, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopAppleValueText.setOrigin(0.5);
        //this.shopAppleValueText.visible = false;
        this.shopContainer.add(this.shopAppleValueText);

        this.shopAppleUp = this.add.sprite(this.shopAppleSell.x, this.shopAppleSell.y - this.shopAppleSell.height, 'up');
        this.shopContainer.add(this.shopAppleUp);

        this.shopAppleUpIcon = this.add.sprite(this.shopAppleUp.x, this.shopAppleUp.y, 'autumn');
        this.shopAppleUpIcon.x += this.shopAppleUpIcon.width;
        this.shopContainer.add(this.shopAppleUpIcon);

        this.shopOrangePanelBg = this.add.sprite(0, this.shopApplePanelBg.y + ((this.shopApplePanelBg.height + 16) * 0.5), 'shop-panel-bg');
        this.shopOrangePanelBg.x += (this.shopOrangePanelBg.width * 0.5) + 16;
        this.shopOrangePanelBg.y += (this.shopOrangePanelBg.height * 0.5) + 16;
        //this.shopOrangePanelBg.visible = false;
        this.shopContainer.add(this.shopOrangePanelBg);

        //this.shopOrangeNameText = this.add.text(this.shopOrangePanelBg.x - (this.shopOrangePanelBg.width * 0.5) + 32, this.shopOrangePanelBg.y - (this.shopOrangePanelBg.height * 0.5) + 32, "Orange", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.shopOrangeIcon = this.add.sprite(this.shopOrangePanelBg.x - (this.shopOrangePanelBg.width * 0.5) + 32, this.shopOrangePanelBg.y - (this.shopOrangePanelBg.height * 0.5) + 16, "icon-orange-large");
        this.shopOrangeIcon.x += this.shopOrangeIcon.width * 0.5;
        this.shopOrangeIcon.y += this.shopOrangeIcon.height * 0.5;
        //this.shopOrangeNameText.visible = false;
        this.shopContainer.add(this.shopOrangeIcon);

        this.shopOrangeBuy = this.add.sprite(this.shopOrangePanelBg.x + (this.shopOrangePanelBg.width * 0.5), this.shopOrangePanelBg.y + (this.shopOrangePanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopOrangeBuy.x -= (this.shopOrangeBuy.width * 0.5) + 16;
        this.shopOrangeBuy.y -= (this.shopOrangeBuy.height * 0.5) + 16;
        //this.shopOrangeBuy.visible = false;
        this.shopContainer.add(this.shopOrangeBuy);
        this.shopOrangeBuy.on('pointerup', function (pointer) {
            if(game.global.score >= orangesCost){
                game.global.score -= orangesCost;
                updateScoreText();
                game.global.orangeSeeds++;
                updateOrangeSeedsText();
                ga('send', 'event', "Button", "Buy", "Oranges");
            }else{
                ga('send', 'event', "Button", "Can't afford", "Oranges");
            }
        });

        this.shopOrangeCostText = this.add.text(this.shopOrangeBuy.x, this.shopOrangeBuy.y, "x" + orangesCost, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopOrangeCostText.setOrigin(0.5);
        //this.shopOrangeCostText.visible = false;
        this.shopContainer.add(this.shopOrangeCostText);

        this.shopOrangeSell = this.add.sprite(this.shopOrangePanelBg.x + (this.shopOrangePanelBg.width * 0.5), this.shopOrangePanelBg.y + (this.shopOrangePanelBg.height * 0.5), 'shop-sell').setInteractive();
        this.shopOrangeSell.x -= (this.shopOrangeSell.width * 0.5) + 16 + this.shopOrangeBuy.width + 16;
        this.shopOrangeSell.y -= (this.shopOrangeSell.height * 0.5) + 16;
        //this.shopOrangeSell.visible = false;
        this.shopContainer.add(this.shopOrangeSell);
        this.shopOrangeSell.on('pointerup', function (pointer) {
            if(game.global.orangeCount > 0){
                var multiplier = 1;
                var season = that.getSeason();
                if(season == 3){
                    multiplier = 1.2;
                }
                game.global.score += orangesValue * multiplier;
                updateScoreText();
                game.global.orangeCount--;
                updateOrangesText();
                ga('send', 'event', "Button", "Sell", "Oranges");
            }
        });

        this.shopOrangeValueText = this.add.text(this.shopOrangeSell.x, this.shopOrangeSell.y, "x" + orangesValue, {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopOrangeValueText.setOrigin(0.5);
        //this.shopOrangeValueText.visible = false;
        this.shopContainer.add(this.shopOrangeValueText);

        this.shopOrangeUp = this.add.sprite(this.shopOrangeSell.x, this.shopOrangeSell.y - this.shopOrangeSell.height, 'up');
        this.shopContainer.add(this.shopOrangeUp);

        this.shopOrangeUpIcon = this.add.sprite(this.shopOrangeUp.x, this.shopOrangeUp.y, 'autumn');
        this.shopOrangeUpIcon.x += this.shopOrangeUpIcon.width;
        this.shopContainer.add(this.shopOrangeUpIcon);

        var move = false;
        var offset = {x: 0, y: 0};

        this.input.on('pointerdown', function (pointer) {
            move = true;
            offset.y = pointer.y;
        });
        this.input.on('pointerup', function (pointer) {
            move = false;
        });
        /*this.input.on('pointercancel', function (pointer) {
            move = false;
        });*/

        this.input.on('pointermove', function (pointer) {
            if (move && that.shopContainer.visible) {
                if (pointer.x < that.shopBg.width) {
                    //this.shopContainer.x = pointer.x;
                    var diff = pointer.y - offset.y;
                    offset.y = pointer.y;
                    var y = that.shopContainer.y + diff;
                    var min = -420;
                    var max = 0;
                    y = Math.min(Math.max(y, min), max);
                    //console.log("y: " + y);
                    that.shopContainer.y = y;
                }else{
                    offset.y = pointer.y;
                }
            }
        });

        this.timeRemaining = 5 * 60 * 1000;
        //console.log("this.timeRemaining: " + this.timeRemaining);
        this.timeRemainingText = this.add.text(game.config.width * 0.5, 20, "0:00", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.updateTimeRemainingText();

        window.addUpdateable = function(tile) {
            updatables.push(tile);
        }

        ga('send', 'event', "Action", "Play");
    }

    changeTool(tool) {
        this.currentTool = tool;
    }

    openShop() {
        this.shopContainer.visible = true;
        this.shopContainer.y = 0;
        this.shopBg.visible = true;
        this.shopClose.visible = true;
        /*this.shopBg.visible = true;
        this.shopNameText.visible = true;
        this.shopBuy.visible = true;
        this.shopCostText.visible = true;
        this.shopClose.visible = true;*/
    }

    closeShop() {
        this.shopContainer.visible = false;
        this.shopBg.visible = false;
        this.shopClose.visible = false;
        /*this.shopBg.visible = false;
        this.shopNameText.visible = false;
        this.shopBuy.visible = false;
        this.shopCostText.visible = false;
        this.shopClose.visible = false;*/
    }

    update(time, delta){
        //console.log("delta: " + delta);
        this.timeRemaining -= delta;
        this.updateTimeRemainingText();
        //console.log("this.timeRemaining: " + this.timeRemaining);
        this.arrow.angle = this.calculateSeasonAngle();
        if(this.timeRemaining <= 0){
            this.scene.start("Results");
        }
        for(var updatable in updatables){
            var tile = updatables[updatable];
            tile.timeInMiliseconds -= delta;
            if(tile.timeInMiliseconds <= 0){
                tile.grow();
                if(tile.ready){
                    var index = updatables.indexOf(tile);
                    updatables.splice(index, 1);
                }
            }
        }
    }

    updateTimeRemainingText(){
        var minutes = Math.floor((this.timeRemaining / 1000) / 60);
        //console.log("minutes: " + minutes);
        var seconds = Math.floor((this.timeRemaining / 1000) % 60);
        //console.log("seconds: " + seconds);
        this.timeRemainingText.setText(minutes + ":" + seconds.padLeft());
    }

    calculateSeasonAngle(){
        var ratio = ((this.timeRemaining / 1000) / 60) % 1;
        var angle = 360 * (1 - ratio);
        return angle;
    }

    getSeason(){
        var ratio = ((this.timeRemaining / 1000) / 60) % 1;
        ratio = 1 - ratio;
        if(ratio < 0.25){
            return 1;
        }else if(ratio < 0.5){
            return 2;
        }else if(ratio < 0.75){
            return 3;
        }else{
            return 4;
        }
    }

    showSeedsButtons() {
        this.tomatoesButton.x = this.tomatoesButton.start_x;
        this.tomatoesButton.visible = true;
        this.beansButton.x = this.beansButton.start_x;
        this.beansButton.visible = true;
        this.strawberriesButton.x = this.strawberriesButton.start_x;
        this.strawberriesButton.visible = true;
        this.cauliflowerButton.x = this.cauliflowerButton.start_x;
        this.cauliflowerButton.visible = true;
        this.cornButton.x = this.cornButton.start_x;
        this.cornButton.visible = true;
        this.appleButton.x = this.appleButton.start_x;
        this.appleButton.visible = true;
        this.orangeButton.x = this.orangeButton.start_x;
        this.orangeButton.visible = true;

        this.tomatoeSeedsText.x = this.tomatoeSeedsText.start_x;
        this.beanSeedsText.x = this.beanSeedsText.start_x;
        this.strawberrySeedsText.x = this.strawberrySeedsText.start_x;
        this.cauliflowerSeedsText.x = this.cauliflowerSeedsText.start_x;
        this.cornSeedsText.x = this.cornSeedsText.start_x;
        this.appleSeedsText.x = this.appleSeedsText.start_x;
        this.orangeSeedsText.x = this.orangeSeedsText.start_x;

        this.tomatoeSeedsText.visible = true;
        this.beanSeedsText.visible = true;
        this.strawberrySeedsText.visible = true;
        this.cauliflowerSeedsText.visible = true;
        this.cornSeedsText.visible = true;
        this.appleSeedsText.visible = true;
        this.orangeSeedsText.visible = true;
    }

    hideSeedsButtons() {
        this.tomatoesButton.visible = false;
        this.beansButton.visible = false;
        this.strawberriesButton.visible = false;
        this.cauliflowerButton.visible = false;
        this.cornButton.visible = false;
        this.appleButton.visible = false;
        this.orangeButton.visible = false;

        this.tomatoeSeedsText.visible = false;
        this.beanSeedsText.visible = false;
        this.strawberrySeedsText.visible = false;
        this.cauliflowerSeedsText.visible = false;
        this.cornSeedsText.visible = false;
        this.appleSeedsText.visible = false;
        this.orangeSeedsText.visible = false;
    }
}