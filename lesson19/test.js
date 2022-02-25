// zad 16 :  Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami:(model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem,

// const Person = function (name, lastname, age) {
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
//     this.jump = () => console.log(`${this.name} ale skok !`)
// }

// const Pawel = new Person('Pawel', 'Kowalski', 22);
// const Marcin = new Person('Marcin', 'Nowak', 33);
// const Iza = new Person('Iza', 'Janicka', 17);

// Person.prototype.shoot = function () {
//     console.log(`${this.name} Ale strzał !!`)
// }

// Pawel.jump()
// Pawel.shoot()
// Marcin.jump()
// console.log(Pawel)

//  zadanie do zrobienia 16

const Car = function (model, yearOfProduction, color) {
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.color = color;
    this.drive = () => console.log(`Wybrane auto ${this.name} `)
}

const Audi = new Car('TT', '2016', 'red');
const BWM = new Car('Z4', '2015', 'blue')
const Ford = new Car('GTI', '2018', 'green')

Car.prototype.buy = function () {
    console.log(`${this.name}, prototype`)
}
// Person.prototype.shoot = function () {
//     console.log(`${this.name} Ale strzał !!`)
// }

console.log(this.Car)

Audi.drive()

Ford.buy()

BWM.drive()

// console.log('konstruktor', this.Car);

// const arr = [11, 3, 5, 31, 31, 54, 23, 14]

/* const biggerThan10 = someArray.some(number => number > 10) */
/* 
const biggerThan10_2 = some(number => number > 10)
 */

// function some2(fn) {
//     for (let i = 0; i < this.length; i++) {
//         const number = this[i]
//         if (fn(number)) {
//             return true
//         }
//     }
//     return false
// }
// some2(someArray)

// function reduce2(fn, initialValue)

// Array.prototype.some2 = some2
// Array.prototype.every2 = every2

// const biggerThan10 = arr.some(number => number > 10)
// const biggerThan10_2 = arr.some2(number => number > 10)

// console.log(biggerThan10)
// console.log(biggerThan10_2)

// function some(array) {
//     for (let i = 0; i < array.length; i++) {
//         const number = array[i]
//         if (someArray[i] > sum) {
//             return true
//         } 
//         return false
//     }
// }
