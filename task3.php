<?php

//  Вартість товарів
$p1 = 667;
$p2 = 666;
$p3 = 777;

$total = $p1 + $p2 + $p3;

echo "<h3>1. Сума покупки:</h3>";
echo "Загальна сума: $total грн";

echo "<hr>";


//  Фільми
$films = ["Niger", "Slyzhycia", "RAb", "FAST", "Pios"];

echo "<h3>2. Фільми:</h3>";
foreach ($films as $film) {
    echo "$film<br>";
}

echo "<hr>";


//  Користувач
$user = [
    "login" => "nagibator3000",
    "password" => "2009",
    "email" => "none@mail.com"
];

echo "<h3>3. Дані:</h3>";
foreach ($user as $key => $value) {
    echo "$key: $value<br>";
}

echo "<hr>";


// Знижка
if ($total > 500) {
    $discount = $total * 0.10;
    $final = $total - $discount;
} else {
    $final = $total;
}

echo "<h3>4. Підсумок:</h3>";
echo "До оплати: $final грн";

echo "<hr>";


//  Авторизація
$input_login = "nagibator3000";
$input_password = "2009";

echo "<h3>5. Вхід:</h3>";
if ($input_login === $user["login"] && $input_password === $user["password"]) {
    echo "Успішний вхід";
} else {
    echo "Невірні дані";
}

?>