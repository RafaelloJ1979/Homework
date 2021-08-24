// Wywoływanie funkcji wewnątrz innej funkcji + zakres zmiennych!

function licznik() {
  const stan = {
    ile: 0,
  };
  function zwieksz() {
    stan.ile = stan.ile + 1;
  }
  function pokazLicznik() {
    console.log(stan.ile);
  }
  return {
    ile: stan.ile,
    zwieksz,
    pokazLicznik,
  };
}
const counter = licznik(); //→ zwraca nam obiekt ten który jest po słowie return
counter.zwieksz(); //→ zwiększa stan o 1
counter.pokazLicznik(); //→ wyświetla aktualny stan,
counter.zwieksz(); //→ zwiększa stan o 1
counter.pokazLicznik(); //→ wyświetla aktualny stan,

// Funkcja w funkcji
//W powyższym przykładzie mamy stworzoną funkcję licznik, która zawiera w sobie dwie kolejne funkcje, czyli zwieksz i pokazLicznik.

// Aby napisać funkcję w funkcji zwyczajnie tworzymy funkcje jak każdą inną tylko tak aby znajdowała się wewnątrz ciała funkcji tej w której chcemy ją umieścić. Tak jak w przykładzie funkcja zwieksz i pokazLicznik zostały stworzone wewnątrz funkcji licznik.

// I teraz mamy stworzone funkcje w funkcji.

// Jak wywołać taką funkcję?

// Nasza funkcja rodzic, musi zwrócić tą funkcję aby móc ją potem wykonać, czyli za słówkiem return możemy zrobić to za pomocą obiektu. Pokaże to na przykładzie funkcji zwieksz wewnątrz funkcji licznik.

// Można to zrobić na dwa sposoby(które w praktyce oznaczają to samo):

// NORMALNY ZAPIS
return {
  zwieksz: zwieksz,
};
// SKRÓCONY ZAPIS
return {
  zwieksz,
};
// Jeśli klucz i wartość w obiekcie mają taką samą nazwę to skróconym zapisem jest po prostu podanie tej nazwy tylko raz i to oznacza to samo jakbyśmy chcieli stworzyć obiekt wg. normalnego zapisu.
// To było koniecznie do wytłumaczenia aby umieć wywołać tą funkcję.

// Teraz powinniśmy przypisać funkcję do zmiennej:

const counter = licznik();

// Dzięki temu counter zawiera teraz nasz obiekt który jest po słowie return w funkcji licznik i mamy tam dostęp właśnie do funkcji zwieksz.

// i teraz możemy normalnie wywołać każdą funkcję z return. Dostając się tam tak samo jak do zwykłego obiektu przez “kropkę”, czyli:

// counter.zwieksz() → to nam wywoła funkcję, która wywoła to co jest przypisane w obiekcie counter pod kluczem zwieksz.

// Zasięg zmiennych w funkcjach
// Zmienne mają zasięg blokowy i nie możesz się do nich dostać spoza bloku. Możesz natomiast odnieść się wewnątrz bloku do zmiennej która jest po za nim.

// Główna zasada:
// Zawsze mamy dostęp do zmiennych zadeklarowanych na zewnątrz. Nigdy tych które są w bloku wewnątrz.
// Przykład:
const zmienna1 = 'test'

function licznik() {
const zmienna2 = 'wSrodkuFunkcji'
console.log(zmienna1)
}
console.log(zmienna1)
licznik()
// Omówienie przykładu:
// Wewnątrz funkcji możemy użyć zmienna1, ale gdybyśmy chcieli użyć zmienna2 na zewnątrz funkcji licznik to już nie mielibyśmy do niej dostępu.