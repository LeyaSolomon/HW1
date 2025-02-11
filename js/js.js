//Homework 1 
//Задача 1
let str = "abcde";

console.log(str[0]);
console.log(str[1]);
console.log(str[4]);

//Задача 2
let num1 = parseFloat(prompt("Первое число:"));
let num2 = parseFloat(prompt("Второе число:"));

if (num1 > 0 || num2 > 0) {
  console.log(true);} 
else {
  console.log(false);}

//Задача 3
let age = parseInt(prompt("Напиши свой возраст"));

if (age >= 18) {
  console.log("Совершеннолетний");} 
else {
  console.log("Несовершеннолетний");}





//Homework 2

//Задача 1
let old = parseInt(prompt("Введите ваш возраст"));
if (old < 65) {
    console.log("Вам ещё рано на пенсию");
} else {
    console.log("Поздравляем с пенсионным возрастом!");
}

//Задача 3
let n = parseInt(prompt("Напишите число"));
if (n % 2 === 0) {
    console.log("Число чётное");}
else {
    console.log("Число нечётное");}

//Задача 5
const secretNumber = 13;
const userGuess = prompt("Угадайте число от 1 до 18:");
if (userGuess == secretNumber) {
    console.log("Вы угадали!");
} else {
   console.log("Попробуйте ещё раз!");
}