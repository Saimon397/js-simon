/*Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 3 secondi.
Dopo 3 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//aggiungere un tag HTML alla pagina per visualizzare i numeri. 
//creo l'array per accogliere i 5 numeri randomici.

let num = [];
const numMax = 5;

//ciclo per generare i numeri inserendoli nell'array
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genNumArray() {
    while (num.length < numMax) {
        const genNum = randomNum(1, 100);
        //Chek per numeri uguali
        if (!num.includes(genNum)) {
            num.push(genNum);
        }
    }
    //Stampo nell'array
    console.log(num);

    //stampo il risultato dei num gen dell'array
    const numHTML = document.getElementById('num');
    numHTML.innerHTML = `Memorizza questi 5 numeri: <br> ${num}`;
}
//Richiamo la funzione
genNumArray();

//var timer durata 3 sec
const timer = setInterval(counterNum, 3000);

// Funzione che fa scomparire il div 
function counterNum() {
    document.getElementById("num").classList.add('invisible');
}

const pushHTML = document.getElementById('push');
const arrayNumUser = [];

function pushNum() {
    let inputNum = parseInt(document.getElementById('inputnum-user').value);
    if (arrayNumUser.length < numMax) {
        arrayNumUser.push(inputNum);
        console.log(arrayNumUser);
        const outputnumHTML = document.getElementById('outputnum-user');
        outputnumHTML.innerHTML = 'Numeri inseriti: ' + arrayNumUser;
    }
}
pushHTML.addEventListener('click', () => {
    pushNum();
})

const verifyHTML = document.getElementById('verifyinp-user');
const resultHTML = document.getElementById('result');

let counter = 0;
function verifyNum() {
    for (let i = 0; i < numMax; i++) {
        if (arrayNumUser.includes(num[i])) {
            resultHTML.innerHTML = 'Hai vinto!!! hai indovinato i 5 numeri &#129488;';
        } else {
            counter++;
            console.log('no');
            resultHTML.innerHTML = 'Hai sbagliato: ' + counter + ' numeri &#129327;';
        }
    }
}
verifyHTML.addEventListener('click', () => {
    verifyNum();
});

const genNumHTML = document.getElementById('num-generator')

//
function genNum() {
    num = [];
    genNumArray();
    document.getElementById("num").classList.add('visible');
    document.getElementById("num").classList.remove('invisible');
}
genNumHTML.addEventListener('click', () => {
    genNum();
});