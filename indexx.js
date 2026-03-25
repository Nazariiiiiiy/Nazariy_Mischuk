console.log("Завдання 1")

const numbers = [7777777777777777, 52, 77,  77777,7];

const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;


const min = Math.min(...numbers);
const max = Math.max(...numbers);


const sorted = [...numbers].sort((a, b) => a - b);

console.log("Масив:", numbers);
console.log("Середнє:", average);
console.log("Мінімум:", min);
console.log("Максимум:", max);
console.log("Відсортований:", sorted);

console.log("Завдання 2")

const users = [
  { name: "Nazar", age: 18 },
  { name: "Karina", age: 17 },
  { name: "Vlad", age: 27 }
];

const adults = users.filter(user => user.age >= 18);

const names = users.map(user => user.name);

const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("Повнолітні:", adults);
console.log("Імена:", names);
console.log("Середній вік:", avgAge);

console.log("Завдання 3")

const products = [
  { name: "Кудрик", category: "Людина" },
  { name: "Пепсі", category: "нАпій"},
  { name: "Гумка жувальна", category: "Їжа" }
];

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product.name);
  return acc;
}, {});

console.log("Групи:", grouped);


