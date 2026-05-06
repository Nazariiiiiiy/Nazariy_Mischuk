<?php
session_start();

if (!isset($_SESSION['name'])) {
    header("Location: register.php");
    exit();
}

// Очистити тільки сесію
if (isset($_POST['clear_session'])) {
    session_unset();
    header("Location: index.php");
    exit();
}

// Очистити тільки cookie
if (isset($_POST['clear_cookie'])) {
    setcookie("email", "", time() - 1);
    header("Location: profile.php");
    exit();
}
?>

<h3>Профіль</h3>

Ім'я: <?= $_SESSION['name'] ?><br>
Email: <?= $_SESSION['email'] ?><br><br>

<?php
if (isset($_COOKIE['email'])) {
    echo "Ваш email запам'ятали: " . $_COOKIE['email'];
}
?>

<br><br>

<form method="post">
    <button name="clear_session">Очистити сесію</button>
    <button name="clear_cookie">Очистити cookie</button>
</form>

<br>
<a href="logout.php">Вийти (все очистити)</a>