async function main() {
    async function pobierzPostaci() {
        const data = await fetch(`https://rickandmortyapi.com/api/character`)
        const response = await data.json()
        return response
    }

    pobierzPostaci()
        .then((characters) => {
            const newCharacter = characters.results.splice(0, 10)
            console.log('newCharacter', newCharacter)
            const $liczbaPostaci = document.getElementById('liczba-postaci')
            $liczbaPostaci.innerHTML = characters.info.count

        }).catch(err => console.log(err, "ERROR"))

    async function downoladTenCharacters(par) {

        const dane = await fetch(`https://rickandmortyapi.com/api/character/?par=${par}`)
            .catch(err => console.log(err, "ERROR"))
        if (par >= 10) {
            const $imiePostaci = document.getElementById('imie')
            $imiePostaci.innerHTML = 'error : index wiekszy niż liczba postaci od 0 do 9'
            console.log('error : index wiekszy niż liczba postaci od 0 do 9')
            return par
        }
        if (par == null) {
            const $imiePostaci = document.getElementById('imie')
            $imiePostaci.innerHTML = 'ERROR : index jest pusty , wybierz wartośc od 0 do 9'
            console.log('error')
            return 'error'
        }
        const downolad = await dane.json()

        const $imiePostaci = document.getElementById('imie')
        $imiePostaci.innerHTML = downolad.results[par].name
        console.log(`imie z indexu ${par} :`, downolad.results[par].name)

    }
    downoladTenCharacters(5)
}
main()





