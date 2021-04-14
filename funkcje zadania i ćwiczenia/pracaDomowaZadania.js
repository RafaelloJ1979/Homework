// Napisz funkcje (typy proste):
/*    a) zwracającą sumę trzech liczb podanych w parametrach funkcji, */

function addNumber(num1, num2, num3) {

  console.log(num1 + num2 + num3)

  return num1 + num2 + num3
}
const addThreNumber = addNumber
addThreNumber(5, 10, 15)
-------------------------------------------------------
/*  b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci
     'Pole trójkąta to x(zmienna tu powinna być), czyli ma on x długości podstawy i x
      wysokości' */

function triArea(podstawa, wysokość) {

  console.log(podstawa * wysokość / 2)
  return podstawa * wysokość / 2
}
triArea(7, 5)

/* lub przez przekazanie do funkcji
const poletrójkąta = triArea
poletrójkąta(12, 5) */
-------------------------------------------------------
/*  c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów,
     wieku danej osoby i wieku w którym to prawo jazdy zdał, */

function drivingLicense(age, inYear) {

  let currentYear = 2021
  console.log(currentYear - inYear)
  console.log("posiadasz prawo jazdy od lat " + (currentYear - inYear))

  if (inYear + age <= currentYear && age >= 16) {
    console.log("w roku " + inYear + " miałeś " + (currentYear - inYear + age) + " lat")

  } else {
    console.log("mając " + age + " lata zdałeś prawo jazdy ? NICE :),")
  }
  return currentYear - inYear
}
const youHaveDrivingLicense = drivingLicense;
youHaveDrivingLicense(18, 2011)
-------------------------------------------------------
/* d) zwracającą ile zapłacimy za jazdę autem jeśli jako jeden parametr podamy spalanie
     na 100km, a jako drugi przejechaną trasę, */

function drivingCar(combustion100km, distance) {
  console.log("kszt paliwa to " + (5 * combustion100km) / 100 * distance + " zł")
  return (5 * combustion100km) / 100 * distance
}
/* dodatkowo można zadeklarować zmienna z kosztem paliwa za 1 litr np
		let fuelPrice = 5;
*/
const fuelCost = drivingCar
fuelCost(7, 250)
-------------------------------------------------------
/* e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci
     podajemy w parametrach funkcji, */

function familly(imie, wiek, ilośćDzieci) {
  console.log(imie + ' ma ' + wiek + " lata" + " i " + ilośćDzieci + " dzieci")
  return imie + ' ma ' + wiek + " lata" + " i " + ilośćDzieci + " dzieci"
}
familly('Ala', 23, 2)
-------------------------------------------------------
// 2. Napisz funkcje (typy złożone):

/* a) zwracającą przekazaną do parametru tablicę, */

function nowaTablica(first) {
  console.log(first)
  return first
}
const array = [1, 2, 3]
const tab1 = nowaTablica
tab1(array)

-------------------------------------------------------
/* b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej, */

function nowaTablica2(first2) {
  console.log("druga wartość tablicy : " + first2[1])
  return first2[1]
}
const array2 = ['a1', 'a2', 'a3']
const tab2 = nowaTablica2
tab2(array2)

-------------------------------------------------------
/* c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x' */
function nowaTablicaTrzecia(Three) {
  console.log('Przekazana tablica ma ' + Three.length + ' elementy, a elementem nr 3 jest ' + Three[2])
  return Three
}
const arrayThree = ['TAB_1', 'TAB_2', 'TAB_3']
const tabThree = nowaTablicaTrzecia
tabThree(arrayThree)

-------------------------------------------------------
/* d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już
     zmienioną tablice z dodatkowym elementem, */
function tabOne(tab1) {
  console.log(tab1)
  console.log(cleanerTab)
  return tab1
}
let cleanerTab = []

let tablica2 = tabOne
tablica2(cleanerTab.push(555, "String", true))

-------------------------------------------------------
/* e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek)
      do funkcji, */
let person = {
  age: 55,
  name: 'Hans',
  surname: 'Kloss'
}
function returnObject(par1) {
  console.log(par1.name)
  return par1.name
}
let transfer = returnObject
transfer(person)

-------------------------------------------------------
/*  f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat
     i x(tu zmienna) cm wzrostu' */

let person2 = {
  age: 30,
  increase: 182,
  name: 'James',
  surname: 'Bond'
}

function giveMeString(par) {
  console.log('Imię : ' + par.name + "," + " Nazwisko : " + par.surname + "," + " ma " + par.age + " lat " + "i " + par.increase + " cm wzrostu")
  return 'Imię : ' + par.name + "," + " Nazwisko : " + par.surname + "," + " ma " + par.age + " lat " + "i " + par.increase + " cm wzrostu"
}
let runFunc = giveMeString
runFunc(person2)

