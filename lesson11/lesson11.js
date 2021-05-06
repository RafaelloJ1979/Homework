const person = {
  age: 15,
  isDrunk: true
}

function canServeBeer(age, isDrunk) {
  let wiek = age.age
  if (wiek >= 18 && isDrunk === false) {
    console.log(`Możesz kupić piwko , ponieważ masz ${wiek} lat i jesteś trzeźwy`)
    /* console.log("mozesz kupic piwko bo masz lat",wiek) */
  } else {
    console.log(`nie możesz kupic piwka ponieważ masz ${wiek} lat`)
  }

}

canServe = canServeBeer(person, false)

// przykład z autem i przekazaniem do funkcji obiektu
const pustaTablica = []
const samochod = {
  model: "ford",
  type: "Mustang",
  color: "red"
}

function noweAuto(car, podaj) {
  if (car && car.type) {
    podaj.push(car)
    console.log(pustaTablica)
  }
}
console.log('before', pustaTablica)
noweAuto(samochod, pustaTablica)
console.log('after', pustaTablica)

//