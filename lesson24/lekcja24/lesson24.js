// 4 rodzaje
// page--
// page = page -1
// page -= 1
// --page

// el.target.innerHTML = 'kliknołeś' // zmienia teks buttona
// $buttonNext.addEventListener('click')

let page = 1
let info = null

async function main() {
  const $buttonPrev = document.getElementById('prev')
  const $buttonNext = document.getElementById('next')
  console.log('info before', info)

  $buttonPrev.addEventListener('click', async (el) => {
    // zabezpieczenie if
    if (info.prev === null) {
      alert('jesteś na pierwszej stronie')
      return
    }
    page--

    const characters = await pobierzPostaci()
    info = characters.info
    const $listaPostaci = document.getElementById('lista')
    $listaPostaci.innerHTML = ''
    characters.results.forEach(stworzKartePostaci)

  })

  $buttonNext.addEventListener('click', async (el) => {
    // zabezpieczenie if
    if (info.next === null) {
      alert('jesteś na ostatniej stronie')
      return
    }
    page++

    const characters = await pobierzPostaci()
    info = characters.info
    const $listaPostaci = document.getElementById('lista')
    $listaPostaci.innerHTML = ''

    characters.results.forEach(stworzKartePostaci)

  })


  // fn pobiera postaci 
  async function pobierzPostaci() {

    const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const response = await data.json()
    return response
  }
  
  {/* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div> */}

  //  fn stworz karte postac

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
    $species.innerHTML = data.species

    $container.appendChild($name)
    $container.appendChild($species)
    $card.appendChild($container)

    const $lista = document.getElementById('lista')
    $lista.appendChild($card)
  }

  // pobieramy 
  const characters = await pobierzPostaci()
  info = characters.info
  const $listaPostaci = document.getElementById('liczba-postaci')
  $listaPostaci.innerHTML = characters.info.count

  console.log('char', characters)

  characters.results.forEach(stworzKartePostaci)
}
main()



