var sprite;
var text;

farmFactsGame = {
    create: function(){
        sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        sprite.scale.set(1);
        sprite.anchor.set(0.5);
        sprite.smoothed = false;
        //sprite.inputEnabled = true;

        var style = {
            font: 'bold 20pt Arial',
            fill: 'rgb(85,85,85)'
        };
        text = game.add.text(sprite.x, sprite.y - 10, 'Test', style);
        text.align = 'center';
        text.anchor.set(0.5);
    },
    update: function(){
        
    },
    onButtonClick: function(button, pointer, isOver) {
        if(isOver) {
            game.global.clicked = true;
            game.user.save();
            game.state.start("Select");
        }
    }
}