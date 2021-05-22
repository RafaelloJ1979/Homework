const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('\n odp.  zad 1', '\n');

//  zad 1 : funkcja strzałkowa ... zwróć sumę wszystkich elementów znajdujących się w tablicy,

const sumArray = array.reduce((prev, next) => prev + next);
console.log('ver 1 : suma elementów tablicy to', sumArray);

// zad 1 // funkcja 

const newArr1 = array.reduce(function (acc, value) {
    return acc + value;
});
console.log('ver 2 : suma elementów tablicy to', newArr1);

console.log('\n odp. zad 2 ', '\n');

//  zad 2 ver 1: funkcja strzałkowa ... zwróć sumę wszystkich parzystych elementów tablicy,

const sumEven = array.filter(item => item % 2 === 0).reduce((acc, value) => acc + value);
console.log('ver 1 , suma parzystych elementów tablicy to', sumEven);

//  zad 2 : ver2 ... zwróć sumę wszystkich parzystych elementów tablicy,

const sumEven2 = array.filter(function (item) {
    return item % 2 === 0;
}).reduce(function (acc, value) {
    return acc + value;
});
console.log(`ver 2 , suma parzystych elementów tablicy to`, sumEven2);

console.log('\n odp.  zad 3 ', '\n');

// zad 3 : zwróć sumę wszystkich elementów tablicy + 10(10 dodaj za pomocą initialValue)

const sumEvenZad3 = array.reduce(function (acc, value) {
    return acc + value;
}, 10);
console.log(`suma wszystkich elementów tablicy array + 10 :`, sumEvenZad3);

console.log('\n odp.  zad 4 ', '\n ');

//  zad 4 : Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue,

console.log(`Accumulator : jest pierwszym elementem tablicy ,a po dodaniu InitialValue będzie wartością dodaną do początku tablicy`);

console.log('\n odp.  zad 5 ', '\n ');

// zad 5 : Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?

console.log(`Jeśli podamy wartość początkową to oryginalny index tablicy będzie 1 `);

console.log('\n odp.  zad 6 ', '\n ');

// zad 6 : Napisz pętle for która będzie miała takie samo działanie jak pętla reduce(pokazane było na live)

function reduce() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    };
    console.log(`fn + pętla for/reduce , suma elementów`, sum);
    return sum;
}
reduce()

console.log('\n odp.  zad 7 some i every ', '\n ');

// zad 7 : zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50, 

const someArray = [11, 3, 5, 31, 31, 54, 23, 14]

someArray.some(function (item, index, array) {
    if (item > 50) {
        console.log(`someArray zawiera element większy niż 50`, item > 50);
        return item > 50;
    };
});

console.log('\n odp.  zad 8 : every ', '\n ');

someArray.every(function (item, index, array) {
    return console.log(`Czy kazdy element tablicy (someArray) jest większy niż 2 ? `, item > 2);
})

console.log('\n odp.  zad 9 some i every ', '\n ');

// Jaka jest różnica między some i every?

console.log(`Some : zwraca true lub false.TRUE zwraca wtedy gdy jakikolwiek element naszej tablicy spełnia warunek funkcji. \n`)

console.log(`Every : zwraca true lub false.TRUE zwraca wtedy gdy wszystkie elementy tablicy spełniają warunek funkcji.`)

console.log('\n odp.  zad 10', '\n ');

// sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że w tablicy znajduje się element podzielny przez 7, //

someArray.some(function (item, index, tablica) {
    if (item % 7 === 0) {
        console.log(`tablica (someArray) zawiera elemnty podzielne przez 7 : `, item);
        return item % 7 === 0;
    };
});

console.log('\n odp.  zad 11', '\n ');

// stwórz metodę some za pomocą pętli for,
const arrZad11 = [10, 11, 12, 13, 14, 15, 16, 17];

// ver 1

function some(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= number) {
            return true;
        }
    }
    return false;
}
console.log(`ver 1 : fn some  `, some(arrZad11, 17));

// ver 2 jak na live 21

const biggerThan10 = arrZad11.some(number => number >= 10);

function some2(array) {
    for (let i = 0; i < this.length; i++) {
        const number = this[i];
        if (array(number)) {
            return true;
        }
        return false;
    }
}
console.log(`ver 2 : fn some2 `, biggerThan10);

