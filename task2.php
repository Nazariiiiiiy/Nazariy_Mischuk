<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Генератор паролів</title>

    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            color: #e2e8f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.4);
            width: 320px;
        }

        h1 {
            font-size: 20px;
            margin-bottom: 20px;
            text-align: center;
        }

        label {
            font-size: 14px;
        }

        input {
            width: 100%;
            padding: 8px;
            border-radius: 8px;
            border: none;
            margin-top: 5px;
            margin-bottom: 15px;
            background: #0f172a;
            color: #e2e8f0;
        }

        button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(135deg, #22c55e, #4ade80);
            color: #022c22;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(34,197,94,0.4);
        }

        .pass {
            margin-top: 10px;
            padding: 8px;
            background: #020617;
            border-radius: 8px;
            font-family: monospace;
            letter-spacing: 1px;
            word-break: break-all;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Генератор безпечних паролів</h1>

    <form method="post">
        <label>Кількість паролів:</label>
        <input type="number" name="count" required>

        <label>Довжина пароля:</label>
        <input type="number" name="length" required>

        <button type="submit">Створити</button>
    </form>

    <?php
    function generatePassword($length, $callback) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        
        while (true) {
            $password = "";
            
            for ($i = 0; $i < $length; $i++) {
                $password .= $chars[rand(0, strlen($chars) - 1)];
            }
            
            if ($callback($password)) {
                return $password;
            }
        }
    }

    function isStrongPassword($password) {
        if (strlen($password) < 8 ) return false;
        if (!preg_match("/[A-Z]/", $password)) return false;
        if (!preg_match("/[0-9]/", $password)) return false;
        return true;
    }

    if (isset($_POST["count"]) && isset($_POST["length"])) {
        $count = (int)$_POST["count"];
        $length = (int)$_POST["length"];

        for ($i = 0; $i < $count; $i++) {
            $p = generatePassword($length, "isStrongPassword");
            echo "<div class='pass'>$p</div>";
        }
    }
    ?>
</div>

</body>
</html>