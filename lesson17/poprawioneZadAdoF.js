//Zadanie
// W pliku jest lista marek samochodów znajdujących się w wypożyczalni samochodowej.Wypożyczalnia ta posiada bardzo dużo aut różnej marki,
//     ilość tych aut w wypożyczalni ogólnie i aktualnie(auta aktualnie niewypożyczone) oraz cenę za dzień wynajmu.Za pomocą metod na tablicach:
const rentalCarCompany = [{
        name: 'audi',
        allCarsNumber: 70,
        carsToRent: 30,
        price: 140,
    },
    {
        name: 'fiat',
        allCarsNumber: 120,
        carsToRent: 120,
        price: 90,
    },
    {
        name: 'bmw',
        allCarsNumber: 50,
        carsToRent: 50,
        price: 430,
    },
    {
        name: 'ferrari',
        allCarsNumber: 3,
        carsToRent: 1,
        price: 1200,
    },
    {
        name: 'mustang',
        allCarsNumber: 13,
        carsToRent: 3,
        price: 650,
    },
    {
        name: 'mercedes',
        allCarsNumber: 22,
        carsToRent: 12,
        price: 340,
    },
]
// a) posortuj marki aut alfabetycznie,

console.log('\n', 'odp.  A', '\n');

function pokazZadanieA(obj) {
    const newArray = rentalCarCompany.map(function (par) {
        return par.name
    })
    return newArray.sort()
}
pokazZadanieA(rentalCarCompany)
const autaPoNazwie = pokazZadanieA()
console.log(`obiekt posortowany alfabetycznie`, autaPoNazwie)

// b) przefiltruj marki aut z ceną za dzień poniżej 400,

console.log('\n', 'odp.  B', '\n');

function pokazZadanieB(array, kwota) {
    const newArray = array.filter(function (par) {
        return par.price < kwota
    })
    console.log(`Poniżej mamy auta do dyspozycji w zależności od podanej w parametrze sumy.`)
    return newArray
}
const kosztWypozyczenia = pokazZadanieB(rentalCarCompany, 400)
console.log(kosztWypozyczenia)

// c) posortuj marki aut cenowo od najmniejszej do największej,

console.log('\n', 'odp.  C', '\n');

function pokazZadanieC(obj) {
    const newArray = obj.sort(function (par1, par2) {
        return par1.price - par2.price
    })
    return newArray
}
const autaPoCenie = pokazZadanieC(rentalCarCompany)
console.log(`sortowanie po cenie \n`, autaPoCenie, `\n`)

// d) przefiltruj tą tablicę i pokaż tylko te marki w których wszystkie auta z posiadanych są dostępne,

console.log( 'odp.  D', '\n');

  function pokazZadanieD(obj) {
      const newArray = obj.filter(function (par) {
          return par.allCarsNumber === par.carsToRent
      })
      console.log(`Te marki aut są w 100 % dostępne \n,\n`, newArray, )
  }
  pokazZadanieD(rentalCarCompany)

// e) posortuj auta względem dostępnej ilości aut(od tych gdzie jest najwięcej aut do tych gdzie jest ich najmniej)

console.log('\n', 'odp.  E', '\n');

function pokazZadanieE(obj) {
    const newArray = obj.sort(function (par1, par2) {
        return par2.carsToRent - par1.carsToRent
    })
    console.log(`Sortowanie w/g dostępnośći aut`)
    return newArray
}
const sortujDostepnoscAut = pokazZadanieE(rentalCarCompany)
console.log(sortujDostepnoscAut)

// f) sprawdź z której wypożyczalni będziemy mogli wynająć na 7 dni auto mając do dyspozycji 3500 zł,

console.log('\n', 'odp.  F', '\n');

function pokazZadanieF(par, kwota) {
    const newArray = par.filter(function (par1, par2) {
        return par1.price * 7 <= kwota
    })
    console.log(newArray <= kwota ? `brak dostępnych opcji w tej kwocie` : `W podanej kwocie ,możemy wypożyczyć te auta na 7 dni`)
    return newArray
}
const sevenDaysRent = pokazZadanieF(rentalCarCompany, 3500)
console.log(sevenDaysRent)

//     g) **
// Wskaż jakie auta są wypożyczane najczęściej i być może należy zaopatrzyć wypożyczalnie w więcej takich aut ?
//     (Chodzi o stosunek w danej marce aut dostępnych w wypożyczalni ogólnie i aktualnie, gdzie procentowo zostało ich teraz najmniej) Wskaż 3 najczęściej wypożyczane marki aut.

console.log('\n', 'odp.  G', '\n');