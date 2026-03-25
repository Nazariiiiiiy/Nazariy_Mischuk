console.log("Завдання 4")
let students = {
    Mark: {
        math: 10,
        english: 9,
        history: 8
    },
    Nazarchik: {
        math: 12,
        english: 11,
        history: 10
    },
    Vladyk: {
        math: 7,
        english: 8,
        history: 9
    }
};

for (let name in students) {

    let grades = students[name];
    let sum = grades.math + grades.english + grades.history;
    let average = sum / 3;

    console.log(name + " - середній бал: " + average);
}

 console.log("Завдання 5")

let names = ["Mark", "Nazar", "Karina", "Anastasia"];
let result = {};

for (let i = 0; i < names.length; i++) {
    
    let name = names[i]; 
    result[name] = name.length; 
}
console.log(result);

  
