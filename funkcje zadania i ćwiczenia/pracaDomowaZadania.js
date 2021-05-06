// Napisz funkcje (typy proste):
/*a) zwracającą sumę trzech liczb podanych w parametrach funkcji, */

function addNumber(num1, num2, num3) {
  return num1 + num2 + num3;
}
const addThreNumber = addNumber;
addThreNumber(5, 10, 15);

/*b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci'Pole trójkąta to x(zmienna tu powinna być), czyli ma on x długości podstawy i x wysokości' */

// function triArea(podstawa, wysokość) {
//   console.log((podstawa * wysokość) / 2);
//   return `Pole trójkąta to ${(podstawa * wysokość) / 2}`;
// }
// triArea(7, 5);
//lub
function triArea(podstawa, wysokość) {
  let a = podstawa
  let b = wysokość
  console.log(`Pole trójkąta to ${a* b / 2}`)
  return (`Pole trójkąta to ${a* b / 2}`)
}
triArea(5, 7)
/* lub przez przekazanie do funkcji 
const poletrójkąta = triArea poletrójkąta(12, 5) */

/*c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów, wieku danej osoby i wieku w którym to prawo jazdy zdał, */

function drivingLicense(age, hisYear) {
  // console.log(`masz prawko od  ${age - hisYear} lat`);
  return age - hisYear;
}
drivingLicense(30, 22);
/* lub const youHaveDrivingLicense = drivingLicense; youHaveDrivingLicense(40, 22) */

/*d) zwracającą ile zapłacimy za jazdę autem jeśli jako jeden parametr podamy spalanie na 100km, a jako drugi przejechaną trasę, */

function drivingCar(combustion100km, distance) {
  return `koszt paliwa to ${5 * (combustion100km / 100) * distance} zł`;
}
drivingCar(5, 100);

/*dodatkowo można zadeklarować zmienna z kosztem paliwa za 1 litr np let fuelPrice = 5; */

const fuelCost = drivingCar;
fuelCost(7, 250);

/*e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci podajemy w parametrach funkcji, */

function family(imie, wiek, ilośćDzieci) {
  return `${imie} ma ${wiek} lata i ${ilośćDzieci} dzieci`;
}
family("Ala", 23, 2);

// 2. Napisz funkcje (typy złożone):
/* a) zwracającą przekazaną do parametru tablicę, */

const array = [1, 2, 3];
function nowaTablica(first) {
  return first;
}
const tablicaX = nowaTablica;
tablicaX(array);

/* b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej, */

function nowaTablica2(first2) {
  return first2[1];
}
const array2 = ["a1", "a2", "a3"];
const tab2 = nowaTablica2;
tab2(array2);

/* console.log(array2);
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]); */

/* c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x' */

function nowaTablicaTrzecia(par1) {
  return `Przekazana tablica ma ${par1.length} elementy, a elementem nr 3 jest ${par1[2]}`;
}
const arrayThree = ["TAB_1", "TAB_2", "TAB_3"];
const tabThree = nowaTablicaTrzecia;
tabThree(arrayThree);

/* d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już zmienioną tablice z dodatkowym elementem, */

function tabOne(tab1) {
  return tab1;
}
let cleanerTab = [];
let addTab = tabOne;
cleanerTab.push(555, "String", true);
addTab(cleanerTab);

/* e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek) do funkcji, */

let person = {
  age: 55,
  name: "Hans",
  surname: "Kloss",
};

function returnObject(par1) {
  console.log(par1.name)
  return par1.name;
}
let transfer = returnObject(person)

// lub 
let person = {
  age: 55,
  name: "Hans",
  surname: "Kloss",
};

function returnObject(par1) {
  /* console.log(par1.name) */
  return par1
}

let wynik = returnObject(person.name);
console.log(wynik)

/*  f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat i x(tu zmienna) cm wzrostu' */

let person2 = {
  age: 30,
  increase: 182,
  name: "James",
  surname: "Bond",
};

function giveMeString(par) {
  return `${par.name} ${par.surname} ma lat ${par.age} i ${par.increase} cm wzrostu`;
}
let runFunc = giveMeString(person2)
console.log(runFunc)

