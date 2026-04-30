<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Анкета</title>
</head>
<body>

<h2>Анкета користувача</h2>

<?php
// Функція очистки
function clean($data) {
    return htmlspecialchars(trim($data));
}

// Початкові значення
$name = $age = $gender = $about = "";
$hobbies = [];
$errors = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = clean($_POST['name']);
    $age = clean($_POST['age']);
    $gender = $_POST['gender'] ?? "";
    $about = clean($_POST['about']);
    $hobbies = $_POST['hobbies'] ?? [];

    // Перевірка віку
    if (!is_numeric($age) || $age < 10 || $age > 100) {
        $errors['age'] = "Вік має бути від 10 до 100";
    }

    // Якщо немає помилок
    if (empty($errors)) {
        echo "<p style='color:green;'>Дані успішно відправлені!</p>";
    }
}
?>

<form method="POST">

Ім'я:<br>
<input type="text" name="name" value="<?= $name ?>"><br><br>

Вік:<br>
<input type="text" name="age" value="<?= $age ?>">
<span style="color:red;"><?= $errors['age'] ?? "" ?></span><br><br>

Стать:<br>
<label><input type="radio" name="gender" value="Чоловік" <?= ($gender=="Чоловік")?"checked":"" ?>> Чоловік</label>
<label><input type="radio" name="gender" value="Жінка" <?= ($gender=="Жінка")?"checked":"" ?>> Жінка</label><br><br>

Хобі:<br>
<label><input type="checkbox" name="hobbies[]" value="Спорт" <?= in_array("Спорт", $hobbies)?"checked":"" ?>> Спорт</label>
<label><input type="checkbox" name="hobbies[]" value="Музика" <?= in_array("Музика", $hobbies)?"checked":"" ?>> Музика</label>
<label><input type="checkbox" name="hobbies[]" value="Читання" <?= in_array("Читання", $hobbies)?"checked":"" ?>> Читання</label><br><br>

Короткий опис:<br>
<textarea name="about"><?= $about ?></textarea><br><br>

<button type="submit">Надіслати</button>

</form>

</body>
</html>