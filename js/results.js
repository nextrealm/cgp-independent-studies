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
        this.load.image('button-replay', 'assets/sprites/button-replay.png');
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

        fetchScores();

        this.titleText = this.add.text(game.config.width * 0.5, 100, "Results", {fontFamily: 'Arial', fontSize: 32, color: '#f4f4f4', align: 'center'}).setOrigin(0.5, 0);

        this.loginButton = this.add.sprite(game.config.width * 0.5, 240, 'button-login').setInteractive();
        //this.loginButton.x -= this.loginButton.width;
        this.loginButton.on('pointerup', function (pointer) {
            showLogin();
        });
        this.loginButton.visible = game.global.user_id == -1;

        this.loginText = this.add.text(this.loginButton.x, this.loginButton.y, "Login", {fontFamily: 'Arial', fontSize: 26, color: '#000'}).setOrigin(0, 0.5);
        this.loginText.visible = game.global.user_id == -1;

        this.logoutButton = this.add.sprite(game.config.width * 0.5, 240, 'button-logout').setInteractive();
        //this.logoutButton.x -= this.logoutButton.width;
        this.logoutButton.on('pointerup', function (pointer) {
            game.global.user_id = -1;
            game.user.save();
            updateButtonVisibility();
        });
        this.logoutButton.visible = game.global.user_id != -1;

        this.logoutText = this.add.text(this.logoutButton.x, this.logoutButton.y, "Logout", {fontFamily: 'Arial', fontSize: 26, color: '#000'}).setOrigin(0, 0.5);
        this.logoutText.visible = game.global.user_id != -1;

        this.highscoresText = this.add.text(game.config.width * 0.5, 300, "Highscores", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'center'}).setOrigin(0.5, 0);

        this.name1Text = this.add.text(game.config.width * 0.5, 340, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name1Text.visible = false;
        this.score1Text = this.add.text(game.config.width * 0.5, 340, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score1Text.visible = false;
        
        this.name2Text = this.add.text(game.config.width * 0.5, this.score1Text.y + this.score1Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name2Text.visible = false;
        this.score2Text = this.add.text(game.config.width * 0.5, this.score1Text.y + this.score1Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score2Text.visible = false;
        
        this.name3Text = this.add.text(game.config.width * 0.5, this.score2Text.y + this.score2Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name3Text.visible = false;
        this.score3Text = this.add.text(game.config.width * 0.5, this.score2Text.y + this.score2Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score3Text.visible = false;

        this.name4Text = this.add.text(game.config.width * 0.5, this.score3Text.y + this.score3Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name4Text.visible = false;
        this.score4Text = this.add.text(game.config.width * 0.5, this.score3Text.y + this.score3Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score4Text.visible = false;

        this.name5Text = this.add.text(game.config.width * 0.5, this.score4Text.y + this.score4Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name5Text.visible = false;
        this.score5Text = this.add.text(game.config.width * 0.5, this.score4Text.y + this.score4Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score5Text.visible = false;

        this.name6Text = this.add.text(game.config.width * 0.5, this.score5Text.y + this.score5Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name6Text.visible = false;
        this.score6Text = this.add.text(game.config.width * 0.5, this.score5Text.y + this.score5Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score6Text.visible = false;

        this.name7Text = this.add.text(game.config.width * 0.5, this.score6Text.y + this.score6Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name7Text.visible = false;
        this.score7Text = this.add.text(game.config.width * 0.5, this.score6Text.y + this.score6Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score7Text.visible = false;

        this.name8Text = this.add.text(game.config.width * 0.5, this.score7Text.y + this.score7Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name8Text.visible = false;
        this.score8Text = this.add.text(game.config.width * 0.5, this.score7Text.y + this.score7Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score8Text.visible = false;

        this.name9Text = this.add.text(game.config.width * 0.5, this.score8Text.y + this.score8Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name9Text.visible = false;
        this.score9Text = this.add.text(game.config.width * 0.5, this.score8Text.y + this.score8Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score9Text.visible = false;

        this.name10Text = this.add.text(game.config.width * 0.5, this.score9Text.y + this.score9Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'right'}).setOrigin(1,0);
        this.name10Text.visible = false;
        this.score10Text = this.add.text(game.config.width * 0.5, this.score9Text.y + this.score9Text.height, "0", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4'});
        this.score10Text.visible = false;

        this.notSubmittedText = this.add.text(game.config.width * 0.5, this.score10Text.y + (this.score10Text.height * 2), "Highscore not submitted", {fontFamily: 'Arial', fontSize: 16, color: '#f4f4f4', align: 'center'}).setOrigin(0.5, 0);

        var that = this;

        window.updateScores = function() {
            that.updateScores();
        }

        window.onLogin = function() {
            game.user.save();
            that.updateButtonVisibility();
            submitScore(game.global.user_id, game.global.score);
        }

        window.onScoreSubmitSuccess = function() {
            that.notSubmittedText.visible = false;
        }

        window.onScoreSubmitFail = function() {
            that.notSubmittedText.visible = true;
        }

        if(game.global.user_id != -1){
            submitScore(game.global.user_id, game.global.score);
        }

        this.replayButton = this.add.sprite(game.config.width * 0.5, 640, 'button-replay').setInteractive();
        //this.replayButton.x -= this.replayButton.width;
        this.replayButton.on('pointerup', function (pointer) {
            game.user.reset();
            that.scene.start("FarmFactsGame");
        });
        this.replayButton.visible = game.global.user_id != -1;

        this.replayText = this.add.text(this.replayButton.x, this.replayButton.y, "Replay", {fontFamily: 'Arial', fontSize: 26, color: '#000'}).setOrigin(0, 0.5);
    }

    updateScores() {
        if(0 in game.global.scores){
            this.name1Text.setText(game.global.scores[0].username + ": ");
            this.name1Text.visible = true;
            this.score1Text.setText(game.global.scores[0].score);
            this.score1Text.visible = true;
        }else{
            this.name1Text.visible = false;
            this.score1Text.visible = false;
        }
        
        if(1 in game.global.scores){
            this.name2Text.setText(game.global.scores[1].username + ": ");
            this.name2Text.visible = true;
            this.score2Text.setText(game.global.scores[1].score);
            this.score2Text.visible = true;
        }else{
            this.name2Text.visible = false;
            this.score2Text.visible = false;
        }
        
        if(2 in game.global.scores){
            this.name3Text.setText(game.global.scores[2].username + ": ");
            this.name3Text.visible = true;
            this.score3Text.setText(game.global.scores[2].score);
            this.score3Text.visible = true;
        }else{
            this.name3Text.visible = false;
            this.score3Text.visible = false;
        }

        if(3 in game.global.scores){
            this.name4Text.setText(game.global.scores[3].username + ": ");
            this.name4Text.visible = true;
            this.score4Text.setText(game.global.scores[3].score);
            this.score4Text.visible = true;
        }else{
            this.name4Text.visible = false;
            this.score4Text.visible = false;
        }

        if(4 in game.global.scores){
            this.name5Text.setText(game.global.scores[4].username + ": ");
            this.name5Text.visible = true;
            this.score5Text.setText(game.global.scores[4].score);
            this.score5Text.visible = true;
        }else{
            this.name5Text.visible = false;
            this.score5Text.visible = false;
        }

        if(5 in game.global.scores){
            this.name6Text.setText(game.global.scores[5].username + ": ");
            this.name6Text.visible = true;
            this.score6Text.setText(game.global.scores[5].score);
            this.score6Text.visible = true;
        }else{
            this.name6Text.visible = false;
            this.score6Text.visible = false;
        }

        if(6 in game.global.scores){
            this.name7Text.setText(game.global.scores[6].username + ": ");
            this.name7Text.visible = true;
            this.score7Text.setText(game.global.scores[6].score);
            this.score7Text.visible = true;
        }else{
            this.name7Text.visible = false;
            this.score7Text.visible = false;
        }

        if(7 in game.global.scores){
            this.name8Text.setText(game.global.scores[7].username + ": ");
            this.name8Text.visible = true;
            this.score8Text.setText(game.global.scores[7].score);
            this.score8Text.visible = true;
        }else{
            this.name8Text.visible = false;
            this.score8Text.visible = false;
        }

        if(8 in game.global.scores){
            this.name9Text.setText(game.global.scores[8].username + ": ");
            this.name9Text.visible = true;
            this.score9Text.setText(game.global.scores[8].score);
            this.score9Text.visible = true;
        }else{
            this.name9Text.visible = false;
            this.score9Text.visible = false;
        }

        if(9 in game.global.scores){
            this.name10Text.setText(game.global.scores[9].username + ": ");
            this.name10Text.visible = true;
            this.score10Text.setText(game.global.scores[9].score);
            this.score10Text.visible = true;
        }else{
            this.name10Text.visible = false;
            this.score10Text.visible = false;
        }
    }

    updateButtonVisibility() {
        this.loginButton.visible = game.global.user_id == -1;
        this.loginText.visible = game.global.user_id == -1;
        this.logoutButton.visible = game.global.user_id != -1;
        this.logoutText.visible = game.global.user_id != -1;
    }
}