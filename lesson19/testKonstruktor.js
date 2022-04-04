// function Enemy(speed, power) {
//     this.live = 3;
//     this.speed = speed;
//     this.power = power;

//     this.print = function () {
//         console.log(`
//             Przeciwnik ma:
//             życia: ${this.live}
//             szybkości: ${this.speed}
//             siły ataku: ${this.power}
//         `);
//     }
// }
// const enemy1 = new Enemy(3, 10);
// enemy1.print();
// const enemy2 = new Enemy(5, 8);
// console.log('enemy1', enemy1)
// console.log('enemy2', enemy2)

// // ----------------------------------- //

// function Person(name, lastName, age, height) {
//     this.name = name;
//     this.lastName = lastName;
//     this.height = height
//     this.age = age;

//     this.fn = function () {
//         console.log(`i taka tam sobie funkcja`)
//     }
// }
// const Rafał = new Person('Rafał', 'Jaśkowski', 42, 181);
// console.log('Rafał', Rafał)
// Rafał.fn()

// // ----------------------------------- //

// function Cars(marka, model, color) {
//     this.marka = marka;
//     this.model = model;
//     this.color = color;
//     this.drive = function () {
//         console.log("jedź !")
//     };
// };

// const BMW = new Cars('BMW', 'Z7', "red");
// const Audi = new Cars('Audi', 'A4', 'green')
// const Fiat = new Cars('Fiat','Tico','blcak')

// BMW.drive()
// console.log(BMW)

// function Osoba(name, lastname, age) {
//     this.name = name;
//     this.lastName = lastname;
//     this.age = age;

//     this.pokaz = function () {
//         console.log(`pokaz co masz`)
//     };
// };

// const Pawel = new Osoba('Paweł', 'Kowalsi', 25)

// Pawel.pokaz()
// console.log(Pawel)

// ----------------------------------- //

//  zadanie do zrobienia 16 ..
// Stwórz funkcję konstruktora, która stworzy nam obiekt samochód z właściwościami:
// (model, yearOfProduction, color, drive()) i stwórz dwa samochody tym konstruktorem,

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

Car.prototype.tankFuel = (car, text) => console.log(car, text)
Car.prototype.stop = (car, text) => console.log(car, text)

audi.tankFuel(audi.model,`...Kończy się palwio ! zatankuj auto !`)
bmw.stop(bmw.model, "... Awaria ! zatrzymaj auto !")


// ver 2 start //
// Car.prototype.tankFuel = function () {
//     console.log(`Zatankuj ${this.color} samochód`);
// };
// Car.prototype.stop = function () {
//     console.log(`Zatrzymaj ${this.model} `);
// };
// ver 2 end //

// const car = function (model, yearOfProduction, color) {
//     this.model = model;
//     this.yearOfProduction = yearOfProduction;
//     this.color = color;
//     this.drive = () => {
//         console.log(`Jedziesz samochodem ${model}`);
//     };
// };
// const Ford = new car("Focus", 2015, "srebrny");
// const Citroen = new car("C4", 2020, "czarny");
// console.log(Ford);

// car.prototype.tankFuel = function () {
//     console.log(`Zatankuj ${this.color} samochód`);
// };
// car.prototype.stop = function () {
//     console.log(`Zatrzymaj ${this.model} `);
// };

// Citroen.tankFuel();
// Ford.stop();