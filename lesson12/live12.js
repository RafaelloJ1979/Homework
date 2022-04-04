function obliczCene(name, price, vat) {
  return (name * price) / 23;
  console.log((name * price) / 23);
}

obliczCene("Książka JS", 100, 23);

//Cena produktu Ksiązka JS to 123 pln

/* 

function obliczCene(name,price,vat){
const totalPrice = price + price * vat / 100

return "Cena produktu " + name + " to " * totalPrice + " PLN"

}
console.log(obliczCene('Ksiazka JS',108, 23))
console.log(obliczCene('Ksiazka  React', 80, 15,))
console.log(obliczCene('Odkurzacz' , 1000 ,8))


obliczCene('Książka JS',100,23)

//Cena produktu Ksiązka JS to 123 pln */
// -------------------------------------(
  // { name , type , price} )

  function obliczCene(obj) {
    const stawkiVAT = {
      ksiazka: 8,
      szkolenie: 23,
      hotel: 13,
    };

    /* const stawkaVAT = stawkiVAT.ksiazka */
    const stawkaVAT = stawkiVAT[obj.type];
    const totalPrice = obj.price + (obj.price * stawkaVAT) / 100;
    return `Cena produktu ${obj.type} o nazwie ${obj.name} to ${totalPrice} PLN`;
    /* console.log(stawkaVAT) */
  }


const produkt = {
  name: "Paradaie",
  price: 100,
  type: "hotel",
  age: 10,
  surname: "Adam",
};

console.log(obliczCene(produkt));

// ---------------------------------

function licznik() {
  let ile = 0;

  function zwieksz() {
    ile = ile + 1;
  }

  function zmniejsz() {
    ile = ile - 1;
  }
  zwieksz();
  zwieksz();

  return {
    value: ile,
  };

  //obiekt w return
  return {
    ile: ile,
    incrase: zwieksz,
    decrease: zmniejsz,
  };
};

const instancjaLicznika = licznik();

console.log(instancjaLicznika);
