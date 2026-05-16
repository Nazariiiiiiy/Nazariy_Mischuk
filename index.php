<?php

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

$request = $_SERVER['REQUEST_URI'];

$request = explode('/', trim($request, '/'));

$users = json_decode(file_get_contents('users.json'), true);


if ($method == 'GET') {

    if (isset($request[1]) && $request[1] == 'users' && !isset($request[2])) {

        echo json_encode($users);
    }

    elseif (isset($request[2])) {

        $id = $request[2];

        foreach ($users as $user) {
            if ($user['id'] == $id) {
                echo json_encode($user);
                exit;
            }
        }

        echo json_encode(["message" => "Користувача не знайдено"]);
    }
}


elseif ($method == 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);

    $newUser = [
        "id" => count($users) + 1,
        "name" => $data['name'],
        "email" => $data['email']
    ];

    $users[] = $newUser;

    file_put_contents('users.json', json_encode($users, JSON_PRETTY_PRINT));

    echo json_encode([
        "message" => "Користувача додано",
        "user" => $newUser
    ]);
}


elseif ($method == 'PUT') {

    $id = $request[2];

    $data = json_decode(file_get_contents("php://input"), true);

    foreach ($users as &$user) {

        if ($user['id'] == $id) {

            if (isset($data['name'])) {
                $user['name'] = $data['name'];
            }

            if (isset($data['email'])) {
                $user['email'] = $data['email'];
            }

            file_put_contents('users.json', json_encode($users, JSON_PRETTY_PRINT));

            echo json_encode([
                "message" => "Користувача оновлено",
                "user" => $user
            ]);

            exit;
        }
    }

    echo json_encode(["message" => "Користувача не знайдено"]);
}


elseif ($method == 'DELETE') {

    $id = $request[2];

    foreach ($users as $key => $user) {

        if ($user['id'] == $id) {

            unset($users[$key]);

            file_put_contents('users.json', json_encode(array_values($users), JSON_PRETTY_PRINT));

            echo json_encode([
                "message" => "Користувача видалено"
            ]);

            exit;
        }
    }

    echo json_encode(["message" => "Користувача не знайдено"]);
}

?>