/* g) przyjmującą dwa parametry jeden do obiekt a drugi to wiek, i zwracającą zmieniony wiek, czyli wiek który przekazujemy w parametry zamieniamy z wiekiem w obiekcie, */

let personX = {
  age: 25,
};

function mixValue(obj, wiek) {
  return (obj.age = wiek);
}
console.log('before', personX.age)
mixValue(personX, 22)
console.log('after', personX.age)
/* console.log(personX) */

// 3. Napisz funkcje (warunki if, else - typy proste):

// a) która przyjmuje wiek osoby i informacje czy ma prawo jazdy, jeśli dana osoba
// ma poniżej 18 lat to powinno wyświetlić, że 'Nie ma prawa jazdy'. Jak ma powyżej
// 18stu lat i nie ma prawka to też ma wyświetlić, ze 'Nie ma prawa jazdy'. A jak
// ma powyżej 18stu lat i prawo jazdy to niech wyświetli, że "Możesz śmiało jeździć"

function drivinglicense(age, license) {
  if (age < 18) {
    console.log(`Nie ma prawa jazdy`);
  } else if (age >= 18 && license === false) {
    console.log(`Nie ma prawa jazdy`);
  } else {
    console.log(`Możesz śmiało jeździć`);
  }
}
drivinglicense(17);
drivinglicense(18, false);
drivinglicense(19);

//  b) przyjmuje jako parametr string, jeśli string jest równy 'Kup', niech wyświetli
//    'Widzę, że zrobić zakupy', a jak string jest równy 'Sprzedaj' niech wyświetli
//    'Możesz tutaj swobodnie sprzedawać', a jeśli nie będzie ani tym ani tym to niech
//    pokaże 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj'

function compareString(string) {
  if (string === `Kup`) {
    console.log(`Widzę,że robisz zakupy`);
  } else if (string === `Sprzedaj`) {
    console.log(`Możesz tutaj swobodnie sprzedawać`);
  } else {
    console.log(
      `Nie wybrałeś żadneej z dostępnych opcji - wpisz Kup lub Sprzedaj`
    );
  }
}
compareString("Kup");
compareString("Sprzedaj");
compareString("123");

//  c) przyjmuje liczbę jak argument i zwraca string z informacja 'Liczba jest dodatnia',
//    'Liczba jest ujemna' lub 'Liczba jest równa 0'

function number(num1) {
  if (num1 > 0) {
    return `Liczba jest dodatnia`;
  } else if (num1 < 0) {
    return `Liczba jest ujemna`;
  } else {
    return `Liczba jest równa 0`;
  }
}
number(5);

//  d) przyjmującą liczbę jako argument i jeśli liczba jest podzielna przez 3 to niech
//    pokaże 'Fizz', jak podzielna jest przez 5 to 'Buzz', a jak przez 3 i 5 to 'FizzBuzz',

function divisible(number) {
  if (number % 3 === 0 && number % 5 === 0 && number > 0) {
    console.log(`FizzBuzz`);
  } else if (number % 3 === 0 && number > 0) {
    console.log(`Fizz`);
  } else if (number % 5 === 0 && number > 0) {
    console.log(`Buzz`);
  } else {
    console.log(`buum!!`);
  }
}
divisible(0);

//  e) napisz funkcję, która wyświetla czy osoba może obejrzeć film dla osób 15+, funkcja
//    powinna przyjąć dwa argumenty, wiek danej osoby i to czy ma zgodę rodziców, jeśli
//    ma powyżej 15 lat to może oglądać, jak ma poniżej ale ma zgodę rodziców też może
//    oglądać, a jak ma poniżej i nie ma zgody to nie może, wyświetli odpowiednie komunikaty,
//  W tych funkcjach napisz warunki używając ternary operatora!!

function cinema(age, consent) {
  if (age >= 15) {
    console.log("Możesz oglądać film");
  } else if (age < 15 && consent === true) {
    console.log("masz zgodę rodziców więc oglądaj :) ");
  } else {
    console.log("nie masz zgody i odpowiedniego wieku");
  }
}
cinema(15);
cinema(14, true);
cinema(14);

