const human = {
    name: 'Tom',
    sayName() {
        console.log(`My name is ${this.name} ${this.surname} lat ${this.age}`)
    },
    sayFullName(options) {
        console.log(`My name is ${this.name} ${this.surname} lat ${this.age}, wzrost ${this.height} cm`)
    }
}

const person = {
    name: 'Adam',
    surname: 'Klos',
    age: 55,
    height: 181
}

const people = [

    {
        name: 'Artur',
        age: 25,
        surname: 'Dec'
    },
    {
        name: 'Tom',
        age: 33,
        surname: 'Boruc'
    }
]
human.sayFullName.call(person)

people.forEach(p => {
    human.sayName.apply(p, ['Kowalski', 55])
})

/* for(key in person){
human.sayFullName.apply()
  console.log(person[key])
 } */

/* person.forEach(function(aktualnaWartosc,index,array){
  console.log(aktualnaWartosc)
}) */

/* 
person.forEach(p=>{
human.sayFullName.apply(p)
}) */
