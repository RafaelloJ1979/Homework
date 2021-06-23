const {
    listaAllegro,
    students,
    rentalCarCompany
} = require('./data')

// console.log(require)

// const laptopy = []
// for (let i = 0; i < listaAllegro.length; i++) {
//     const product = listaAllegro[i]
//     if (product.category == 'laptopy') {
//         laptopy.push(product)
//     }
// }

// function filter(funkcjaFiltrujaca) {
//     const tablica = []
//     for (let i = 0; i < listaAllegro.length; i++) {
//         const product = listaAllegro[i]
//         const dodajElement = funkcjaFiltrujaca(product, i, listaAllegro)
//         if (dodajElement) {
//             tablica.push(element)
//         }
//     }

//     return tablica
// }

// const funkcja = function (product) {
//     if (product.category == 'laptopy') {
//         return true
//     }

//     return false
// }

// const laptopy2 = listaAllegro.filter(funkcja)

// console.log('laptopy2', laptopy)

//


// dotyczy: /* const laptopy2 = listaAllegro.filter(funkcja) */

/* const laptopy = []

for (let i = 0; i < listaAllegro.length; i++) {
  const product = listaAllegro[i]
  if (product.category === 'laptopy') {
    laptopy.push(product)
  }
} */

// 

// function filter(funkcjaFiltrujaca) {
//     const tablica = []
//     for (let i = 0; i < listaAllegro.length; i++) {
//         const product = listaAllegro[i]
//         const dodajElement = funkcjaFiltrujaca(product, i, listaAllegro)
//         if (dodajElement) {
//             tablica.push(product)
//         }

//     }
//     return tablica
// }

// const funkcja = function (product) {
//     if (product.category === 'laptopy') {
//         return true
//     }
//     return false
// }

// /* const laptopy2 = listaAllegro.filter(funkcja) */
// const laptopy = filter(funkcja)
// console.log('laptopy', laptopy)


// //

function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
    let wartosc = wartoscPoczatkowa
    for (let i = 0; i < listaAllegro.length; i++){
        const item = listaAllegro[i]
        wartosc=funkcjaRedukujaca(wartosc,item)
    }
    return wartosc
}

const result = reduce(function (acc, { price, soldProducts }) {
    return acc + soldProducts
},0)
console.log(result)