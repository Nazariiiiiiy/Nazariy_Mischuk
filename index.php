<?php
session_start();

if (isset($_SESSION['name'])) {
    header("Location: profile.php");
} else {
    header("Location: register.php");
}
exit();