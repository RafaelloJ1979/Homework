/* zad.1:a,b,c,d,e */
let name = "Karol";
let age = 40;
let isOpen = true;
let stringBoolean = true;
let stringNumber = 100;

/* zad.2: a,b,c,d*/
console.log("Michał");
console.log("Hello Borys");
console.log(4);
console.log(false);

/* zad.3*/
console.log(name);
console.log(age);
console.log(isOpen);
console.log(stringBoolean);
console.log(stringNumber);

/* zad.4: */
console.log(2 + 2);
console.log("Micha " + "Kowalski");
console.log(2 + 2 * 2);

/* zad.5: */
let number = 2 + 2;
console.log("wynik " + number);

/* zad.6: */
let numTwo = 1;
num1 = 2;
num1 = 3;
console.log(num1);

/* zad.7: */

/* a */
function NumberOne() {
  console.log(2 + 2);
  return 2 + 2;
}
NumberOne();

/* b */
function textNew() {
  return " Hello World";
}
textNew();

/* c */
function booleanAgain() {
  return true;
}
booleanAgain();

/* d */
function divisionOne() {
  return 6 % 4;
}
divisionOne();

/* e */
function exponentiationNew() {
  return 3 ** 4;
}
exponentiationNew();

/* f */
function stringReturn() {
  return "Hello " + "How are you";
}
stringReturn();

/* g */
function multiplicationNew() {
  return 5 * 60;
}
multiplicationNew();

/* h */
function multiplication() {
  return 3 * 3600;
}
multiplication();

/* i */
function action() {
  return (10 * 9) / 2;
}
action();

/* j */
function subtraction() {
  return 10 - 200;
}
subtraction();

/* zad: 10 */
/* a */
function sumFirst(a, b) {
  console.log(a + b);
  return a + b;
}
sumFirst(2, 2);

/* b */
function textFirst(txt1, txt2) {
  console.log(txt1 + txt2);
  return txt1 + txt2;
}
textFirst("Hello ", "World");

/* c */
function booleanOne(Bool) {
  console.log(Bool);
  return Bool;
}
booleanOne(true);

/* d */
function divisionFirst() {
  return 6 % 4;
}
divisionFirst();
/* e */
function exponentiationAgain() {
  return 3 ** 4;
}
exponentiationAgain();

/* f */
function stringReturnAgain() {
  return "Hello " + " How are you";
}
stringReturnAgain();

/* zad: 8 */

/* a */
const tabA = [1, 2, 3];

/* b */
const tabB = ["AUDI", "BMW", "OPEL", "LAMBO", "FIAT"];

/* c */
const tabC = [true, false, true];

/* d */
const tabD = [];

/* e */
const tabE = ["string", 55, true, null, undefined];

/* f */
console.log(tabE[1]);

/* g */
const tabF = [1, 2, "name", 4, true];
console.log(tabF.length);
/* h */
const tabG = [];
tabG.push("nowy element 1", "nowy element 2");
console.log(tabG);

/* zad: 9 */

/* a */
const obiektA = {};

/* b */
const person = {
  name: "Iza",
};

/* c */
const personDetails = {
  name: "Adam",
  lastName: "Kowalski",
  age: "25",
  drivingLicence: true,
};

/* d */
console.log(personDetails.age);

/* e */
console.log(personDetails);

/* zad: 10 */

/* a */
function sum(a, b) {
  console.log(a + b);
  return a + b;
}
sum(2, 2);

/* b */
function text(txt1, txt2) {
  console.log(txt1 + txt2);
  return txt1 + txt2;
}
text("Hello ", "World");

/* c */
function boolean(Bool) {
  console.log(Bool);
  return Bool;
}
boolean(true);

/* d */
function division2(div1, div2) {
  console.log(div1 % div2);
  return div1 % div2;
}
division2(6, 4);

/* e */
function exponentiation(n1, n2) {
  console.log(n1 ** n2);
  return n1 ** n2;
}
exponentiation(3, 4);

/* f */
function stringReturn(textOne, textTwo) {
  console.log(textOne + textTwo);
  return textOne + textTwo;
}
stringReturn("Praca ", "Domowa");

/* g */
function time(min) {
  console.log(min * 60);
  return min * 60;
}
time(3);

/* h */
function timeHour(hour) {
  console.log(hour * 60 * 60);
  return hour * 60 * 60;
}
timeHour(1);

/* i */
function triArea(a, b) {
  console.log(a * b * 0.5);
  return a * b * 0.5;
}
triArea(5, 5);

/* j */
function years(year) {
  console.log(year * 365);
  return year * 365;
}
years(5);

/* k */
function power(num1) {
  console.log(num1 ** num1);
  return num1 ** num1;
}
power(4);

/* L */
function TriAreaAdd(side1, side2) {
  console.log(side1 + side2 - 1);
  return side1 + side2 - 1;
}
TriAreaAdd(5, 5);

/* m */
function seyHelloName(firstName) {
  console.log("Cześć " + firstName);
  return "Cześć " + firstName;
}
seyHelloName("Iza");

/* n */
function yourAge(age) {
  console.log(2021 - age);
  return 2021 - age;
}
yourAge(1979);

/* o */
function basket(two, three) {
  console.log(two * 2 + three * 3);
}
basket(3, 3);
