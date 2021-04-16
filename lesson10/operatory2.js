// let x = 10
// let left = x > 5
// let riight = x == 10

// console.log(left || riight )

// let a = "test";
// console.log("a", a);

// const x = 16;

// if (x > 18) {
//     console.log('Możesz kupić winko')
// } else if (x > 12) {
//     console.log('Przykro mi, dostaniesz tylko picolo')
// } else { console.log('Zawołaj mamę') }

// x > 18
//   ? console.log("Możesz kupić winko"):console.log("Przykro mi, dostaniesz tylko picolo");

// const person = {
//   imię: "Mateusz",
//   age: 17,
//   address: {
//     city: 'Warsaw'
//   }
// }
// if (person.age > 18) {
//   console.log(person.address.city)
// }else{console.log('Zawoałaj mamę')}

// console.log(true)

// console.log("test");

const srodkiMyjace = [
  "proszek czarnobialy",
  "plyn do prania",
  "plyn do plukania",
  "proszek kolorowy",
];
const suszarka = ["spodnie", "majty", "koszulka", "koszulka"];

const brudneUbrania = ["brudne majty", "brudna koszulka", "brudne spodnie"];

function zrobPranie(ubrania, proszek, plyn, program = "sport") {
  console.log("brudneUbrania przed zmiana", ubrania);

  if (ubrania.length < 5) {
    ubrania.push("brudne skarpety");
    ubrania.push("brudne biale skarpety");
  }

  console.log("brudneUbrania po zmiana", brudneUbrania);

  // console.log("ubrania", ubrania);
  // console.log("proszek", proszek);
  // console.log("plyn", plyn);
  // console.log("program", program);

  const dostepneProgramy = ["sport", "delikatne"];

  if (!ubrania) {
    console.log("Wrzuc ubrania");
  }

  if (!proszek) {
    console.log("wrzuc proszek");
  }

  if (!plyn) {
    console.log("Wrzuc plyn");
  }

  // if (["sport", "delikatne"].includes('delikatne'))
  // includes sprawdz czy dostepne/ znajduje
  if (!dostepneProgramy.includes(program)) {
    console.log("Nieznany program");
  }

  return ubrania;
}

// const proszek = srodkiMyjace[0]

// const proszeczek = "proszek czarnobialy";

// console.log("brudne Ubrania p rzed", brudneUbrania);

// const koszNaPranie = zrobPranie(brudneUbrania,'Persil',srodkiMyjace[1],"delikatne");
// console.log("brudne Ubrania po", brudneUbrania);

// console.log(koszNaPranie);

// let a = [1, 2, 3];
// let b = a;
// przypiszemy A , tylko przypisuje B wartośc A a wartosc A jest adresem tej tablicy [123]
// a = [2, 2, 2];

// console.log(a);
// 222
// console.log(b);
// 123 to co bylo w a -- B przypsiało adres tablicy 123

// kopia zmiennej złozonej np tablicy
// np  const ubraniaKopia = [...ubrania]    czyli   ...ubrania

// const ubraniaKopia = [...ubrania[1,2,3]]
// console.log(...ubrania)

// kazda zmienna dostała kopie aaa
// let a = 'aaa'
// let b = a
// let c = b
// a = 'nic'
// console.log('a',a)
// console.log('b',b)
// console.log('c',c)

// a w typach złożponych np tablice obiekty kazda tablica uzyska ta sama wartosc
// let a = [1,2,3] // adres jakis tam 0x23434f23
// let b = a // 0x23434f23
// let c = b // 0x23434f23

// a.push(4, 5, 6)
// console.log('a',a)
// console.log('b',b)
// console.log('c',c)

let a = [1, 2, 3]; // adres np 4x334e4f55
let b = a; // 0x23434f23
let c = b; // 0x23434f23

a = ["Mateusz"]; // nowy adres 4x334e4f55
c.push(4, 5, 6);

console.log("a", a);
console.log("b", b);
console.log("c", c);
