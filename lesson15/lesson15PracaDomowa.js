// zad 1
// a) wyświetli wartości od 1 do 9,
console.log('\n', 'Z A D A N I E : 1 a', '\n')

for (let i = 0; i < 10; i++) {
    console.log("wartość", i)
}
// b) wyświetli wartości od 9 do 1,
console.log('\n', 'Z A D A N I E : 1 b', '\n')

for (let i = 9; i > 0; i--) {
    console.log("wartość", i)
}
// c) wyświetli wartości od 5 do 15,
console.log('\n', 'Z A D A N I E : 1 c', '\n')

for (let i = 5; i <= 15; i++) {
    console.log("wartość", i)
}
// d) wyświetli wartości od 0 do -10,
console.log('\n', 'Z A D A N I E : 1 d', '\n')

for (let i = 0; i >= -10; i--) {
    console.log("wartość", i)
}
// e) wyświetli wartości od 1 do 20 zwiększając się co 2 w każdej iteracji,
console.log('\n', 'Z A D A N I E : 1 e', '\n')

for (let i = 1; i <= 20; i += 2) {
    console.log("wartość", i)
}
// f) wyświetli wartości od 10 do -10 zmniejszając się o 4 w każdej iteracji,
console.log('\n', 'Z A D A N I E : 1 f', '\n')

for (let i = 10; i >= -10; i -= 4) {
    console.log("wartość", i)
}
// g) wyświetli wartości od 1 do 100 zwiększając liczbę co iterację mnożąc ją razy 2,
console.log('\n', 'Z A D A N I E : 1 g', '\n')

for (let i = 1; i < 100; i *= 2) {
    console.log("wartość", i)
}
// zad 2

// a) wyświetli wartości od 0 do 20, ale tylko liczby parzyste,
console.log('\n', 'Z A D A N I E : 2 a', '\n')

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0)
        console.log("wartość", i)
}
// b) wyświetli wartości od 0 do 20, ale tylko liczby nieparzyste,
console.log('\n', 'Z A D A N I E : 2 b', '\n')

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0)
        console.log("wartość", i)
}
// c) wyświetli wartości od 0 do 10, ale tam gdzie jest liczba parzystą pokaże napis liczba parzysta, a tam gdzie nie niech wyświetli napis liczba nieparzysta,
console.log('\n', 'Z A D A N I E : 2 c', '\n')

for (let i = 0; i <= 20; i++) {
    console.log(i % 2 === 0 ? `parzysta ${i}` : `nieparzysta ${i}`)
}
// d) wyświetli liczby od 1 do 30 i tam gdzie liczba jest podzielna tylko przez 3 niech pokaze Fizz, tam gdzie przez 5 niech
// pokaże Buzz, a tam gdzie przez 3 i 5 niech wyświetli FizzBuzz, w reszcie przypadków niech pokaże po prostu cyfry,
// obok niech napis "- podzielna przez 10",
console.log('\n', 'Z A D A N I E : 2 d', '\n')

