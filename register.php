<?php
session_start();

if ($_POST) {
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['email'] = $_POST['email'];

    setcookie("email", $_POST['email'], time() + 604800);

    header("Location: profile.php");
    exit();
}
?>

<form method="post">
    <input name="name" placeholder="Ім'я" required><br>
    <input name="email" placeholder="Email" required><br>
    <input name="password" placeholder="Пароль" required><br>
    <button>Зареєструватись</button>
</form>