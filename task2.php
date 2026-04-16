<?php

//  Арифметика
$a = 6;
$b = 7;

echo "<h3>1. Арифметика:</h3>";
echo "Сума: " . ($a + $b) . "<br>";
echo "Різниця: " . ($a - $b) . "<br>";
echo "Добуток: " . ($a * $b) . "<br>";
echo "Ділення: " . ($a / $b);

echo "<hr>";


//  Дні тижня
$days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

echo "<h3>2. Дні:</h3>";
echo "4-й день: $days[3]<br>";
echo "5-й день: $days[4]";

echo "<hr>";


//  Товари
$products = [
    "Phone" => 676767,
    "Laptop" => 555555,
    "Tablet" => 15515
];

echo "<h3>3. Товари:</h3>";
foreach ($products as $name => $price) {
    echo "$name: $price грн<br>";
}

echo "<hr>";


//  Switch
$day = "Monday";

echo "<h3>4. День:</h3>";
switch ($day) {
    case "Monday":
        echo "Початок тижня";
        break;
    case "Friday":
        echo "Майже вихідні";
        break;
    default:
        echo "Звичайний день";
}

echo "<hr>";


//  Парне / непарне
$x = 15;

echo "<h3>5. Число:</h3>";
echo ($x % 2 == 0) ? "Парне" : "Непарне";

?>