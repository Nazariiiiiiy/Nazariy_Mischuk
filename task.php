<?php

//  Змінні та вивід
$name = "Nazar";
$age = 32;
$is_student = true;

echo "<h3>1. Інформація:</h3>";
echo "Мене звати $name, мені $age років. ";
echo $is_student ? "Я є студентом." : "Я не є студентом.";

echo "<hr>";


//  Масив і сума
$numbers = [1, 2, 3, 4, 5];
$sum = array_sum($numbers);

echo "<h3>2. Сума масиву:</h3>";
echo "Масив: " . implode(", ", $numbers) . "<br>";
echo "Сума: $sum";

echo "<hr>";


//  Асоціативний масив → HTML-список
$user = [
    "name" => "Nazariy",
    "email" => "email@example.com",
    "phone" => "+38077777777"
];

echo "<h3>3. Дані користувача:</h3><ul>";
foreach ($user as $key => $value) {
    echo "<li><strong>$key:</strong> $value</li>";
}
echo "</ul>";

echo "<hr>";


//  Перевірка віку
echo "<h3>4. Вік:</h3>";
echo ($age > 18) ? "Більше 18" : "18 або менше";

echo "<hr>";


//  Оцінка
$grade = 67;

echo "<h3>5. Оцінка:</h3>";

// Визначення рівня оцінки
if ($grade >= 90) {
    echo "Відмінно";
} elseif ($grade >= 70) {
    echo "Добре";
} elseif ($grade >= 50) {
    echo "Задовільно";
} else {
    echo "Незадовільно";
}

?>