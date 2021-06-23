// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(console.log('test VSC')), 5000)
//     setTimeout(() => reject(console.log('błąd')), 8000)
// })
//     .then((res) => { console.log('resolve', res) })
//     .catch((e) => { console.log('error', e) })

// const promise2 = new Promise((resolve, reject) => {
//     if (resolve) {
//         setTimeout(() => resolve(console.log('test VSC')), 5000)
//     }
//     if (reject) {
//         setTimeout(() => reject(console.log('błąd')), 8000)
//     }
// }).then((res) => { console.log('resolve', res) }).catch((e) => console.log('error', e))

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve(console.log('test VSC')), 5000)
// }).then((res) => { console.log('resolve', res) }).catch((e) => console.log('error', e))

// fetch    i  promisy

// fetch('https://rickandmortyapi.com/api/character')
//     // .then(response => console.log(response.json()))
//     .then(response => response.json())
//     // .then(response => console.log(response))
//     // console dla sprawdzenia a dalej mozemy cos z tym zrobic
//     .then(response => {
//         response.results.forEach(({name})=>{
//             const domElement = document.createElement('div')
//             domElement.innerHTML = name     //  2 w/w liie tworza nam diva w js ale musimy je zlapac w HTML
//             const lista = document.getElementById('lista')      // łapiemy po id z htmla
//             // lista.innerHTML += name         // wypisuje w divie w htmlu tresc name 
//             lista.appendChild(domElement)       // jak wyzej tlko ze wpisuje nam zmienna
//             console.log(name)
//         })
//     })

// łatwiejszy sposób 

async function app() {

    function handleClick(){
        alert('test')
    }
    const pobierzImiona = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        // zamiast then  fn czeka az dane zejda z beckhendu i przypisuje je do zmiennych
        const data = await response.json()
        console.log('data', data)
        return data.results.map(({ name }) => name)
    }
    const imiona = await pobierzImiona()
    console.log(imiona)

    imiona.forEach(name => {
        const domElement = document.createElement('div')
        domElement.classList = 'name'
        domElement.innerHTML = name
        lista.appendChild(domElement)
    })
}
app()
