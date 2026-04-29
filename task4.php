<!DOCTYPE html>
<html>
<body>

<form method="post">
<input type="text" name="name" placeholder="Назва категорії">
<button>Шукати</button>
</form>

<?php

$tree = [
    "Техніка" => [
        "Комп’ютери" => [
            "Ноутбуки",
            "ПК"
        ],
        "Телефони" => [
            "Смартфони",
            "Кнопкові"
        ]
    ],
    "Одяг" => [
        "Чоловічий",
        "Жіночий"
    ]
];


function logNode($node){
    echo "Перевірка: ".$node."<br>";
}

function findCategory($tree,$name,$callback){

    foreach($tree as $key=>$value){

        if(is_string($key)){
            $callback($key);

            if($key==$name){
                return true;
            }
        }

        if(is_string($value)){
            $callback($value);

            if($value==$name){
                return true;
            }
        }

        if(is_array($value)){
            if(findCategory($value,$name,$callback)){
                return true;
            }
        }
    }

    return false;
}

if(isset($_POST["name"])){

    $search=$_POST["name"];

    if(findCategory($tree,$search,"logNode")){
        echo "<b>Знайдено!</b>";
    }else{
        echo "<b>Не знайдено</b>";
    }

}

?>

</body>
</html>