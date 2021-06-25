const human = {
    name: 'Tom',
    sayName() {
        console.log(`My name is ${this.name}`)
    },
    sayFullName: function (surname, age) {
        console.log(`My name is ${this.name} ${surname}`)
    }
}
// metoda call

const personA = {
    name: 'Artur'
}
const personB = {
    name: 'Tom'
}
human.sayName.call(personB)
const people = [

    {
        name: 'Artur'
    },
    {
        name: 'Tom'
    }
]

people.forEach(p => {
    human.sayName.call(p)
})

// metoda apply

people.forEach(p => {
    human.sayFullName.apply(p, ['surname', 55])
})

const human2 = {
    /*  name: 'Tom', */
    sayName() {
        console.log(`My name is ${this.name}`)
    },
    sayFullName: function (surname, age) {
        console.log(`My name is ${this.name} ${surname} lat ${age}`)
    }
}
const person = {
    name: 'ADam',
    age: 55,
    surname: 'Dec'
}

people.forEach(p => {
    human2.sayFullName.apply(p, ['Kowalski', 55])
})


