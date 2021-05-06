/* Zwróć sumę dwóch liczb */
function addition(num1, num2) {
  console.log("wynik dodawania dwóch liczb = " + (num1 + num2));
  return num1 + num2;
}
addition(5, 2);

/* Zamień minuty na sekundy */
function convert(minuty) {
  console.log(minuty + " minut to " + minuty * 60 + " sekund");
  return minuty * 60;
}
convert(5);

// godziny na sekundy
function convert(godzina) {
  console.log(godzina * 60 * 60)
  return godzina * 60 * 60;
}
convert(1);

/* Zwróć następną liczbę z podanej liczby */
function dodaj(number) {
  console.log(++number);
  return ++number;
}
dodaj(23);

/* Napisz funkcję, która przyjmuje podstawę i wysokość trójkąta oraz zwóci pole. */
function triArea(a1, a2) {
  console.log((a1 * a2) / 2);
}
triArea(5, 4);

/* Utwórz funkcję pobierającą wiek i zwracającą wiek w dniach. */
function calcAge(age) {
  console.log(
    "Jeśli masz " + age + " lat " + "to żyjesz już " + age * 365 + " dni"
  );
  return age * 365;
}
calcAge(10);

/* mnożenie */
function multiplyTwoNumbers(num1, num2) {
  console.log(num1 * num2);
  return num1 * num2;
}
multiplyTwoNumbers(5, 5);

/* potęgowanie */
function cubes(a) {
  console.log(a ** 2);
  return a ** 2;
}
cubes(5);

/* Utwórz funkcję, która przyjmuje tablicę i zwraca pierwszy element. */

function firstTab(one) {
  console.log(one);
  return tablicaNowa[0];
}
const tablicaNowa = ["a", 1, "b"];

tablicaNowa.push("nowy element");

const tabOne = firstTab(tablicaNowa);
console.log("pierwszy element tablicy to " + tabOne);

/* Utworzyć funkcję, która pobiera voltagei currenti zwraca obliczoną moc .
  
   */
function power(
  a,
  b
) {
  console.log(a * b);
  return a * b;
}
power(230, 10);

/* Napisz funkcję, która konwertuje godz na sek. */

function howManySeconds(hours) {
  console.log(hours * 60 * 60);
  return hours * 60 * 60;
}
howManySeconds(5);

/* Utwórz funkcję obliczającą powierzchnię prostokąta. Jeśli argumenty są nieprawidłowe, funkcja musi zwrócić -1. */

function area(height, weight) {
  if (height <= 1 || weight <= 1) {
    console.log(
      " height lub weight jest mniejsze lub równe 1 " +
      "wynik = " +
      height * weight
    );
    return height * weight;
  } else {
    console.log(
      "height lub weight jest większe niż: 1 " +
      "height * weight = " +
      height * weight
    );
    return height * weight;
  }
}
area(2, 2);

/* Liczysz punkty za mecz koszykówki, biorąc pod uwagę liczbę zdobytych 2 i 3 punktów, znajdujesz końcowe punkty dla drużyny i zwracasz tę wartość. */

function basketball(two, three) {
  console.log(two * 2 + three * 3);
  return two * 2 + three * 3;
}
basketball(3, 4);

/* Biorąc pod uwagę dwie liczby, zwróć, truejeśli suma obu liczb jest mniejsza niż 100. W przeciwnym razie powróć false. */

function lessThan100(a, b) {
  if (a + b < 100) {
    console.log(true);
    return true;
  } else {
    console.log(false);
  }
}
lessThan100(90, 5);

/* Utwórz funkcję, która zwraca truekiedy num1jest równe num2; w przeciwnym razie wróć false. */

function same(num1, num2) {
  console.log(num1 === num2);
  return num1 === num2;
}
same(3, 2);

/* Suma kątów wielokątów */

function sumaKątów(a) {
  console.log((a - 2) * 180);
  let sum = (a - 2) * 180;
  return sum;
}
sumaKątów(10);

/* parzysta czu nieparzysta */
function czyParzysta(liczba) {
  if (liczba % 2 == 0) {
    alert("Liczba " + liczba + " jest parzysta");
    return true;
  } else {
    alert("Liczba " + liczba + " jest nieparzysta");
    return false;
  }
}
let wynik = czyParzysta(3);
console.log(wynik);