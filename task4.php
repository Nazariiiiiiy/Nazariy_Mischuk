<?php

//  Мін і макс
$a = 7;
$b = 6;

echo "<h3>1. Мін/Макс:</h3>";
echo "Макс: " . (($a > $b) ? $a : $b) . "<br>";
echo "Мін: " . (($a < $b) ? $a : $b);

echo "<hr>";


//  Середнє
$numbers = [2, 4, 6, 8, 10];
$avg = array_sum($numbers) / count($numbers);

echo "<h3>2. Середнє:</h3>";
echo $avg;

echo "<hr>";


//  Студенти
$students = [
    "Vlad" => 85,
    "Karina" => 75,
    "nazar" => 90
];

echo "<h3>3. >80:</h3>";
foreach ($students as $name => $grade) {
    if ($grade > 80) {
        echo "$name: $grade<br>";
    }
}

echo "<hr>";


//  Кратність
$num = 12;

echo "<h3>4. Кратність:</h3>";
if ($num % 3 == 0 || $num % 5 == 0) {
    echo "Кратне 3 або 5";
} else {
    echo "Не кратне";
}

echo "<hr>";


//  Таблиця множення
echo "<h3>5. Таблиця:</h3>";
for ($i = 1; $i <= 10; $i++) {
    echo "7 x $i = " . (7 * $i) . "<br>";
}

?>