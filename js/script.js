/*Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 3 secondi.
Dopo 3 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


//aggiungere un tag HTML alla pagina per visualizzare i numeri. 
// creo l'array per accogliere i 5 numeri randomici.

let numeri = [];
let numeroDiNumeri = 5;
//mi metto 5 dentro una variabile.
while (numeri.length < numeroDiNumeri) {
    let numeroGenerato = getRndInteger(1, 50);
    // uso un ciclo while per generare i 5 numeri e popolare l'array.
    //numeri.lenght sarà minore di 5.
    // genero numero random dentro al while
    if (!numeri.includes(numeroGenerato)) {
        numeri.push(numeroGenerato);
    }

    let numeriHTML = document.getElementById('numeri')
    //prendo il div dall'HTML con document.getElementById lo assegno ad una variabile.
    numeriHTML.innerHTML = numeri;

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }