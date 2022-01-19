//Chiedi all'utente il suo nome
let nomeUtente = prompt('Inserisci nome');
console.log(nomeUtente)

//Chiedi all'utente il suo cognome
let cognomeUtente = prompt('Inserisci cognome')
console.log(cognomeUtente)

//Chiedi all'utente il suo colore preferito
let coloreUtente = prompt('Inserisci colore preferito')
console.log(coloreUtente)



//PASSWORD

//Generatore password console
const password = nomeUtente + cognomeUtente + coloreUtente;
console.log(password + "21")

//Generatore password html
document.getElementById('password').innerHTML = "La tua password è " + nomeUtente + cognomeUtente + coloreUtente + "21";