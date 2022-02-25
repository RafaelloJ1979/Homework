const person = {
  name: "Mateusz",
  surname: "Gabriel",
  age: 69,
};
// const prop = 'name'
// console.log(person.name) // Mateusz
// console.log(person[prop])  //Mateusz
// console.log(person['name']) // Mateusz
//-----------------------------//
// domyslne wartosci w paremetrze funkcji

// const pokazObiekt = ((value,key='surname')=>{
//     return value[key]
// })
// console.log(pokazObiekt(person))
//--------------------------//
function pobierzWartosc(osoba, klucz = "name") {
  return osoba[klucz];
}
console.log(pobierzWartosc(person));
//--------------//
//--------------//

const obj = {
  first_name: "Karol",
  last_name: "Kowalski",
  age: 10,
};

const wynik = (p1, p2 = "name") => {
  return p1[p2];
};
console.log(wynik(obj));

console.log("-----Przypisanie wartości – zagnieżdżona struktura -------");

// const person_list = {
//     admin: {
//       name: 'Lukasz'
//     }
//   };

//   let { admin: { name } } = person_list;
//   console.log(name); // Lukasz
//   console.log(admin); // ReferenceError: admin is not defined

const person_list2 = [["Lukasz"], ["one", "two"], ["three"], ["value 4"]];

//   let [[lukasz], [one,two],,[four]] = person_list2;
let [lukasz] = person_list2;

console.log(lukasz);

//   console.log(lukasz); // Lukasz
//   console.log(one); // one
//   console.log(two); // two
//   console.log(four); //value 4

const tabTwo = [["abc"], [123], ["raz", "dwa", "trzy"]];

const [[pierwszy], [drugi], [trzeci]] = tabTwo;

console.log(pierwszy, drugi, trzeci);
// ------------  destrukturyzacja w zagniezdzonych obiektach ------//

const user = {
  name: "Piotr",
  type: "node",
  info: "something",
  id: 21,
  relatives: {
    wife: { name: "Magdalena", id: 22 },
  },
};
const {
  name: myName,
  relatives: {
    wife: { name: herName },
  },
} = user;
console.log("wynik", myName, herName);

const obiekt = {
  firstPerson: {
    name: "Adam",
    lastName: "Dec",
  },
  nextPerson: {
    nextName: "Rafał",
    nextLastName: "Jaśkowski",
  },
};

const {
  firstPerson: { name: imie },
  nextPerson: { nextLastName: nazwisko },
} = obiekt;

console.log(imie, nazwisko);

const family = {
  name: "Rafał",
  lastName: "Jaśkowski",
  age: 42,
  siblings: {
    sister: { name: "Iwona", age: 52, brother: { name: "Paweł", age: 51 } },
  },
};

const { name:im,lastName:nazw,age:lata,siblings:{sister:{name:siostra,age:lat,brother:{name:brat,age:wiek}}} } = family

console.log(im,nazw,lata,siostra,lat,brat,wiek)

// Pozyskiwanie wartości z tablic //

const list = ['a','b','c']
const [first,second,third] = list
// console.log(first)
// --  //
const list2 = ['a', 'b', 'c', 'd', 'e', 'f'];
const [,second2,,...rest] =list2
console.log('wynik', second2,rest)

// uzycie petli z funkcjami

const zapetlaj = ((par1,par2)=>{
    for (let i = par1; i <= par2; i++) {
        const el =par1 += i;
        console.log(el,'el')
        // console.log(i,'i')
    }
})
// zapetlaj(1,2)
const wynik2 = zapetlaj(2,4)

console.log(wynik2,'wynik2')


function createLoop(startNumber, condition) {
    for(x = startNumber; x <= condition; x++) {
       console.log(`Aktualnie jest cyfra ${x}`)
    }
 }
 
 createLoop(1, 5)

//  https://github.com/RafaelloJ1979/Devstock-edycja-druga.git