// // dobrze

// // const arr = [11, 3, 5, 31, 31, 54, 23, 14]
// // const bigger = arr.some(par => par > 10)

// // function some(array) {
// //     const number = array[i]
// //     for (let i = 0; i < array.length; i++) {
// //         if (array(number)) {
// //             return true
// //         }
// //     }
// //     return false
// // }

// // console.log(bigger)

// // dobrze
// // const arr = [11, 3, 5, 31, 31, 54, 23, 14]
// // const xxx = arr.some(number => number > 5)
// // function some(par) {

// //     for (let i = 0; i < par.length; i++) {
// //         // let wynik = par > number
// //         // const number = 55
// //         if (arr[i] > number)
// //             return true
// //     }
// //     return false
// // }
// // console.log(xxx)
// // some(arr)

// // --------------------
// // dobrze 

// // const arr1 = [11, 3, 5, 31, 31, 54, 23, 14]
// // function some(par1,par2) {
// //     for (let i = 0; i < par1.length; i++) {
// //         if (arr1[i] > par2)
// //             return true
// //     }
// //     return false
// // }
// // console.log(`fn some`,some(arr1,7))

// // // dobrze

// // const arr = [11, 3, 5, 31, 31, 54, 23, 14]

// // function some(array) {
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] > 75) {
// //             return true
// //         }
// //         return false
// //     }
// // }
// // console.log(some(arr))
// // --------------------
// // dobrze

// // const arr2 = [11, 3, 5, 21, 21, 14, 23, 14]
// // const biggerThan10 = arr2.some(number => number > 5)

// // function some2(array) {

// //     for (let i = 0; i < this.length; i++) {

// //         const number = this[i]
// //         if (array(number)) {
// //             return true
// //         }
// //         return false
// //     }
// // }

// // console.log(`fn some2 `,biggerThan10)

// // --------------------

// // function Enemy(speed, power) {
// //     this.live = 3;
// //     this.speed = speed;
// //     this.power = power;
// //     this.print = function () {
// //         console.log(`Przeciwnik ma życia : ${this.live}szybkość${this.speed}syły ataku${this.power}
// //         `);
// //     };
// // }


// // const obA = {}
// // const obB = new Object()
// // console.log('obA', obA)
// // console.log('obB', obB)

// // const boolA = true;
// // const boolB = new Boolean(true);
// // console.log('boolA', boolA)
// // console.log('boolB', boolB)

// // const tabA = ["ala", "bala"];
// // const tabB = new Array("ala", "bala");
// // console.log('tabA', tabA)
// // console.log('tabB', tabB)

// // const txtA = `Ala ma kota`;
// // const txtB = new String(`Ala ma kotki`)
// // console.log('txtA', txtA)
// // console.log('txtB', txtB)


// // const hello = fn(() => {
// //     console.log("test")
// // })
// // hello(fn())

// // const object1 = {
// //     showThis: () => {
// //         console.log(`${this}`)
// //     }
// // }

// // console.log('2233',object1.showThis())


// // let array1 = [12, 22, 3, 34, 5, 6];

// // const tab = ["Bartek", "ania", "Celina", "agnieszka"];

// // tab.push("ADam")
// // // tab.sort();

// // console.log(tab)

// // console.log(tab); //["Bartek", "Celina", "agnieszka", "ania"]

// // console.log(compare())


// // const pokaz = function (array) {

// //     array.sort(function (left, right) {
// //         return right - left
// //     })
// // }
// // console.log(pokaz(array))

// // const wynik = array.sort(function (a,b) {
// //     console.log(b - a)
// //     return b - a
// // })
// // console.log(wynik)

// // myFunction(); //Tutaj jest ok

// // function myFunction() {
// //     console.log("...");
// // }


// // array.map(item => item * 2);

// // array.map(item => item + 1);

// // console.log(array)


// // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // function reduce() {
// //     let sum = 0;
// //     for (let i = 0; i < array.length; i++) {
// //         sum += array[i];
// //     };
// //     console.log(`pętla for/reduce , suma elementów`, sum);
// //     return sum;
// // }
// // reduce()

// function Car(model, yearOfProduction, color) {
//     this.model = model;
//     this.yearOfProduction = yearOfProduction;
//     this.color = color;
//     this.drive = function (par) {
//         console.log(`Wybrane auto `)
//     }
// }

// const audi = new Car('Audi TT', '2016', 'red');
// const bmw = new Car('BMW Z4', '2015', 'blue')

// Car.prototype.tankFuel = () => console.log(`Zatankuj ${audi.model} `);
// Car.prototype.stop = (car, text) => console.log(car, text)

// audi.tankFuel()
// bmw.stop(bmw.model, "... Awaria ! zatrzymaj auto !")

// // ver 2 od Ag.... start //
// // Car.prototype.tankFuel = function () {
// //     console.log(`Zatankuj ${this.color} samochód`);
// // };
// // Car.prototype.stop = function () {
// //     console.log(`Zatrzymaj ${this.model} `);
// // };
// // ver 2 end //

console.log('\n odp.  zad 12 ', '\n ');

// stwórz metodę every za pomocą pętli for

// ver 1
const arrZad12 = [21, 22, 23, 24, 25];

// function checkNumber(array, number) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`ver 1 :`, array, "elemsenty tablicy są większe niż ", number);
//         if (array[i] > number) {
//             return true;
//         }
//         return false;
//     };
// };
// const sprawdz = checkNumber(arrZad12, 26);
// console.log(sprawdz);

// ver 2

function every(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > number) {
            return true;
        };
    };
    return false;
};
// console.log(every(arrZad12,5))
console.log(every(arrZad12, 10), `ver 2 :`, arrZad12,);

// //ver 3
// const num = 11;
// const check = arrZad12.every(parametr => parametr > num)
// console.log(`ver 3 :`, arrZad12, "elementy tablicy są mniejsze niż", num)


// function every2(array) {
//     for (let i = 0; i < array.length; i++) {
//         const parametr = array[i];
//         if (array(parametr)) {
//             return true;
//         };
//     };
//     return false;
// };
// console.log(check);