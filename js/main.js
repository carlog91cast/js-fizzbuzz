// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// MILESTONE 1

// per il p.to 1 creo un for (ciclo) che mi permetta di stampare in console i numeri da 1 a 100
// inizializzo una variabile a un ponendo index <= 100 cosi da ricomprendere i valori da 1 a 100 compreso; tutto quanto scritto nel primo blocco verrà ripetuto 100 volte fino all'esaurimento di quanto posto in condizione

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 3) {
        console.log('è multiplo di 3')
        
    }


}