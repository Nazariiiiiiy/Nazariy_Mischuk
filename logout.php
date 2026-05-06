<?php
session_start();

session_destroy();
setcookie("email", "", time() - 1);

header("Location: index.php");
exit();