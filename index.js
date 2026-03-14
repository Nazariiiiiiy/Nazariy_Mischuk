console.log("Завдання 1")
let integerNumber = 10;       
let floatNumber = 5.7;        
let text = "Привіт";           
let isStudent = true;         

console.log(typeof integerNumber);
console.log(typeof floatNumber);
console.log(typeof text);
console.log(typeof isStudent);

integerNumber = "10";
console.log(integerNumber, typeof integerNumber);

floatNumber = "5.7";
console.log(floatNumber, typeof floatNumber);

let sum = 5 + "5"; 
console.log(sum); 

let boolToNumber = Number(true);
console.log(boolToNumber);

let boolFalse = Number(false);
console.log(boolFalse);

let person = {
    name: "Назарій",
    age: 17,
    isStudent: true,
    height: 1.75
};
console.log(JSON.stringify(person));

console.log("Завдання 2")

let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));
let c = Number(prompt("Введіть третє число"));

let average = (a + b + c) / 3;
console.log("Середнє:", average);

console.log("Модуль a:", Math.abs(a));


console.log("В більшу сторону:", Math.ceil(b));
console.log("В меншу сторону:", Math.floor(b));


console.log("a в степені b:", Math.pow(a, b));


console.log("Ділиться на 5:", average % 5 === 0);
console.log("Ділиться на 7:", average % 7 === 0);

if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник може існувати");
} else {
    console.log("Трикутник не може існувати");
}

console.log("Завдання 3")

let x = Number(prompt("Введіть число x"));
let y = Number(prompt("Введіть число y"));
let z = Number(prompt("Введіть число z"));


let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log("Найбільше:", max);
console.log("Найменше:", min);

let hasEven = (x % 2 === 0) || (y % 2 === 0) || (z % 2 === 0);
console.log("Є хоча б одне парне:", hasEven);

let condition = (x > y) && (y < z);
console.log("Результат умови:", condition);


let num = Number(prompt("Введіть число для перевірки"));
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log("Число просте:", isPrime);

console.log("Завдання 4")

let name = prompt("Введіть ваше ім'я");
let birthYear = Number(prompt("Введіть рік народження"));
let city = prompt("Введіть місто");
let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Місто:", city);

if (age < 12) {
    console.log("Ви дитина");
} else if (age < 18) {
    console.log("Ви підліток");
} else if (age < 60) {
    console.log("Ви дорослий");
} else {
    console.log("Ви літня людина");
}
let capital = "Kyiv";
if (city.toLowerCase() === capital.toLowerCase()) {
    console.log("Це столиця України");
} else {
    console.log("Це не столиця");
}
