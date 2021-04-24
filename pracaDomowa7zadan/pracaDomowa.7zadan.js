// zadanie 1:
//w formie obiektu

function viewCar(auto) {
  auto = auto || car; //domyślne wartości przy wywołaniu //
  console.log(
    `samochód marki ${auto.mark}, model: ${auto.model} z ${auto.yearProd} roku`
  );
  return auto;
}
const car = {
  mark: "Audi",
  model: "R8 Spyder",
  yearProd: 2019,
};
viewCar(car);

//w formie listy

function viewCar(marka, model, rokProdukcji) {
  marka = marka || car.mark; //domyślne wartości przy wywołaniu //
  model = model || car.model; //domyślne wartości przy wywołaniu //
  rokProdukcji = rokProdukcji || car.yearProd; //domyślne wartości //

  console.log(
    `samochód marki: ${marka} model: ${model} z roku ${rokProdukcji}`
  );
  return `samochód marki: ${marka} model: ${model} z roku ${rokProdukcji}`;
}
const car = {
  mark: "Audi",
  model: "R8 Spyder",
  yearProd: 2019,
};
viewCar(car.mark, car.model, car.yearProd);

// zad 2 Destrukturyzacja:

const car = {
  mark: "Audi",
  model: "R8 Spyder",
  yearProd: 2019,
};
const { mark, model, yearProd } = car;
console.log(model);

// zad 3

const car = { mark: "Audi", model: "R8 Spyder", yearProd: 2019 };
function viewCar(auto) {
  auto = auto || car; //domyślne wartości przy wywołaniu //
  const { mark, model, yearProd } = car;
  console.log(`samochód marki ${mark}, model: ${model} z ${yearProd} roku`);
  /*  return `samochód marki ${mark}, model: ${model} z ${yearProd} roku` */
  return auto;
}
viewCar();

//zad 4

let x = 5;
x = x++;
console.log(x++); //5 inkementacja nastąpi dopiero w następnej lini
console.log(x); //6 wartość po inkrementacji w lini powyżej

let x = 5;
console.log(++x); //6
console.log(x); //6

function num(a) {
  let x = a++; // inkementacja nastąpi dopiero w następnej lini tj. w console.log
  console.log(a);
  return ++a; // inkementacja w tej samej lini // return zwraca 3
}
num(2);

//  zad 5

// ver. nr 1
function kosz() {
  const aktualnyWynik = {
    stan: 0,
  };

  function rzutZaDwaPkt() {
    aktualnyWynik.stan = aktualnyWynik.stan + 2;
  }

  function rzutZaTrzyPkt() {
    aktualnyWynik.stan = aktualnyWynik.stan + 3;
  }
  return {
    aktualnyWynik,
    rzutZaDwaPkt: rzutZaDwaPkt,
    rzutZaTrzyPkt: rzutZaTrzyPkt,
  };
}
const punkty = kosz();
punkty.rzutZaDwaPkt();
punkty.rzutZaDwaPkt();
punkty.rzutZaTrzyPkt();
console.log("ilość zdobytych pkt ", punkty.aktualnyWynik.stan);

// ver. nr 2 z parametrami i arg

function kosz() {
  const aktualnyWynik = {
    stan: 0,
  };

  function rzutZaDwaPkt(twoThrow) {
    aktualnyWynik.stan = twoThrow * 2;
    console.log(`pkt za dwa`, twoThrow * 2);
  }

  function rzutZaTrzyPkt(threeThrow) {
    aktualnyWynik.stan += threeThrow * 3;
    console.log(`pkt za trzy`, threeThrow * 3);
  }
  return {
    aktualnyWynik,
    rzutZaDwaPkt: rzutZaDwaPkt,
    rzutZaTrzyPkt: rzutZaTrzyPkt,
  };
}
const punkty = kosz();
punkty.rzutZaDwaPkt(2); // ilość rzutów do kosza za 2 pkt
punkty.rzutZaTrzyPkt(1); // ilość rzutów do kosza za 3 pkt
console.log("ilość zdobytych pkt ", punkty.aktualnyWynik.stan);

// zad 6

const pralka = {
  model: "T-1000",
  function: ["pranie", "płukanie", "wirowanie"],
  information() {
    console.log(
      `model ${this.model}, dostępne funkcje ${this.function.length} : ${this.function}`
    );
    return this.model + ` ` + this.function;
    // return zwraca  -  "T-1000 pranie,płukanie,wirowanie"
  },
};
pralka.information();

// zad 7
// Opisz w skrócie na czym polega różnica miedzy kopią, a referencja i stwórz swój własny przykład obrazujący tą różnice +
// jakie konkretnie typy danych są typami prostymi a jakie złożonymi?

//odp:
// typy proste to : string , number , boolean , null ,undefine
// typy referencyjne to : obiekty oraz zawierające tablice i funkcje

//typ prosty
let a = 10;
let b = a; // b otrzymuje wartośc a czyli 10
a = 5; // nadpisana nowa wartość a
console.log({ a }); // teraz a ma 5
console.log({ b }); // b otrzymało wartosć a czyli 10 - 1 linia

//typ referencyjny np. Jeżeli pod np 2 zmienne podstawimy ten sam obiekt to obie będą wskazywać na ten sam adres Referencję w pamięci gdzie znajduje się ten obiekt. Czyli zmieniając jedną zmienną zmieniamy wartość obiektu w obu zmiennych które wskazują na ten obiekt .
const a = { name: "Adam" }; // przypisany do zmiennej obiekt a
const b = a; // do zmiennej b przypisany obiekt a
b.age = 5; // w zmiennej b i kluczu age przypisujemy wartośc 5
//  co sprawia że obie zmienne a i b wskazują ten sam obiekt który dostał klucz age o wartopści 5
console.log(a); //  {name: "kot"}
console.log(b); //  {name: "kot"}
console.log(a.age); //  5
console.log(b.age); //  5