//  f) zwracającą 'Tak' jeśli jak argument podamy true i 'Nie' jeśli podamy false,

function yesOrNot(a) {
  console.log(a === true ? "Tak" : "Nie");
  return a === true ? "Tak" : "Nie";
}
yesOrNot(false);

//  g) zwracającą informację czy podana jako argument liczba jest parzysta czy nie,

function evenOdd(num1) {
  console.log(num1 % 2 === 0 ? "Parzysta" : "Nieparzysta");
  return num1 % 2 === 0 ? "Parzysta" : "Nieparzysta";
}
evenOdd(10);

// 4. Napisz funkcje (warunki if, else - typy złożone):

//  a) która przyjmuje obiekt car(model, marka, rok produkcji, isCabrio) i jeśli rok produkcji jest większy niż aktualny rok to informacja, ze auta jeszcze nie wyprodukowano,jak będzie rok poniżej aktualnego to wyświetlamy w zdaniu ładnie informacje o aucie + informacje czy jest Cabrio czy nie jest,

let car = {
  marka: "Audi ",
  model: "R8 Spyder",
  yearOfProduction: 2015,
  isCabrio: true,
};

function newCar(theObject) {
  console.log(
    theObject < 2015
      ? "auta jeszcze nie wyprodukowano"
      : "Audi R8 Spyder z 2015 roku to sportowe auto w wersji cabrio : " +
          car.isCabrio
  );
}
const takeOver = newCar;
takeOver(2016);

//  b) która przyjmuje tablicę jako parametr z dowolna liczbą elementów, jeśli tablica
//    jest pusta to zwracamy string pusta tablica, a jak nie to mamy zwrócić stringa
//    'tablica ma x elementów',

const tabColor = ["red", "blue", "green"];

function takeOverTab(theArray) {
  return theArray == 0
    ? `pusta tablica`
    : `tablcia ma ` + theArray.length + ` element`;
}
const tabOne = takeOverTab;
tabOne(tabColor);

//  c) przyjmuje dwa parametry, oba sa obiektami, jeden to osoba (imię, nazwisko, wiek, czyLubiOgladacFilmy, maTV)
//    a drugi to książka (tytuł, rodzaj, ilość stron) i funkcja ta powinna zwrócić stringa
//    odpowiednio, jeśli osoba lubi czytać książkę to niech jej zaproponuje książkę z
//    obiektu: 'Cześć x(imie), polecam Ci przeczytać x(nazwa książki) książkę, ma tylko
//    (strony książki) stron', a jeśli nie lubi czytać, ale ma tv to niech zwróci
//    żeby 'Poszedł oglądać tv' lub po prostu jak nie ma 'Nie wiem co Ci zaproponować'

const person = {
  name: "Adam",
  surname: "Dec",
  age: 30,
  czyLubiOgladacFilmy: true,
  maTV: true,
  lubiKsiążki: true,
};
const book = {
  tytuł: "Harry Potter",
  rodzaj: "fantasy",
  ilośćStron: 1000,
};

// w zadaniu poniżej VSC formatuje mi dziwnie kod w console.logu !?

function twoObject(one, two) {
  if (one.lubiKsiążki === true) {
    alert("Lubisz książki ? ");
    while (one != "y") one = prompt(" press " + "_ y _ " + " -> yes");
    console.log(
      "Cześć " +
        one.name +
        " , polecam Ci przeczytać ksiązkę " +
        two.tytuł +
        ", ma tylko " +
        two.ilośćStron +
        " stron :) ,"
    );
  } else if (one.lubiKsiążki !== true && one.maTV === true) {
    alert("Nie lubisz książek ! ");
    while (one != "n") one = prompt(" press " + "_ n _ " + " -> no");
    console.log("Jeśli nie lubisz to idź oglądać tv ");
  } else if (one.lubiKsiążki !== true || one.maTV !== true) {
    alert("nie masz tv ? ");
    console.log("To nie wiem co ci zaproponować ");
  }
}
const mixObject = twoObject;
mixObject(person, book);

// ostatnie zadanie troszkę dodałem od siebie :)
