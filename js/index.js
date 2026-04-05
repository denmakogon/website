// Лабораторна 2.2 - JavaScript сценарії
// Реалізація всіх пунктів завдання з коментарями

// 1. Оголошення змінних різних типів даних та використання typeof
console.log("=== 1. Оголошення змінних та typeof ===");

// number
var num = 42;
console.log("num:", num, "typeof:", typeof num);

// string
var str = "Привіт, світ!";
console.log("str:", str, "typeof:", typeof str);

// boolean
var bool = true;
console.log("bool:", bool, "typeof:", typeof bool);

// null
var nul = null;
console.log("nul:", nul, "typeof:", typeof nul);

// undefined
var undef;
console.log("undef:", undef, "typeof:", typeof undef);

// NaN
var nan = NaN;
console.log("nan:", nan, "typeof:", typeof nan);

// object
var obj = {key: "value"};
console.log("obj:", obj, "typeof:", typeof obj);

// symbol (якщо підтримується)
if (typeof Symbol !== 'undefined') {
    var sym = Symbol("test");
    console.log("sym:", sym, "typeof:", typeof sym);
}

// 2. Організація виразів за допомогою операцій
console.log("\n=== 2. Вирази з операціями ===");

// Арифметичні
var a = 10, b = 3;
console.log("Арифметичні:", a + b, a - b, a * b, a / b, a % b, a ** b);

// Логічні
var x = true, y = false;
console.log("Логічні:", x && y, x || y, !x);

// Порівняння
console.log("Порівняння:", a > b, a < b, a >= b, a <= b, a == b, a === b, a != b, a !== b);

// Тернарний оператор
var ternary = a > b ? "більше" : "менше";
console.log("Тернарний:", ternary);

// 3. Застосування операторів управління логікою
console.log("\n=== 3. Оператори управління логікою ===");

// if, if...else
if (a > b) {
    console.log("if: a більше b");
} else {
    console.log("else: a не більше b");
}

// for
console.log("for:");
for (var i = 0; i < 3; i++) {
    console.log("  ітерація", i);
}

// while
console.log("while:");
var j = 0;
while (j < 3) {
    console.log("  ітерація", j);
    j++;
}

// do..while
console.log("do..while:");
var k = 0;
do {
    console.log("  ітерація", k);
    k++;
} while (k < 3);

// switch
console.log("switch:");
var day = 1;
switch (day) {
    case 1:
        console.log("  Понеділок");
        break;
    case 2:
        console.log("  Вівторок");
        break;
    default:
        console.log("  Інший день");
}

// for..in (для об'єкта)
console.log("for..in:");
var person = {name: "Олександр", age: 25};
for (var key in person) {
    console.log("  " + key + ":", person[key]);
}

// function (оголошення функції)
function greet(name) {
    return "Привіт, " + name + "!";
}
console.log("function:", greet("Денис"));



// new (створення об'єкта)
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var p = new Person("Марія", 30);
console.log("new:", p);

// var (оголошення змінної, вже використовувалося вище)

// 4. Організація масивів та їх методи
console.log("\n=== 4. Масиви та їх методи ===");

// Різні способи створення масивів
var arr1 = [1, 2, 3]; // літерал
var arr2 = new Array(4, 5, 6); // конструктор
var arr3 = Array.of(7, 8, 9); // Array.of
var arr4 = Array.from("hello"); // Array.from

console.log("Масиви:", arr1, arr2, arr3, arr4);

// Властивості та методи
console.log("length:", arr1.length);
console.log("join:", arr1.join("-"));
console.log("reverse:", arr1.reverse()); // змінює оригінал
arr1.reverse(); // повертаємо назад
console.log("sort:", [3, 1, 2].sort());
console.log("concat:", arr1.concat(arr2));
console.log("pop:", arr1.pop(), "масив після pop:", arr1);
console.log("push:", arr1.push(4), "масив після push:", arr1);
console.log("shift:", arr1.shift(), "масив після shift:", arr1);
console.log("unshift:", arr1.unshift(0), "масив після unshift:", arr1);
console.log("slice:", arr1.slice(1, 3));


// 5. Оформлення функцій різних типів
console.log("\n=== 5. Функції різних типів ===");

// Function Declaration
function declarationFunc(param) {
    return "Declaration: " + param;
}
console.log(declarationFunc("тест"));

// Function Expression
var expressionFunc = function(param) {
    return "Expression: " + param;
};
console.log(expressionFunc("тест"));

// Анонімна функція
var anonFunc = function() {
    return "Анонімна функція";
};
console.log(anonFunc());

// 6. Введення та виведення інформації
console.log("\n=== 6. Введення та виведення ===");

// console.log (вже використовувалося вище)
console.log("console.log: Вивід у консоль");

// alert (коментар: викликає модальне вікно, може блокувати)
// alert("alert: Це повідомлення");

// prompt (коментар: запитує введення, повертає рядок або null)
// var userInput = prompt("prompt: Введіть щось:");
// console.log("Введено:", userInput);

// confirm (коментар: запитує підтвердження, повертає true/false)
// var confirmed = confirm("confirm: Підтвердіть дію:");
// console.log("Підтверджено:", confirmed);

console.log("=== Кінець лабораторної 2.2 ===");