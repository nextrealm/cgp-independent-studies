/*$(function(){
});*/

function showLogin(){
    $("#modal").show();
    $("#modal-login").show();
    $("#modal-register").hide();
    $("#loginAlert").html("");
    $("#loginAlert").hide();
}

function showRegister(){
    $("#modal").show();
    $("#modal-login").hide();
    $("#modal-register").show();
    $("#registerAlert").html("");
    $("#registerAlert").hide();
}

function hideModals() {
    $("#modal").hide();
    $("#modal-login").hide();
    $("#modal-register").hide();
    $("#loginAlert").html("");
    $("#loginAlert").hide();
    $("#registerAlert").html("");
    $("#registerAlert").hide();
}

$("#modal-close").on("click", function(e){
    $("#modal").hide();
});

$("#login").on("submit", function(e){
    e.preventDefault();
    console.log("submit");
    var username = $("#loginUsername").val();
    console.log("username: " + username);
    var password = $("#loginPassword").val();
    console.log("password: " + password);
    $.ajax({
        url: './highscores.php',
        type: 'GET',
        data: {
            'method': 'login',
            'username': username,
            'password': password,
        },
        dataType: 'json',
        success: function(data){
            if(typeof(data.error) != "undefined" && data.error != 0){
                console.log(data.error);
                $("#loginAlert").html(data.message);
                $("#loginAlert").show();
            }else{
                game.global.user_id = data.id;
                hideModals();
                onLogin();
            }
        }
    });
});

$("#register").on("submit", function(e){
    e.preventDefault();
    console.log("submit");
    var username = $("#registerUsername").val();
    console.log("username: " + username);
    var password = $("#registerPassword").val();
    console.log("password: " + password);
    $.ajax({
        url: './highscores.php',
        type: 'GET',
        data: {
            'method': 'register',
            'username': username,
            'password': password,
        },
        dataType: 'json',
        success: function(data){
            if(typeof(data.error) != "undefined" && data.error != 0){
                console.log(data.error);
                $("#registerAlert").html(data.message);
                $("#registerAlert").show();
            }else{
                game.global.user_id = data.id;
                hideModals();
                onLogin();
            }
        }
    });
});