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
const guestName = [];
const guestSurname = [];
//"So if you want to organise a Gatsby themed party as authentic as possible, then you should organise an event for anywhere between 350 and 400 people."
const guestsNumber = Math.floor((Math.random() * 51) + 350);

//TEST SECTION
console.log(alphabetGlued);
console.log(alphabetArray);
console.log(guestsNumber);
//EVERYTHING WORKS

//GUESTS NUMBER
for (i = 0; i < guestsNumber; i++) {  // <= ?
  //NAME LENGTH
  const nameLength = Math.floor(Math.random() * 4 + 5); //nome e/o cognome di 5-8 caratteri
  //TEST NAME LENGTH
  console.log(`nameLength is: ${nameLength}`);

  //da mettere nel for successivo ma portati fuori come test
  const guestNameRandom = Math.floor(Math.random() * parseInt(alphabetArray.length));
  const guestSurnameRandom = Math.floor(Math.random() * parseInt(alphabetArray.length));

  console.log(`guestNameRandom is: ${guestNameRandom}`);
  console.log(`guestSurnameRandom is: ${guestSurnameRandom}`);
  //fine test. Funzionanti

  /*
  for (i = 0; i < nameLength; i++) {
    // RANGE DA CUI PRENDERE LE LETTERE DELL'ALFABETO
    const guestNameRandom = Math.floor(Math.random() * parseInt(alphabetArray.length));
    const guestSurnameRandom = Math.floor(Math.random() * parseInt(alphabetArray.length));
    
    // TEST RANDOM NUMBERS
    console.log(`guestNameRandom is: ${guestNameRandom}`);
    console.log(`guestSurnameRandom is: ${guestSurnameRandom}`);

    // guestName.push(alphabetArray[guestNameRandom]); //forse aggiungere +1 ma non credo
    // guestSurname.push(alphabetArray[guestSurnameRandom]);
   }
   */
}

//l'ultimo ciclo FOR da problemi perchè il numero di cicli è troppo grande


//VERO E PROPRIO ESERCIZIO
console.log('Inizio stirpe Buendìa');
const listaNomi = ['Jose', 'Arcadio', 'Ursula', 'Remedios', 'Amaranta', 'Rebeca', 'Aureliano'];
const listaCognomi = ['Buendìa', 'Iguarán', 'Ternera', 'Moscote', 'Crespi'];
const guestID = [];

for (i = 0; i < listaNomi.length; i++) {
  const nome = listaNomi[Math.floor(Math.random() * parseInt(listaNomi.length))];
  console.log(`Nome scelto: ${nome}`);

  const cognome = listaCognomi[Math.floor(Math.random() * parseInt(listaCognomi.length))];
  console.log(`Cognome scelto: ${cognome}`);

  console.log(`L'invitato #${i + 1} è: ${nome} ${cognome}`);
}