const arr = [192, 511, 119, 119]



function some2(fn) {
    for (let i = 0; i < this.length; i++) {
        const number = this[i]
        if (fn(number)) {
            return true
        }
    }
    return false
}

function every2(fn) {
    for (let i = 0; i < this.length; i++) {
        const number = this[i]
        if (!fn(number)) {
            return false
        }
    }
    return true
}

Array.prototype.some2 = some2
Array.prototype.every2 = every2

// const biggerThan100 = arr.some(number => number > 100)
const biggerThan1002 = arr.every2(number => number > 100)


// console.log(biggerThan100)
console.log(biggerThan1002)