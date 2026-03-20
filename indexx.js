let age = Number(prompt("Введіть ваш вік:"));

if (age < 18) {
    alert("Вам заборонено вхід");
} else if (age >= 18 && age <= 65) {
    alert("Ласкаво просимо!");
} else if (age > 65) {
    alert("Будь ласка, будьте обережні!");
} else {
    alert("Будь ласка, введіть коректний вік");
}

console.log('Завдання 2');

let n = prompt("Введіть число:");
n = Number(n);

for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('Завдання 3');

let f = Number(prompt("Введіть число:"));


let result = 1;
let i = 1;

while (i <= n) {
    result = result * i;
    i++;
}

console.log("Факторіал числа:", result);

console.log('Завдання 4');

let a = Number(promt('Ведіть перше число'));
let b = Number(promt('Ведіть друге число'));
let operation = promt('Ведіть операцію + - / *');
 
let = result2;

switch (operation) {
    case "+":
        resul2 = a + b;
        break
    case "-":
        resul2 = a - b;
        break
    case "*":
        resul2 = a * b; 
        break
    case "/":
        if (b === 0) {
            alert("Ділити на 0 не можна ");
            break
        }
            resul2 = a / b;
            break
            default:
                alert("Невідома операція");
}
 if (result2 !== undefined) {
    alert("Результат: + result2");
 }

 console.log("Завдання 5");

 let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = Number(prompt("Вгадайте число від 1 до 100:"));

    if (guess < randomNumber) {
        alert("Загадане число більше");
    } else if (guess > randomNumber) {
        alert("Загадане число менше");
    } else {
        alert("Вітаємо! Ви вгадали число!");
    }

} while (guess !== randomNumber);