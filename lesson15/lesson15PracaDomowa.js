
// 1 a)
console.log('\n', 'Z A D A N I E : 1 a', '\n')

for (let i = 0; i < 10; i++) {
    console.log("wartość", i)
}

// 1 b) 
console.log('\n', 'Z A D A N I E : 1 b', '\n')

for (let i = 9; i > 0; i--) {
    console.log("wartość", i)
}

// 1 c) 
console.log('\n', 'Z A D A N I E : 1 c', '\n')

for (let i = 5; i <= 15; i++) {
    console.log("wartość", i)
}

// 1 d) 
console.log('\n', 'Z A D A N I E : 1 d', '\n')

for (let i = 0; i >= -10; i--) {
    console.log("wartość", i)
}

// 1 e) 
console.log('\n', 'Z A D A N I E : 1 e', '\n')

for (let i = 1; i <= 20; i += 2) {
    console.log("wartość", i)
}

// 1 f) 
console.log('\n', 'Z A D A N I E : 1 f', '\n')

for (let i = 10; i >= -10; i -= 4) {
    console.log("wartość", i)
}

// 1 g) 
console.log('\n', 'Z A D A N I E : 1 g', '\n')

for (let i = 1; i < 100; i *= 2) {
    console.log("wartość", i)
}

// 2 a) 
console.log('\n', 'Z A D A N I E : 2 a', '\n')

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0)
        console.log("wartość", i)
}

// 2 b) 
console.log('\n', 'Z A D A N I E : 2 b', '\n')

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0)
        console.log("wartość", i)
}

// 2 c) 
console.log('\n', 'Z A D A N I E : 2 c', '\n')

for (let i = 0; i <= 20; i++) {
    console.log(i % 2 === 0 ? `parzysta ${i}` : `nieparzysta ${i}`)
}

// 2 d) 
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

// 2 e) 
console.log('\n', 'Z A D A N I E : 2 e', '\n')

for (i = 100; i >= 0; i -= 5) {
    if (i % 10 === 0) {
        console.log(i, "Podzielna przez 10")
    } else {
        console.log(i)
    }
}

// 3 a) 
console.log('\n', 'Z A D A N I E : 3 a', '\n')

function startLoop(startNumber) {
    for (let i = 0; i <= startNumber; i++) {
        console.log(i)
    }
}
startLoop(10)
// 3 b) 
console.log('\n', 'Z A D A N I E : 3 b', '\n')

function strartLoop15(startNumber) {
    for (let i = startNumber; i <= 15; i++)
        console.log(i)
}
strartLoop15(12)
// 3 c)
console.log('\n', 'Z A D A N I E : 3 c', '\n')

function startLoopHowMuchToIncrase(increase) {
    for (let i = 0; i <= 15; i += increase)
        console.log(i)
}
startLoopHowMuchToIncrase(5)

// 3 d) 
console.log('\n', 'Z A D A N I E : 3 d', '\n')

function startLoopStopLoop(start, stop) {
    for (let i = start; i <= stop; i++)
        console.log(i)
}
startLoopStopLoop(2, 5)
// 3 e) 
console.log('\n', 'Z A D A N I E : 3 e', '\n')

function startStopIncreaseLoop(start, stop, increase) {
    for (let i = start; i <= stop; i += increase) {
        console.log(i)
    }
}
startStopIncreaseLoop(1, 10, 2)

// 4 a) 
console.log('\n', 'Z A D A N I E : 4 a', '\n')

const tabFive = [1, "dwa", 3, "cztery", 5]

function tabWrite() {
    for (let i = 0; i < tabFive.length; i++) {
        console.log(tabFive[i])
    }
}
tabWrite()

// 4 b) 
console.log('\n', 'Z A D A N I E : 4 b', '\n')

const tabName = ["Adam", "Ewa", "Jacek", "Agata"]

function displayString() {
    for (let i = 0; i < tabName.length; i++) {
        let powitanie = ` Cześć ${tabName[i]} `
        console.log(powitanie)
    }
}
displayString()

// 4 c) 
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

// 4 d) 
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

// 4 e) ** 
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

// 4 f) ** 
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

// 5 a) 
console.log('\n', 'Z A D A N I E : 5 a', '\n')

const tabFirst = [1, 2, 3, 4, 5]

function sumArray(addUp) {
    console.log("ilość elementów tablicy to :", addUp.length)
}
sumArray(tabFirst)

// 5 b) 
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

// 5 c) 
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

// 5 d) 
console.log('\n', 'Z A D A N I E : 5 d', '\n')

function reduce(num) {
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    console.log(num);
}
reduce(5);

// 5 e) 
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

// 5 f) 
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

// 5 g) 
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