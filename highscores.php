<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    $method = $_POST['method'];
    $user_id = $_POST['user_id'];
    switch($method){
        case 'submit':
            $score = $_POST['score'];
            submit($user_id, $score);
            exit;
            break;
        case 'get':
            $data = get($user_id);
            echo json_encode($data);
            exit;
            break;
        case 'fetch':
            $data = fetch();
            echo json_encode($data);
            exit;
            break;
    }
} else {
    $method = $_GET['method'];
    $user_id = $_GET['user_id'];
    switch($method){
        case 'submit':
            $score = $_GET['score'];
            submit($user_id, $score);
            exit;
            break;
        case 'get':
            $data = get($user_id);
            echo json_encode($data);
            exit;
            break;
        case 'fetch':
            $data = fetch();
            echo json_encode($data);
            exit;
            break;
    }
}

function connect(){
    $credentials = [
        'host' => 'localhost',
        'database' => 'benmurra_farm-facts',
        'username' => 'benmurra_yii',
        'password' => 't3u7EyUdaJ'
    ];
    $mysqli = new mysqli($credentials['host'], $credentials['username'], $credentials['password'], $credentials['database']);

    if ($mysqli->connect_errno) {
        echo '$mysqli->connect_errno: ' . $mysqli->connect_errno . "\n";
        echo '$mysqli->connect_error: ' . $mysqli->connect_error . "\n";
        exit;
    }

    return $mysqli;
}

function disconnect($mysqli) {
    $mysqli->close();
}

function register($username, $password) {
    $mysqli = connect();

    $statement = $mysqli->stmt_init();
    if ($statement->prepare("INSERT INTO users (username, password, created) VALUES (?, ?, ?);")) {
        $datetime = date("Y-m-d H:i:s", time());
        $statement->bind_param("sss", $username, $password, $datetime);
        $statement->execute();
        $statement->close();
    }else{
        echo $mysqli->error;
        exit;
    }

    disconnect($mysqli);
}

function login($username, $password) {
    $mysqli = connect();

    $sql = "SELECT id FROM users WHERE username = $username AND password = $password;";

    if (!$result = $mysqli->query($sql)) {
        $error = ["error" => 1, "message" => "Error"];
        disconnect($mysqli);
        return $error;
    }

    if ($result->num_rows === 0) {
        $error = ["error" => 2, "message" => "Not found"];
        disconnect($mysqli);
        return $error;
    }

    $data = $result->fetch_assoc();
    $result->free();

    disconnect($mysqli);

    return ["success"=>true, "id"=>$data['id']];
}

function submit($userId, $score) {
    $mysqli = connect();

    $statement = $mysqli->prepare("INSERT INTO scores (user_id, score) VALUES (?, ?);");
    $statement->bind_param("ii", $userId, $score);
    $statement->execute();
    $statement->close();

    disconnect($mysqli);
}

function get($userId) {
    $mysqli = connect();

    $sql = "SELECT username, score FROM scores LEFT JOIN users ON users.id=scores.user_id WHERE user_id = $user_id;";

    if (!$result = $mysqli->query($sql)) {
        echo "No result!";
        exit;
    }

    if ($result->num_rows === 0) {
        echo "Empty result!";
        exit;
    }

    $data = $result->fetch_assoc();
    $result->free();

    disconnect($mysqli);

    return $data;
}

function fetch() {
    $mysqli = connect();

    $sql = "SELECT username, score FROM scores LEFT JOIN users ON users.id=scores.user_id ORDER BY score DESC LIMIT 10;";

    if (!$result = $mysqli->query($sql)) {
        //echo "No result!";
        $result->free();
        return [];
    }

    if ($result->num_rows === 0) {
        //echo "Empty result!";
        $result->free();
        return [];
    }

    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    $result->free();

    disconnect($mysqli);

    return $data;
}