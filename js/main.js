// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// MILESTONE 1

// per il p.to 1 creo un for (ciclo) che mi permetta di stampare in console i numeri da 1 a 100
// inizializzo una variabile a un ponendo index <= 100 cosi da ricomprendere i valori da 1 a 100 compreso; tutto quanto scritto nel primo blocco verrà ripetuto 100 volte fino all'esaurimento di quanto posto in condizione
// determino una variabile per agganciarla all'id nell'html
const numberFizzBuzz = document.getElementById('fizz-buzz');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const fizzBox = document.createElement('div');
    fizzBox.classList.add("col-2", "box");
    fizzBox.innerHTML = i;
    // determino con un operatore ogniqualvolta i sia multiplo di 3
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        document.getElementById('fizz-buzz');
        fizzBox.classList.add("fizz")
        // ...ogniqualvolta i sia multiplo di 5
    } else if (i % 3 == 0) {
        console.log('Fizz');
        document.getElementById('fizz-buzz');
        fizzBox.classList.add("buzz")
        // ogniqualvolta i sia multiplo sia di 3 che di 5
    } else if (i % 5 == 0) {
        console.log('Buzz');
        document.getElementById('fizz-buzz');
        fizzBox.classList.add("fizz-buzz")
    } else {
        console.log('index');
        document.getElementById('fizz-buzz');
    }
// aggiungo div e classi all'html

  

// collego div, classi e conteuto al NumberFizzBuzz

    numberFizzBuzz.append(fizzBox);
}
