// function Promise2() {
//     this.then = () => {
//         console.log('then')
//     }
// }
// const fakePromise = new Promise2()
// fakePromise.then()

// mozemy wyniesc po za fn zeby miec dostep  w then

// const imieDiv = document.getElementById('imie')  

// function pobierzImie(index) {
//     const imiona = ['Mateusz','Kasia','Agnieszka','Łukasz','Grzesiek','Piotrek']
//     const imieDiv = document.getElementById('imie')
//     imieDiv.innerHTML = 'Loading'
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('Mateusz'), 2000)
//     })
// }
// const promise = pobierzImie()
// promise.then((response) => {
//     const imieDiv = document.getElementById('imie')
//     imieDiv.innerHTML = response
// })

// --------------------------------

// async function main() {
//     function pobierzImie(index, czas = 1000) {
//         const imiona = ['Mateusz', 'Kasia', 'Agnieszka', 'Łukasz', 'Grzesiek', 'Piotrek']
//         return new Promise((resolve) => {
//             setTimeout(() => resolve(imiona[index]), czas)
//         })
//     }

// ponizsze promisy wykonaja sie jak ostatni zostanie zwrocony

//     const promise1 = pobierzImie(2)
//     const promise2 = pobierzImie(4)
//     const promise3 = pobierzImie(5,4000)
//     Promise.all([promise1, promise2, promise3]).then(Response => console.log(Response))

// n/w wykonaja sie niezaleznie a po wykonaniu ostatniego dostaniemy promise ALL
// then odkłada na bok , pomija kod i wykonuje poerwsze w kolejnosci.
// w pdzypadku promisow kod wykonuje sie asynchro poniweaz then odkłada do kolejki na póxniej

//     const promise1 = pobierzImie(2,3000)
//     promise1.then(response => {
//         console.log('imie 1',response)
//     })
//     const promise2 = pobierzImie(4,1000)
//     promise2.then(response => {
//         console.log('imie 2',response)
//     })
//     const promise3 = pobierzImie(5, 2000)
//     promise3.then(response => {
//         console.log('imie 3',response)
//     })
//     Promise.all([promise1, promise2, promise3]).then(Response => console.log(Response))

// n/w kod async await wykonuje sie linijka po linijce , poniewz jest to kod asynchroniczny pisay w sposob synchroniczny // AWAIT czeka ,blokuje az wykona sie dane z np pobierzImie

//     const imie1 = await pobierzImie(2)
//     console.log('imie1', imie1)

//     const imie2 = await pobierzImie(4)
//     console.log('imie2', imie2)

//     const imie3 = await pobierzImie(5)
//     console.log('imie3', imie3)

// }
// main()

// **********************   PROJEKT L24 ******************** //

let page = 1;
let info = null;
let allPage = ''

async function main() {
    const $buttonPrev = document.getElementById('prev')
    const $buttonNext = document.getElementById('next')
    // console.log('before info', info)

    $buttonPrev.addEventListener('click', async (el) => {

        if (info.prev === null) {
            alert('Jesteś na pierwszej stronie')
            return
        }
        page--

        const characters = await pobierzPostaci()
        info = characters.info
        const $listaPostaci = document.getElementById('lista')
        $listaPostaci.innerHTML = ''    // czyszczenie listy
        characters.results.forEach(stworzKartePostaci)
        // pobierzPostaci()
        // console.log('fn', pobierzPostaci())      wywoływanie fn podczas kliku
        // console.log('after info', info)
        // el.target.innerHTML = 'kliknołeś' // zmiana teksty na buttonie
    })

    $buttonNext.addEventListener('click', async (el) => {
        if (info.next === null) {
            alert('Jesteś na ostatniej stronie')
            return
        }
        page++

        const characters = await pobierzPostaci()
        info = characters.info
        const $listaPostaci = document.getElementById('lista')
        $listaPostaci.innerHTML = ''    // czyszczenie listy
        characters.results.forEach(stworzKartePostaci)
        // pobierzPostaci()
        // console.log('fn', pobierzPostaci())      wywoływanie fn podczas kliku
        // console.log('after info', info)
        // el.target.innerHTML = 'kliknołeś' // zmiana teksty na buttonie
    })

    async function pobierzPostaci() {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const response = await data.json()
        response.results.splice(0, 10)
        const $aktualnaStrona = document.getElementById('aktualna-strona')
        $aktualnaStrona.innerHTML = page
        return response
    }

    function stworzKartePostaci(data) {
        const $card = document.createElement('div')
        $card.classList = 'card'

        const $img = document.createElement('img')
        $img.src = data.image
        $img.alt = data.name

        $card.appendChild($img)

        const $container = document.createElement('div')
        $container.classList = 'container'

        const $name = document.createElement('h4')
        $name.innerHTML = data.name

        const $species = document.createElement('p')
        $species.innerHTML = data.$species

        $container.appendChild($name)
        $container.appendChild($species)
        $card.appendChild($container)

        const $lista = document.getElementById('lista')
        $lista.appendChild($card)
    }

    // stworzKartePostaci()

    const characters = await pobierzPostaci()

    // wrzucamy iformacje do zmiennej INFO

    info = characters.info

    allPage = characters.info.pages

    const $liczbaWszystkichStron = document.getElementById('wszystkie-strony')
    $liczbaWszystkichStron.innerHTML = allPage

    console.log(allPage)

    const $listaPostaci = document.getElementById('liczba-postaci')
    $listaPostaci.innerHTML = characters.info.count

    console.log('char', characters)

    // characters.results.forEach((characters)=>stworzKartePostaci(characters))
    // albo krócej

    characters.results.forEach(stworzKartePostaci)

}
main()

/* <div class="card">
<img src="img_avatar.png" alt="Avatar" style="width:100%">
<div class="container">
<h4><b>John Doe</b></h4>
<p>Architect & Engineer</p>
</div>
</div> */

    // episode: (41) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/
    // gender: "Male"
    // id: 1
    // image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    // location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
    // name: "Rick Sanchez"