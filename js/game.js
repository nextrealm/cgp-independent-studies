var waters = [];
var tiles = [];
var title;
var updatables = [];

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
        this.load.image('button-sickle', 'assets/sprites/button-sickle.png');

        this.load.image('shop-bg', 'assets/sprites/shop-bg.png');
        this.load.image('shop-panel-bg', 'assets/sprites/shop-panel-bg.png');
        this.load.image('shop-buy', 'assets/sprites/shop-buy.png');
        this.load.image('shop-close', 'assets/sprites/shop-close.png');

        this.load.image('icon-tomatoes', 'assets/sprites/icon-tomatoes.png');
        this.load.image('icon-beans', 'assets/sprites/icon-beans.png');
        this.load.image('icon-strawberries', 'assets/sprites/icon-strawberries.png');
        this.load.image('icon-cauliflower', 'assets/sprites/icon-cauliflower.png');
        this.load.image('icon-corn', 'assets/sprites/icon-corn.png');
    }

    create() {
        console.info('FarmFactsGame scene started.');

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

        this.buttonHilight = this.add.sprite(-100, -100, 'button-hilight');

        this.scoreText = this.add.text(game.config.width, 10, game.global.score, {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});

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
        });

        this.scoreText.x -= this.spadeButton.width;

        this.wateringCanButton = this.add.sprite(game.config.width, this.spadeButton.y + (this.spadeButton.height * 0.5), 'button-wateringCan').setInteractive();
        this.wateringCanButton.x -= this.wateringCanButton.width;
        this.wateringCanButton.y += (this.wateringCanButton.height * 0.5) + 10;
        //this.wateringCanButton.input.useHandCursor = true;
        this.wateringCanButton.on('pointerup', function (pointer) {
            that.changeTool(wateringCan);
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
        });

        this.waterText = this.add.text(this.wateringCanButton.x + (this.wateringCanButton.width * 0.5), this.wateringCanButton.y + (this.wateringCanButton.height * 0.5), "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});

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
        });

        this.shopButton = this.add.sprite(game.config.width, this.ploughButton.y + (this.ploughButton.height * 0.5), 'button-shop').setInteractive();
        this.shopButton.x -= this.shopButton.width;
        this.shopButton.y += (this.shopButton.height * 0.5) + 10;
        //this.shopButton.input.useHandCursor = true;
        this.shopButton.on('pointerup', function (pointer) {
            that.openShop();
        });

        this.tomatoesButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-tomatoes').setInteractive();
        this.tomatoesButton.x -= this.tomatoesButton.width;
        this.tomatoesButton.y += (this.tomatoesButton.height * 0.5) + 10;
        //this.tomatoesButton.input.useHandCursor = true;
        this.tomatoesButton.on('pointerup', function (pointer) {
            that.changeTool(tomatoes);
            tomatoes.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
        });

        this.tomatoeSeedsText = this.add.text(this.tomatoesButton.x + (this.tomatoesButton.width * 0.5), this.tomatoesButton.y + (this.tomatoesButton.height * 0.5), "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});

        window.updateTomatoeSeedsText = function() {
            that.tomatoeSeedsText.setText("x" + game.global.tomatoeSeeds);
        }

        this.beansButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-beans').setInteractive();
        this.beansButton.x -= this.beansButton.width;
        this.beansButton.x -= this.tomatoesButton.width;
        this.beansButton.y += (this.beansButton.height * 0.5) + 10;
        //this.beansButton.input.useHandCursor = true;
        this.beansButton.on('pointerup', function (pointer) {
            that.changeTool(beans);
            beans.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
        });

        this.beanSeedsText = this.add.text(this.beansButton.x + (this.beansButton.width * 0.5), this.beansButton.y + (this.beansButton.height * 0.5), "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});

        window.updateBeanSeedsText = function() {
            that.beanSeedsText.setText("x" + game.global.beanSeeds);
        }

        this.strawberriesButton = this.add.sprite(game.config.width, this.shopButton.y + (this.shopButton.height * 0.5), 'button-strawberries').setInteractive();
        this.strawberriesButton.x -= this.strawberriesButton.width;
        this.strawberriesButton.x -= this.tomatoesButton.width;
        this.strawberriesButton.y += (this.strawberriesButton.height * 0.5) + 10;
        //this.strawberriesButton.input.useHandCursor = true;
        this.strawberriesButton.on('pointerup', function (pointer) {
            that.changeTool(strawberries);
            strawberries.scene = that;
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
        });

        this.strawberrySeedsText = this.add.text(this.strawberriesButton.x + (this.strawberriesButton.width * 0.5), this.strawberriesButton.y + (this.strawberriesButton.height * 0.5), "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});

        window.updateStrawberrySeedsText = function() {
            that.strawberrySeedsText.setText("x" + game.global.strawberrySeeds);
        }

        this.sickleButton = this.add.sprite(game.config.width, this.tomatoesButton.y + (this.tomatoesButton.height * 0.5), 'button-sickle').setInteractive();
        this.sickleButton.x -= this.sickleButton.width;
        this.sickleButton.y += (this.sickleButton.height * 0.5) + 10;
        //this.sickleButton.input.useHandCursor = true;
        this.sickleButton.on('pointerup', function (pointer) {
            that.changeTool(sickle);
            that.buttonHilight.x = this.x;
            that.buttonHilight.y = this.y;
        });

        this.tomatoesText = this.add.text(this.sickleButton.x + (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5), "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});

        window.updateTomatoesText = function() {
            that.tomatoesText.setText("x" + game.global.tomatoeCount);
        }

        this.beansText = this.add.text(this.sickleButton.x + (this.sickleButton.width * 0.5), this.sickleButton.y + (this.sickleButton.height * 0.5) + 16, "x0", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});

        window.updateBeansText = function() {
            that.beansText.setText("x" + game.global.beanCount);
        }

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
        });

        this.shopTomatoesPanelBg = this.add.sprite(0, 0, 'shop-panel-bg');
        this.shopTomatoesPanelBg.x += (this.shopTomatoesPanelBg.width * 0.5) + 16;
        this.shopTomatoesPanelBg.y += (this.shopTomatoesPanelBg.height * 0.5) + 16;
        //this.shopTomatoesPanelBg.visible = false;
        this.shopContainer.add(this.shopTomatoesPanelBg);

        this.shopTomatoesNameText = this.add.text(this.shopTomatoesPanelBg.x - (this.shopTomatoesPanelBg.width * 0.5) + 32, this.shopTomatoesPanelBg.y - (this.shopTomatoesPanelBg.height * 0.5) + 32, "Tomatoes", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        //this.shopTomatoesNameText.visible = false;
        this.shopContainer.add(this.shopTomatoesNameText);

        this.shopTomatoesBuy = this.add.sprite(this.shopTomatoesPanelBg.x + (this.shopTomatoesPanelBg.width * 0.5), this.shopTomatoesPanelBg.y + (this.shopTomatoesPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopTomatoesBuy.x -= (this.shopTomatoesBuy.width * 0.5) + 16;
        this.shopTomatoesBuy.y -= (this.shopTomatoesBuy.height * 0.5) + 16;
        //this.shopTomatoesBuy.visible = false;
        this.shopContainer.add(this.shopTomatoesBuy);
        this.shopTomatoesBuy.on('pointerup', function (pointer) {
            var tomatoeCost = 1;
            if(game.global.score >= tomatoeCost){
                game.global.score -= tomatoeCost;
                updateScoreText();
                game.global.tomatoeSeeds++;
                updateTomatoeSeedsText();
            }
        });

        this.shopTomatoesCostText = this.add.text(this.shopTomatoesBuy.x, this.shopTomatoesBuy.y, "x1", {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopTomatoesCostText.setOrigin(0.5);
        //this.shopTomatoesCostText.visible = false;
        this.shopContainer.add(this.shopTomatoesCostText);

        this.shopTomatoesSell = this.add.sprite(this.shopTomatoesPanelBg.x + (this.shopTomatoesPanelBg.width * 0.5), this.shopTomatoesPanelBg.y + (this.shopTomatoesPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopTomatoesSell.x -= (this.shopTomatoesSell.width * 0.5) + 16 + this.shopTomatoesBuy.width + 16;
        this.shopTomatoesSell.y -= (this.shopTomatoesSell.height * 0.5) + 16;
        //this.shopTomatoesSell.visible = false;
        this.shopContainer.add(this.shopTomatoesSell);
        this.shopTomatoesSell.on('pointerup', function (pointer) {
            if(game.global.tomatoeCount > 0){
                var tomatoeValue = 2;
                game.global.score += tomatoeValue;
                updateScoreText();
                game.global.tomatoeCount--;
                updateTomatoesText();
            }
        });

        this.shopTomatoesValueText = this.add.text(this.shopTomatoesSell.x, this.shopTomatoesSell.y, "x2", {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopTomatoesValueText.setOrigin(0.5);
        //this.shopTomatoesValueText.visible = false;
        this.shopContainer.add(this.shopTomatoesValueText);

        this.shopBeansPanelBg = this.add.sprite(0, this.shopTomatoesPanelBg.height + 16, 'shop-panel-bg');
        this.shopBeansPanelBg.x += (this.shopBeansPanelBg.width * 0.5) + 16;
        this.shopBeansPanelBg.y += (this.shopBeansPanelBg.height * 0.5) + 16;
        //this.shopBeansPanelBg.visible = false;
        this.shopContainer.add(this.shopBeansPanelBg);

        this.shopBeansNameText = this.add.text(this.shopBeansPanelBg.x - (this.shopBeansPanelBg.width * 0.5) + 32, this.shopBeansPanelBg.y - (this.shopBeansPanelBg.height * 0.5) + 32, "Beans", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        //this.shopBeansNameText.visible = false;
        this.shopContainer.add(this.shopBeansNameText);

        this.shopBeansBuy = this.add.sprite(this.shopBeansPanelBg.x + (this.shopBeansPanelBg.width * 0.5), this.shopBeansPanelBg.y + (this.shopBeansPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopBeansBuy.x -= (this.shopBeansBuy.width * 0.5) + 16;
        this.shopBeansBuy.y -= (this.shopBeansBuy.height * 0.5) + 16;
        //this.shopBeansBuy.visible = false;
        this.shopContainer.add(this.shopBeansBuy);
        this.shopBeansBuy.on('pointerup', function (pointer) {
            var beanCost = 10;
            if(game.global.score >= beanCost){
                game.global.score -= beanCost;
                updateScoreText();
                game.global.beanSeeds++;
                updateBeanSeedsText();
            }
        });

        this.shopBeansCostText = this.add.text(this.shopBeansBuy.x, this.shopBeansBuy.y, "x10", {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopBeansCostText.setOrigin(0.5);
        //this.shopBeansCostText.visible = false;
        this.shopContainer.add(this.shopBeansCostText);

        this.shopBeansSell = this.add.sprite(this.shopBeansPanelBg.x + (this.shopBeansPanelBg.width * 0.5), this.shopBeansPanelBg.y + (this.shopBeansPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopBeansSell.x -= (this.shopBeansSell.width * 0.5) + 16 + this.shopBeansBuy.width + 16;
        this.shopBeansSell.y -= (this.shopBeansSell.height * 0.5) + 16;
        //this.shopBeansSell.visible = false;
        this.shopContainer.add(this.shopBeansSell);
        this.shopBeansSell.on('pointerup', function (pointer) {
            if(game.global.beanCount > 0){
                var beanValue = 20;
                game.global.score += beanValue;
                updateScoreText();
                game.global.beanCount--;
                updateBeansText();
            }
        });

        this.shopBeansValueText = this.add.text(this.shopBeansSell.x, this.shopBeansSell.y, "x20", {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopBeansValueText.setOrigin(0.5);
        //this.shopBeansValueText.visible = false;
        this.shopContainer.add(this.shopBeansValueText);



        this.shopStrawberriesPanelBg = this.add.sprite(0, this.shopBeansPanelBg.x + this.shopBeansPanelBg.height + 16, 'shop-panel-bg');
        this.shopStrawberriesPanelBg.x += (this.shopStrawberriesPanelBg.width * 0.5) + 16;
        this.shopStrawberriesPanelBg.y += (this.shopStrawberriesPanelBg.height * 0.5) + 16;
        //this.shopStrawberriesPanelBg.visible = false;
        this.shopContainer.add(this.shopStrawberriesPanelBg);

        this.shopStrawberriesNameText = this.add.text(this.shopStrawberriesPanelBg.x - (this.shopStrawberriesPanelBg.width * 0.5) + 32, this.shopStrawberriesPanelBg.y - (this.shopStrawberriesPanelBg.height * 0.5) + 32, "Strawberries", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        //this.shopStrawberriesNameText.visible = false;
        this.shopContainer.add(this.shopStrawberriesNameText);

        this.shopStrawberriesBuy = this.add.sprite(this.shopStrawberriesPanelBg.x + (this.shopStrawberriesPanelBg.width * 0.5), this.shopStrawberriesPanelBg.y + (this.shopStrawberriesPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopStrawberriesBuy.x -= (this.shopStrawberriesBuy.width * 0.5) + 16;
        this.shopStrawberriesBuy.y -= (this.shopStrawberriesBuy.height * 0.5) + 16;
        //this.shopStrawberriesBuy.visible = false;
        this.shopContainer.add(this.shopStrawberriesBuy);
        this.shopStrawberriesBuy.on('pointerup', function (pointer) {
            var strawberryCost = 10;
            if(game.global.score >= strawberryCost){
                game.global.score -= strawberryCost;
                updateScoreText();
                game.global.strawberrySeeds++;
                updateStrawberrySeedsText();
            }
        });

        this.shopStrawberriesCostText = this.add.text(this.shopStrawberriesBuy.x, this.shopStrawberriesBuy.y, "x10", {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopStrawberriesCostText.setOrigin(0.5);
        //this.shopStrawberriesCostText.visible = false;
        this.shopContainer.add(this.shopStrawberriesCostText);

        this.shopStrawberriesSell = this.add.sprite(this.shopStrawberriesPanelBg.x + (this.shopStrawberriesPanelBg.width * 0.5), this.shopStrawberriesPanelBg.y + (this.shopStrawberriesPanelBg.height * 0.5), 'shop-buy').setInteractive();
        this.shopStrawberriesSell.x -= (this.shopStrawberriesSell.width * 0.5) + 16 + this.shopStrawberriesBuy.width + 16;
        this.shopStrawberriesSell.y -= (this.shopStrawberriesSell.height * 0.5) + 16;
        //this.shopStrawberriesSell.visible = false;
        this.shopContainer.add(this.shopStrawberriesSell);
        this.shopStrawberriesSell.on('pointerup', function (pointer) {
            if(game.global.strawberryCount > 0){
                var strawberryValue = 20;
                game.global.score += strawberryValue;
                updateScoreText();
                game.global.strawberryCount--;
                updateStrawberriesText();
            }
        });

        this.shopStrawberriesValueText = this.add.text(this.shopStrawberriesSell.x, this.shopStrawberriesSell.y, "x20", {fontFamily: 'Arial', fontSize: 16, color: '#000000'/*, align: 'center'*/});
        this.shopStrawberriesValueText.setOrigin(0.5);
        //this.shopStrawberriesValueText.visible = false;
        this.shopContainer.add(this.shopStrawberriesValueText);




        var move = false;
        var offset = {x: 0, y: 0};

        this.input.on('pointerdown', function (pointer) {
            move = true;
            offset.y = pointer.y;
        });
        this.input.on('pointerup', function (pointer) {
            move = false;
        });

        this.input.on('pointermove', function (pointer) {
            if (move && that.shopContainer.visible) {
                //this.shopContainer.x = pointer.x;
                var diff = pointer.y - offset.y;
                offset.y = pointer.y;
                var y = that.shopContainer.y + diff;
                var min = -100;
                var max = 0;
                y = Math.min(Math.max(y, min), max);
                //console.log("y: " + y);
                that.shopContainer.y = y;
            }
        });

        this.timeRemaining = 5 * 60 * 1000;
        console.log("this.timeRemaining: " + this.timeRemaining);
        this.timeRemainingText = this.add.text(game.config.width * 0.5, 20, "0:00", {fontFamily: 'Arial', fontSize: 16, color: '#00ff00'});
        this.updateTimeRemainingText();

        window.addUpdateable = function(tile) {
            updatables.push(tile);
        }
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
}