for (i = 0; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz`, i)
    } else if (i % 3 === 0) {
        console.log(i, `Fizz`)
    } else if (i % 5 === 0) {
        console.log(`Buzz`, i)
    } else {
        console.log(i)
    }
}
// e) wyświetli liczby od 100 do 0, ale zmniejszając się o 5 co iteracje i jak liczba jest podzielna przez 10 to niech doda
// obok niech napis "- podzielna przez 10",
console.log('\n', 'Z A D A N I E : 2 e', '\n')

for (i = 100; i >= 0; i -= 5) {
    if (i % 10 === 0) {
        console.log(i, "Podzielna przez 10")
    } else {
        console.log(i)
    }
}
// // zad 3 Napisz funkcje, która:

// a) przyjmuje jako parametr liczbe do której wykona się pętla od 0,
console.log('\n', 'Z A D A N I E : 3 a', '\n')

function startLoop(startNumber) {
    for (let i = 0; i <= startNumber; i++) {
        console.log(i)
    }
}
startLoop(10)
// b) przyjmuje jako parametr liczbe od której pętla się wykona do 15,
console.log('\n', 'Z A D A N I E : 3 b', '\n')

function strartLoop15(startNumber) {
    for (let i = startNumber; i <= 15; i++)
        console.log(i)
}
strartLoop15(12)
// c) przyjmuje jako parametr liczbę wskazującą o ile ma się zwiększać pętla co iteracje i wyświetla taką pętle od 0 do 15,
console.log('\n', 'Z A D A N I E : 3 c', '\n')

function startLoopHowMuchToIncrase(increase) {
    for (let i = 0; i <= 15; i += increase)
        console.log(i)
}
startLoopHowMuchToIncrase(5)

// d) przyjmuje dwa parametry, liczbę od której ma się pętla rozpocząć i do jakiej ma trwać,
console.log('\n', 'Z A D A N I E : 3 d', '\n')

function startLoopStopLoop(start, stop) {
    for (let i = start; i <= stop; i++)
        console.log(i)
}
startLoopStopLoop(2, 5)
// e) przyjmuje trzy argumenty, pierwszy - liczba od której zaczynamy pętle, drugi - liczbę do której pętla ma trwać, trzeci -
//     liczbę co ile ma się pętla zwiększać,
console.log('\n', 'Z A D A N I E : 3 e', '\n')

function startStopIncreaseLoop(start, stop, increase) {
    for (let i = start; i <= stop; i += increase) {
        console.log(i)
    }
}
startStopIncreaseLoop(1, 10, 2)

//zad 4  Napisz funkcje, która:

// a) stwórz tablice 5 elementową i za pomocą pętli wypisz wszystkie jej elementy,
console.log('\n', 'Z A D A N I E : 4 a', '\n')

const tabFive = [1, "dwa", 3, "cztery", 5]

function tabWrite() {
    for (let i = 0; i < tabFive.length; i++) {
        console.log(tabFive[i])
    }
}
tabWrite()

// b) stwórz tablice z kilkoma imionami i wyświetl "Cześć {imie}"
// za pomocą pętli dla każdego imienia,
console.log('\n', 'Z A D A N I E : 4 b', '\n')

const tabName = ["Adam", "Ewa", "Jacek", "Agata"]

function displayString() {
    for (let i = 0; i < tabName.length; i++) {
        let powitanie = ` Cześć ${tabName[i]} `
        console.log(powitanie)
    }
}
displayString()

// lub?
// const tabName = ["Adam", "Ewa", "Jacek", "Agata"]

// function displayString() {
//     for (let i = 0; i < tabName.length; i++) {
//         console.log(` Cześć ${tabName[i]} `)
//     }
// }
// displayString()

// c) stwórz tablicę z obiektami, w każdym obiekcie niech będzie model auta i kolor, i wyświetl w stringu "Przed Wami stoi {kolor} {model}",
console.log('\n', 'Z A D A N I E : 4 c', '\n')

const sportsCars = [

    {
        marka: "Porsche",
        model: "911 Carrera",
        color: "Red"
    },
    {
        marka: "BMW",
        model: "Z4",
        color: "Black"
    },
    {
        marka: "Aston Martin",
        model: "Vantage",
        color: "Silver"
    },
]

function giveMeCar(view) {
    for (let i = 0; i < view.length; i++) {
        console.log(`Przed Wami stoi ${view[i].marka} ${view[i].model} w kolorze ${view[i].color}`)
    }
}
giveMeCar(sportsCars)

// d) stwórz tablicę z 10 elementami, czyli cyframi od 1 do 10 i niech wyświetli ona tylko liczby parzyste z tej tablicy
console.log('\n', 'Z A D A N I E : 4 d', '\n')

const tabNumberTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenNumber() {
    for (let i = 1; i <= tabNumberTen.length; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
evenNumber()

// e) ** stwórz tablice kilku elementową o różnych typach i wyświetl z tablicy tylko te elementy które są stringami,
console.log('\n', 'Z A D A N I E : 4 e', '\n')

const mixTable = ["Jakiś tekst", 5, "Adam", 10, "Warszawa", 7, ];

function checkTable(stringDisplay) {
    for (let i = 0; i < stringDisplay.length; i++) {
        if (typeof stringDisplay[i] === "string") {
            console.log(stringDisplay[i]);
        }
    }
}
checkTable(mixTable);

// f) ** stwórz tablice kilku elementową o różnych typach i wrzuć wszystkie elementy które w tej tablicy są numberami do nowej tablicy,
console.log('\n', 'Z A D A N I E : 4 f', '\n')

const mixTable2 = ["Jakiś tekst", 5, "Adam", 10, "Warszawa", 15];
let tab1 = []

function checkTableTwo(stringDisplay) {
    for (let i = 0; i < stringDisplay.length; i++) {
        if (typeof stringDisplay[i] === "number") {
            tab1.push(stringDisplay[i])
        }
    }
    console.log("tab1 ", tab1, "mixTable2", mixTable2)
}
checkTableTwo(mixTable2)

// zad 5    // Napisz funkcję, która:  

// a) przyjmuje tablicę liczb jako parametr i liczy sume elementów tej tablicy,
console.log('\n', 'Z A D A N I E : 5 a', '\n')

const tabFirst = [1, 2, 3, 4, 5]

function sumArray(addUp) {
    console.log("ilość elementów tablicy to :", addUp.length)
}
sumArray(tabFirst)

// b) przyjmuje tablicę z numberami i z tego tworzy dwie nowe tablice z liczbami parzystymi i nieparzystymi,
console.log('\n', 'Z A D A N I E : 5 b', '\n')

const tabNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenAndOdd(evenOdd) {
    let evenTab = []
    let oddTab = []

    for (let i = 0; i < evenOdd.length; i++) {
        if (evenOdd[i] % 2 === 0) {
            evenTab.push(evenOdd[i])
        } else {
            oddTab.push(evenOdd[i])
        }
    }
    console.log("evenTab", evenTab)
    console.log("oddTab", oddTab)
}
evenAndOdd(tabNumber)

// c) przyjmuje string jako parametr i jeśli string zawiera w sobie "y"
// niech wyświetli Jest!, a w inny przypadku Nie ma!
console.log('\n', 'Z A D A N I E : 5 c', '\n')

let text = "yes yes"

function giveMeString(string) {
    for (let i = 0; i < string.length; i++)
        if (string[i] === "y") {
            console.log(i, "Jest!")
        } else {
            console.log(i, "Nie ma!")
        }
}
giveMeString(text)

// d) przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone o 1 aż do 1 ego, np.
// countResult(4) // 4 * 3 * 2 * 1 = 24
// // Przykładowy wynik
// // 24
console.log('\n', 'Z A D A N I E : 5 d', '\n')

function reduce(num) {
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    console.log(num);
}
reduce(5);

// e) Przyjmuje tablicę jako jeden parametr i string "number"
// lub "string"
// jako drugi parametr, w zależności od drugiego parametru niech funkcja
// dodaje do siebie elementu number lub string do siebie tworząc sumę lub jeden długi string, jeśli drugi parametr nie będzie sie zgadzał z "number"
//     lub "string"
// to
// niech pokaże odpowiedni komunikat "Drugi parametr jest nieprawidłowy!", dodaj jeszcze zabezpieczenie jeśli tablica będzie pusta
console.log('\n', 'Z A D A N I E : 5 e', '\n')

const arrayOne = [10, "555"]

function takesTheNumberAndTheText(tab = 1, string) {
    for (let i = 0; i < tab.length; i++) {
        if (typeof string === "number" || typeof string === "string") {
            console.log(tab[i] + string)
        } else {
            console.log("Drugi parametr jest nieprawidłowy!")
        }
    }
}
takesTheNumberAndTheText(arrayOne, 55)

// f) przyjmuje jako parametr tablicę obiektów.W każdym obiekcie powinno znajdować się: name, lastName, hasCar, hasDrivingLicence.Niech będzie
// to tablica z 4 osobami.Stwórz funkcję które przyjmie taką tablicę jako parametr i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię
// zabrać do domu z imprezy, niech również wyświetli odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego,
console.log('\n', 'Z A D A N I E : 5 f', '\n')

const footballers = [

    {
        name: "Robert",
        lastName: "Lewandowski",
        hasCar: true,
        hasDriveinLicence: true
    },
    {
        name: "Sławek",
        lastName: "Peszko",
        hasCar: false,
        hasDriveinLicence: false
    },
    {
        name: "Leo",
        lastName: "Messi",
        hasCar: true,
        hasDriveinLicence: false
    },
    {
        name: "Cristiano",
        lastName: "Ronaldo",
        hasCar: true,
        hasDriveinLicence: true
    },
]

function showMeWho(view) {
    for (let i = 0; i < view.length; i++) {
        if (view[i].hasCar === true && view[i].hasDriveinLicence === true) {
            console.log(`Z imprezy możesz wrócić z ${view[i].name} ${view[i].lastName}, poniewż posiada auto i prawo jazdy`)
        } else if (view[i].hasCar === true && view[i].hasDriveinLicence === false) {
            console.log(`${view[i].name} ${view[i].lastName} posiada auto lecz nie ma prawa jazdy `)
        } else {
            console.log(`${view[i].name} ${view[i].lastName} nie ma auta i papierów`)
        }
    }
}
showMeWho(footballers)

// g) przyjmuje jako parametr tablice i nowy element do tablicy.Funkcja ta powinna przeiterować tablice sprawdzając czy już taki element w niej jest
// jeśli go nie ma to dodać do tablicy, a jak jest to wyświetlić odpowiedni komunikat,
console.log('\n', 'Z A D A N I E : 5 g', '\n')

let tableString = ["one", "two", "three", "four", "five"]

function addToTable(tabOne, newElement) {

    for (let i = 0; i < tabOne.length; i++) {
        i = newElement
        if (tabOne.includes(newElement) !== newElement.includes(newElement)) {

            console.log(`Dodano do tablicy element, ${newElement}`)
            tabOne.push(newElement)
        } else {
            console.log(`W tablicy juz jest element : ${newElement}`)
        }
    }
}
addToTable(tableString, "xxx")

console.log(tableString)