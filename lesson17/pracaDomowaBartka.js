// Napisz funkcję, która:
//     a) przyjmuje tablicę liczb jako parametr i liczy sume elementów tej tablicy,

arr = [1,2,3] ,Array=Number


function sumaElementow(arr) {
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    return suma
}
console.log(sumaElementow([1, 2, 3, 4, 5]) === 15)
console.log(sumaElementow([1, -2, 3, 9]) === 11)
console.log(sumaElementow([]) === 0)

// b) przyjmuje tablicę z numberami i z tego tworzy dwie nowe tablice z liczbami parzystymi i nieparzystymi,

function splitOddAndEven(arr) {
    const odd = []
    const even = []
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i]
        number % 2 === 0 ?
            even.push(number) : odd.push(number)
        if (number % 2 === 0) {
            even.push(number)
        } else {
            odd.push(number)
        }
    }
    return {
        odd,
        even
    }
}

const result = {
    odd: [1, 3, 5],
    even: [2, 4]
}

console.log(result)
console.log(JSON.stringify(splitOddAndEven[1, 2, 3, 4, 5])) === JSON.stringify(result)

console.log(sumaElementow([1, 2, 3, 4, 5]))
console.log(sumaElementow([1, -2, 3, 9]))
console.log(sumaElementow([]))

// c) przyjmuje string jako parametr i jeśli string zawiera w sobie "y"
// niech wyświetli Jest!, a w inny przypadku Nie ma!

function giveMeString(string) {
    if (string.includes("y")) {

        console.log("Jest!")
    } else {
        console.log("Nie ma!")
    }
}
giveMeString("yes")
giveMeString("no")

function czyJestY(str) {
    for (let i = 0; i < str.length; i++){
        const letter = str[i]
        if (letter === 'y') {
            console.log('Jest')
        return
        }

    }

    console.log('Nie ma!')
}
czyJestY('asdys')

function czyJestY(str) {
    if (str.includes('y')) {
        console.log('Jest')
        return
    }
    console.log('Nie ma!')
}
czyJestY('asds')

    // d) przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone o 1 aż do 1 ego, np.  countResult(4) // 4 * 3 * 2 * 1 = 24
// Przykładowy wynik
// 24

function multiply(number) {
    let result = 1
    for (let i = number; i >= 1; i--) {
        result *= i
    }
    return result
}
console.log(multiply(4) === 24)

// e) Przyjmuje tablicę jako jeden parametr i string "number"
// lub "string"
// jako drugi parametr, w zależności od drugiego parametru niech funkcja
// dodaje do siebie elementu number lub string do siebie tworząc sumę lub jeden długi string, jeśli drugi parametr nie będzie sie zgadzał z "number"
//     lub "string"
// to
// niech pokaże odpowiedni komunikat "Drugi parametr jest nieprawidłowy!", dodaj jeszcze zabezpieczenie jeśli tablica będzie pusta

str = 'number' || 'string' 

function dodaj(arr, str) {

    if (arr.length == 0) {
        console.log('Pusta tablica')
        return
    }

    if (!['number', 'string'].includes(str)) {
        console.log('Drugi parametr jest nie prawidłowy')
        return
    }

    let result = str === 'string' ? '' : 0

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i]
        if (str === 'string') {
            result += value.toString()
        } else {
            result += +value
        }
    }
    return result
}

console.log(dodaj([1, 2, "3"], 'number'))
console.log(dodaj([1, 2, "3"], 'string'))

// f) przyjmuje jako parametr tablicę obiektów.W każdym obiekcie powinno znajdować się: name, lastName, hasCar, hasDrivingLicence.Niech będzie
// to tablica z 4 osobami.Stwórz funkcję które przyjmie taką tablicę jako parametr i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię
// zabrać do domu z imprezy, niech również wyświetli odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego,

[{
    name,
    lastName,
    hasCar,
    hasDrivingLicence
}]

function canDrive(people) {
    for (let i = 0; i < people.leng; i++){
        const { name, lastName, hasCar, hasDrivingLicence } = people[i]
        if (name == undefined || lastName == undefined || hasCar == undefined || hasDrivingLicence == undefined) {
            console.log('Brak danych')
            return
        }
        if (hasCar && hasDrivingLicence) {
            console.log('ma prawko')
        }
        // itd  warunki sprawdzające
    }
}

canDrive([{
    name:'Bartek',
    lastName:'Łoza',
    hasCar:true,
    // hasDrivingLicence:true
}])

//  g)  // przyjmuje jako parametr tablice i nowy element do tablicy.Funkcja ta powinna przeiterować tablice sprawdzając czy już taki element w niej jest
// jeśli go nie ma to dodać do tablicy, a jak jest to wyświetlić odpowiedni komunikat,

function addToTable(arr, el) {
    for (let i = 0; i < arr.length; i++){
        const current = arr[i]
        if (el === current) {
            console.log('Taki element juz istnieje')
            return
        }
    }
    arr.push[el]
}

const arr = [1, 2, 3]
addToTable(arr, 4)

console.log(arr)