console.log('\n odp.  zad 12 ', '\n ');

// stwórz metodę every za pomocą pętli for

// ver 1
const arrZad12 = [21, 22, 23, 24, 25];

function checkNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        console.log(`ver 1 :`, array, "elemsenty tablicy są większe niż ", number);
        if (array[i] > number) {
            return true;
        }
        return false;
    };
};
const sprawdz = checkNumber(arrZad12, 26);
console.log(sprawdz);

//ver 2
const num = 11;
const check = arrZad12.every(parametr => parametr > num)
{
    console.log(`ver 2 =>`, arrZad12, "elementy tablicy są mniejsze niż", num)
}
function every(array) {
    for (let i = 0; i < array.length; i++) {
        const parametr = array[i];
        if (array(parametr)) {
            return true;
        };
    };
    return false;
};
console.log(check);

// Funkcje i metody reduce, some i every   //   Stwórz funkcję, która:

console.log('\n odp.  zad 13 ', '\n ');

// przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof),

const arrayNumber = [25, '123', 7, '555', "string"];

function sumItems(array) {
    const sumArrayNumber = array.filter(function (element) {
        if (typeof element === "number") {
            return element;
        }
    }).reduce(function (prev, next) {
        return prev + next;
    });
    console.log(`suma elementów typu number w tablicy to`, sumArrayNumber);
}
sumItems(arrayNumber);

console.log('\n odp.  zad 14 ', '\n ');

// przyjmuję dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element tablicy od następnego,

const arraySubtract = [10, 5, 2, 1, ];

function mixMethod(par1, initialValue) {
    const storeIt = par1.reduce(function (acc, value) {
        return acc - value;
    }, initialValue);
    console.log(`suma wszystkich odjętych elementów tablicy`, storeIt);
    return storeIt;
}
const wynik = mixMethod(arraySubtract, 20);

console.log('\n odp.  zad 15 ', '\n ');

// przyjmuję dwa parametry(tablice i wartość, której szukamy w tej tablicy). Funkcją powinna nam zwrócić true jeśli w tablicy znajdzie się ta wartość,
const someArrayV2 = [11, 3, 5, "31", 35, "54", 23, undefined];

// ver 1
const searchInArray = (array, search) => {
    console.log(`ver 1 : czy tablica zawiera taki element ?`, search)
    return array.includes(search);
}
const pokaz = searchInArray(someArrayV2, 5);
console.log(pokaz);

// ver.2

const searchInArrayV2 = (array, search) => {
    if (array.includes(search)) {
        console.log(`ver 2 : czy tablica zawiera taki element ?`, search);
        return array.includes(search);
    } else {
        console.log(`ver 2 : Brak szukanego elementu w tablicy`, search);
        return array.includes(search);
    };
};
const wynikv2 = searchInArrayV2(someArrayV2, 3);
console.log(wynikv2);

// Prototypy:
console.log('\n odp.  zad 16 ', '\n ');

// Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami:(model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem,

function Car(model, yearOfProduction, color) {
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.color = color;
    this.drive = function (par) {
        console.log(`Wybrane auto `)
    }
}

const audi = new Car('Audi TT', '2016', 'red');
const bmw = new Car('BMW Z4', '2015', 'blue')
console.log(audi)
console.log(bmw)

console.log('\n odp.  zad 17 ', '\n ');

// Co robi słówko kluczowe New i kiedy możemy go użyć?

console.log(`słowo NEW powoduje że funkcja staje się konstruktorem oraz zwraca nam THIS w funkcji w której go użyjemy i nie musimy używać return .Używamy go przy wywołaniu funkcji kontruktor`)

console.log('\n odp.  zad 18 ', '\n ');

// Za pomocą prototype dodaj dwie funkcje do konstruktora car, tankFuel i stop, które będą wypisywać w konsoli dowolny napis,

Car.prototype.tankFuel = (car, text) => console.log(car, text)
Car.prototype.stop = (car, text) => console.log(car, text)

audi.tankFuel(audi.model, `...Kończy się palwio ! zatankuj auto !`)
bmw.stop(bmw.model, "... Awaria ! zatrzymaj auto !")