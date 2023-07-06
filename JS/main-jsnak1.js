/*
math random che decide il numero di caratteri che devono avere il nome e il cognome
abcd...xyz.spli(""); per creare l'array con tutte le lettere
  Bonus
  alternare vocali e consonanti > 2 array diversi
l'array cicla un numero di volte pari alla lunghezza del math.random
sceglie la lettera con un altro math.random e la pusha nell'array nome

stessa cosa per i cognomi

per unire nomi e cognomi > ${nome} + " " + ${cognome};
  nome scelto con un math.random sull'indice [i] dell'array
*/

const alphabetGlued = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = alphabetGlued.split('');
let name;
let surname;
//"So if you want to organise a Gatsby themed party as authentic as possible, then you should organise an event for anywhere between 350 and 400 people."
const guestsNumber = Math.floor((Math.random() * 51) + 350);

//TEST SECTION
console.log(alphabetGlued);
console.log(alphabetArray);
console.log(guestsNumber);
//EVERYTHING WORKS

// for (i = 0; i < guestsNumber; i++) {  // <= ?
// const nameLenght = Math.floor(Math.random() * 4 + 5); //nome e/o cognome di 5-8 caratteri

//   for (i = 0; i <= nameLenght; i++) {
//     let name = alphabetArray[Math.floor(Math.random() * (parseInt(alphabetGlued.length)) + 1)]
//   }
// }