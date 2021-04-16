const person = {
    age: 30,
    isDrunk: true,
    name: "Kasia",
  }
  
  function canServBeer(osoba) {
  
    if (osoba >= 18) {
      console.log(person.name + " oto Twoje winko")
    } else if (osoba < 18) {
      console.log(person.name + " , przykro mi, dzisiaj nie ma winka")
    }
    return person
  
  }
   const osoba = canServBeer(1)
  