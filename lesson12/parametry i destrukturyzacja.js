// Parametry jako lista czy w obiekcie? Co zastosować?
// Sposoby: w formie listy (zwykły) , w formie obiektu,

// W formie listy

function obliczCene(name, type, price) {
return name
}
const produkt = {
name: ‘Ksiazka JS’,
type: ‘ksiazka’,
price: 100
}
obliczCene(produkt.name, produkt.type, produkt.price)

// W formie obiektu

function obliczCene(obj) {
return obj.name
}
const produkt = {
name: ‘Ksiazka JS’,
type: ‘ksiazka’,
price: 100
}
obliczCene(produkt)
//

// Destrukturyzacja obiektu
            // Jeśli mamy obiekt (produkt) to możemy wyświetlać z niego właściwości na dwa sposoby. Zobacz oba sposoby na poniższych przykładach:
// Normalnie

const produkt = {
name: ‘Ksiazka JS’,
type: ‘ksiazka’,
price: 100
}
console.log(produkt.name)
console.log(produkt.type)
console.log(produkt.price)
//

// Destrukturyzacja

const produkt = {
name: ‘Ksiazka JS’,
type: ‘ksiazka’,
price: 100
}
const { name, type, price } = produkt   // obiekt destrukturyzowany po prawej =
console.log(type)
console.log(price)
//
// Destrukturyzacja:

// const { name, type, price } = produkt

// Mając obiekt (produkt) z kluczami -- name, type, price. --Możemy ładniej zapisać każdy obiekt, czyli go destrukturyzować i potem używać tego co jest wewnątrz. Jest to bardzo dobra praktyka, bardzo często używana.

// Składnia:

// const - słowo kluczowe tak jak przy deklarowaniu zmiennych,

// { name, type, price } - w nawiasach “wąsatych” podajemy nazwy kluczy, które znajdują się w obiektach i dzięki temu utworzą nam się zmienne o tych nazwach,

// = - znak przypisania tak jak w tworzeniu zmiennej,

// produkt - po prawej stronie znaku przypisania dodajemy obiekt, który ma być destrukturyzowany,