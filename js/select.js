var sprite;
var title;

select = {
    create: function(){
        sprite = game.add.sprite(game.world.centerX, game.world.centerX, 'grass');
        sprite.scale.set(1);
        sprite.anchor.set(0.5);
        sprite.smoothed = false;

        var filter = new PIXI.ColorMatrixFilter();
        filter.matrix = [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1];
        sprite.filters = [filter];

        var style = {
            font: 'bold 20pt Arial',
            fill: 'rgb(85,85,85)'
        };
        title = game.add.text(148, 258, "Testing...", style);
        title.anchor.set(0);
    },
    update: function(){

    },
    onButtonClick: function(button, pointer, isOver){
        if(isOver){
            game.state.start("Game");
		}
    }
}