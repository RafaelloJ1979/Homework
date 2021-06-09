// console.log('\n odp.  zad 1', '\n');

console.log(`odp zad 1 Kod asynchroniczny wykona się dopiery gdy dostanie odpowiedź ze źródła .Kod taki nie czeka na wykonanie reszty kodu ,a wykona się dopieor po spełnieniu obietnicy`)

// odp 2  ver 1//

fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then((response)=>console.log('odp zad 2 v1',response))

// odp zad 2 i 3

const promiseZad2 = new Promise((resolve, reject) => {
    const data = fetch('https://rickandmortyapi.com/api/character')
    resolve(data)
})
promiseZad2
    .then(res => res.json())
    .then(res => console.log('odp zad 2 i 3',res)
    )
    .catch(err => console.log('Error zad 2 i 3',err, "Ups coś poszło nie tak!"))

// odp zad 2 i 3 

const data2 = fetch('https://rickandmortyapi.com/api/character/')
function promise(par) {
    return new Promise((resolve, reject) => {
            resolve(par)
    });
}
const wynik = promise(data2)
    .then(res => res.json())
    .then(res => {
        console.log('odp zad 2 i 3 v2',res)
    }).catch(err => {
        console.log('ERROR zad 2 i 3 v2',err,'Ups coś poszło nie tak')
    })

// odp zad 4

const asynchro = async ()=> {
    const dane = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await dane.json()
    console.log('odp zad 4 async',data)
}
asynchro().catch(err=>console.log(err,`Error zad 4`,'Ups coś poszło nie tak',))

// odp zad 5
// v1
const promiseZad5 = new Promise((resolve, reject) => {
    const data = fetch('https://rickandmortyapi.com/api/character/,5')
    resolve(data)
})
promiseZad5
    .then(res => res.json())
    .then(res => console.log('odp zad 5 v1',res,'PROMISE : postać nr 5 ')
    )
    .catch(err => console.log('Error zad 5 v1',err, "Ups coś poszło nie tak!"))
// v2
    const asynchroZad5 = async(par)=>{
        const dane = await fetch(`https://rickandmortyapi.com/api/character/${par}`)
        const postac = await dane.json()
        console.log('odp zad 5 v2',`Wybrana postać nr ${par} to: ${postac.name}`,postac)
    }
    asynchroZad5(1)