console.log('Завдання 1');

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }

}

console.log('Завдання 3');

let a = Number(prompt("Введіть число"));

for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

console.log('Завдання 4');

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
let n = parseInt(prompt("Введіть число"));
console.log("Факторіал " + n + " = " + factorial(n));

console.log('Завдання 5');

function findMinMax(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let number of arr) {
        if (number > max) max = number;
        if (number < min) min = number;
    }

    return { max: max, min: min };
}

if (!window.loaded) {

    window.loaded = true;

    let n = parseInt(prompt("Введіть кількість чисел"));
    let numbers = [];

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt("Введіть число"));
        numbers.push(num);
    }

    let result = findMinMax(numbers);

    console.log("Максимум:", result.max);
    console.log("Мінімум:", result.min);
}