// zad 1 Pętla for... in
// a) napisz obiekt(zawierający conajmniej 3 elementy klucz - wartość) i pętle która wyświetli wszystkie wartości tego obiektu,   
console.log('\n', 'Z A D A N I E : 1 a', '\n');

const person = {
    name: "Bruce",
    lastName: 'LEE',
    skill: "Kung-Fu"
};
for (key in person) {
    let wynik = key;
    console.log(`${key} ${person[key]}`);
};

// b) napisz tablice(conajmniej 5 elementową) i wyświetl wszystkie elementy tej tablicy,
console.log('\n', 'Z A D A N I E : 1 b', '\n');

const array1 = ["1", 2, "3", 4, "5"];
for (value in array1) {
    console.log(`index ${value} ; element ${array1[value]}`);
};

// zad 2 Pętla // for... of
// a) Napisz pętle która wyświetli elementy tablicy tej samej co w zadaniu 1 b,
console.log('\n', 'Z A D A N I E : 2 a', '\n');

for (value of array1) {
    console.log(value);
};

// b) Napisz pętle która wyświetli elementy stringa "Hello World",
console.log('\n', 'Z A D A N I E : 2 b', '\n');

const string = 'Hello World';
for (value of string) {
    console.log(`${value}`);
};

// c) Jaka jest różnica między  for..in a for..of ?
console.log('\n', 'Z A D A N I E : 2 c', '\n');

console.log(`zastosowanie for In głównie w obiektach ,a w tablicach iteracja po indeksach tablicy`);
console.log(`zastosowanie for OF na tablicach ,stringach i nie działa na obiektach`);

// zad 3 : Pętla while oraz do ... while

//  a) napisz pętlę, która wyświetli liczby od - 5 do 5
console.log('\n', 'Z A D A N I E : 3 a', '\n');
let num1 = -5;
while (num1 < 6) {
    console.log(num1);
    num1++;
};

//  b) napisz taka samą pętle za pomocą do ... while
console.log('\n', 'Z A D A N I E : 3 b', '\n');

let b = -5;
do {
    console.log(b);
    b++;
}
while (b < 6);

// zad 4 metoda map() -const array = [1, 2, 3, 4, 5] przykładowa tablica

// a) stwórz nową tablicę z taką samą liczbą elementów gdzie każdy jest pomnożony razy 2,
console.log('\n', 'Z A D A N I E : 4 a', '\n');

const array = [1, 2, 3, 4, 5];
const newArray = array.map(function (value) {
    return value * 2;
});
console.log(`newArray`, newArray);
console.log(`array`, array);

// b) stwórz tablicę z imionami i nową tablice, która wyświetli powitanie dla każdego imienia w,
console.log('\n', 'Z A D A N I E : 4 b', '\n');

const arrayNames = ["Adam", "Ewa", "Daniel"];
const newArrayNames = arrayNames.map(function (item) {
    return item + " Cześć";
});
console.log(newArrayNames);

// zad 5 metoda filter() - przykładowa tablica const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// a) z tablicy array stwórz nową tablicę w której będą tylko liczby nieparzyste,
console.log('\n', 'Z A D A N I E : 5 a', '\n');

const array5a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArrayEven = array5a.filter(function (item) {
    return item % 2 > 0;
});
console.log(`array5a`, array5a);
console.log(`newArrayEven`, newArrayEven);

// b) z tablicy array stwórz nową tablicę z cyframi większymi od 5 ciu,
console.log('\n', 'Z A D A N I E : 5 b', '\n');

const array5b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArraybiggerThanFive = array5b.filter(function (item) {
    return item > 5;
});
console.log(`array5b`, array5b);
console.log(`newArraybiggerThanFive`, newArraybiggerThanFive);

// c) stwórz tablicę z obiektami(z wartościami: name, lastname, gender - przynajmniej 4 osoby w tablicy powinny być) i przefiltruj ją tak aby zostały tylko osoby płci żeńskiej w nowej tablicy,
console.log('\n', 'Z A D A N I E : 5 c', '\n');

const arrayActors = [

    {
        name: "Angelina",
        lastName: "Jolie",
        gender: "female"
    },
    {
        name: "Anthony",
        lastName: "Hopkins",
        gender: "male"
    },
    {
        name: "Julia",
        lastName: "Roberts",
        gender: "female"
    },
    {
        name: "Brad",
        lastName: "Pit",
        gender: "male"
    },
];
const newArrayGender = arrayActors.filter(function (item) {
    const women = item.gender === 'female';
    return women;
});
console.log(`obiekty zawierający kobiety \n \n`, newArrayGender);

// zad 6 : metoda forEach()

// a) zmień tablice const array = [1, 2, 3, 4, 5, 6, 7, 8, 9] tak aby każda wartość została pomniejszona o 1,
console.log('\n', 'Z A D A N I E : 6 a', '\n');

const array6a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array6a.forEach(function (item) {
    console.log(item - 1);
});

// zad 7 : metoda sort()
// a) posortuj alfabetycznie tablicę ze stringami const str = ['d', 'a', 's', 'f']
console.log('\n', 'Z A D A N I E : 7 a', '\n');

const str = ['d', 'a', 's', 'f'];
console.log(str.sort());

// b) posortuj od liczby najmniejszej do największej tablicę const array = [9, 2, 1, 6, 5, 4, 7, 8, 3]
console.log('\n', 'Z A D A N I E : 7 b', '\n');

const array7b = [9, 2, 1, 6, 5, 4, 7, 8, 3];
console.log(array7b.sort());

// c) powyższą tablicę array posortuj od największej do najmniejszej,
console.log('\n', 'Z A D A N I E : 7 c', '\n');

const array7c = [9, 2, 1, 6, 5, 4, 7, 8, 3];
array7c.sort(function (par1, par2) {
    return par2 - par1;
})
console.log(array7c);

// zad : 8 ** .łączenie metod map(), filter(), sort() - const array = [9, 2, 1, 6, 5, 4, 7, 8, 3]

// a) stwórz nową tablicę od array tylko każdy element powinien być powiększony o 2, a
// następnie przefiltruj tą tablicę tak aby wyświetliła tylko liczby większe od 10 i
// posortuj tą tablicę od najmniejszej liczby do największej,
console.log('\n', 'Z A D A N I E : 8 a', '\n');

const array8a = [9, 2, 1, 6, 5, 4, 7, 8, 3];

const new1 = array8a.map(function (item) {
    return item * 2
})
const new2 = new1.filter(function (item) {
    return item > 10
})

const new3 = new2.sort(function (a, b) {
    return a - b
})
console.log(`new1,new2,new3 : wartości podwojone ,przefiltrowane i posortowane z tablicy array \n \n ${new3}`)