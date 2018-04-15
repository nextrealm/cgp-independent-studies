function getScore(userId){
    $.ajax({
        url: './highscores.php',
        type: 'GET',
        data: {
            'method': 'get',
            'user_id': userId,
        },
        dataType: 'json',
        success: function(data){
            if(typeof(data.error) != "undefined" && data.error != 0){
                console.log(data.error);
            }else{
                game.global.score = data.score;
            }
        }
    });
}

function submitScore(userId, score){
    $.ajax({
        url: './highscores.php',
        type: 'GET',
        data: {
            'method': 'submit',
            'user_id': userId,
            'score': score,
        },
        dataType: 'json',
        success: function(data){
            if(typeof(data.error) != "undefined" && data.error != 0){
                console.log(data.error);
            }
        }
    });
}

function fetchScores(){
    $.ajax({
        url: './highscores.php',
        type: 'GET',
        data: {
            'method': 'fetch',
        },
        dataType: 'json',
        success: function(data){
            if(typeof(data.error) != "undefined" && data.error != 0){
                console.log(data.error);
            }else{
                game.global.scores = data;
            }
        }
    });
}