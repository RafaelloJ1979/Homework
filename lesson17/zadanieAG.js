//Zadanie
// W pliku jest lista marek samochodów znajdujących się w wypożyczalni samochodowej.Wypożyczalnia ta posiada bardzo dużo aut różnej marki,
//     ilość tych aut w wypożyczalni ogólnie i aktualnie(auta aktualnie niewypożyczone) oraz cenę za dzień wynajmu.Za pomocą metod na tablicach:
//     a) posortuj marki aut alfabetycznie,
// b) przefiltruj marki aut z ceną za dzień poniżej 400,
// c) posortuj marki aut cenowo od najmniejszej do największej,
//     d)
// przefiltruj tą tablicę i pokaż tylko te marki w których wszystkie auta z posiadanych są dostępne,
// e) posortuj auta względem dostępnej ilości aut(od tych gdzie jest najwięcej aut do tych gdzie jest ich najmniej)
// f) sprawdź z której wypożyczalni będziemy mogli wynająć na 7 dni auto mając do dyspozycji 3500 zł,
//     g) **
// Wskaż jakie auta są wypożyczane najczęściej i być może należy zaopatrzyć wypożyczalnie w więcej takich aut ?
//     (Chodzi o stosunek w danej marce aut dostępnych w wypożyczalni ogólnie i aktualnie, gdzie procentowo zostało ich teraz najmniej) Wskaż 3 najczęściej wypożyczane marki aut.

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

console.log('\n', 'odp.  B', '\n');

function pokazZadanieB(obj, kwota) {
    const newArray = rentalCarCompany.map(function (par) {
        return {
            auto: par.name,
            cena: par.price
        }
    })
    const newArray1 = newArray.filter(function (par1, par2) {
        par2 = kwota
        return par1.cena < par2
    })
    console.log(`Poniżej mamy auta do dyspozycji w zależności od podanej w parametrze sumy.`)
    return newArray1
}

const kosztWypozyczenia = pokazZadanieB(rentalCarCompany, 400)
console.log(kosztWypozyczenia)

console.log('\n', 'odp.  C', '\n');

function pokazZadanieC(obj) {
    const newArray = rentalCarCompany.map(function (par) {
        return {
            auto: par.name,
            cena: par.price
        }
    })
    const newArray1 = newArray.sort(function (par1, par2) {
        return par1.cena - par2.cena
    })
    return newArray1
}
pokazZadanieC(rentalCarCompany)
const autaPoCenie = pokazZadanieC()
console.log(`sortowanie po cenie`, autaPoCenie)

console.log('\n', 'odp.  D', '\n');

function pokazZadanieD(obj) {
    const newArray = rentalCarCompany.map(function (par) {
        return {
            auto: par.name,
            wszystkie: par.allCarsNumber,
            dostepne: par.carsToRent,
            kwota: par.price
        }
    })
    const newArray1 = newArray.filter(function (par1) {
        return par1.wszystkie === par1.dostepne
    })
    console.log(`Te marki aut są w 100 % dostępne `)
    return newArray1
}
const dostepneWszystkie = pokazZadanieD(rentalCarCompany)
console.log(dostepneWszystkie)

console.log('\n', 'odp.  E', '\n');

function pokazZadanieE(obj) {
    const newArray = rentalCarCompany.map(function (par) {
        return {
            auto: par.name,
            dostepne: par.carsToRent,
        }
    })
    const newArray1 = newArray.sort(function (par1, par2) {
        return par1.dostepne - par2.dostepne
    })
    console.log(`Sortowanie w/g dostępnośći aut`)
    return newArray1
}
const sortujDostepnoscAut = pokazZadanieE(rentalCarCompany)
console.log(sortujDostepnoscAut)

console.log('\n', 'odp.  F', '\n');

function pokazZadanieF(obj, kwota) {
    const newArray = rentalCarCompany.map(function (par) {
        return {
            auto: par.name,
            cena: par.price
        }
    })
    const newArray1 = newArray.filter(function (par1, par2) {
        par2 = kwota
        return par1.cena * 7 <= par2
    })
    console.log(`W podanej kwocie ,możemy wypożyczyć takie auta na 7 dni`)
    return newArray1
}
const sevenDaysRent = pokazZadanieF(rentalCarCompany, 3500)
console.log(sevenDaysRent)

console.log('\n', 'odp.  G', '\n');

function pokazZadanieG(obj) {
    const newArray = obj.map(function (par) {
        const wynik = par.carsToRent / par.allCarsNumber * 100
        return {
            ...par,
            procentowaIloscAut: wynik.toFixed(0)
        }
    }).sort(function (par1, par2) {
        return par1.procentowaIloscAut - par2.procentowaIloscAut
    }).filter(function (par1, index) {
        return index < 3
    })
    console.log(`stosunek aut wypozyczonych do dostępnych `);
    return newArray
}
const sortujDostepnoscAutzadG = pokazZadanieG(rentalCarCompany);
console.log(sortujDostepnoscAutzadG);



// function pokazZadanieG(obj) {
//     const newArray = obj.map(function (par) {
//         const wynik = par.carsToRent / par.allCarsNumber * 100
//         return {
//             ...par,
//             procentowaIloscAut: wynik.toFixed(0)
//         }
//     }).sort(function (par1, par2) {
//         return par1.procentowaIloscAut - par2.procentowaIloscAut
//     }).filter(function (par1, index) {
//         return index < 3
//     })
//     console.log(`stosunek aut wypozyczonych do dostępnych `);
//     return newArray
// }
// const sortujDostepnoscAut = pokazZadanieG(rentalCarCompany);
// console.log(sortujDostepnoscAut);