const gorillazArray = ['She\'s my Collar', 'Cracker Island', 'Dirty Harry', 'El Manana', 'Feel Good Inc.', 'Clint Eastwood', 'Saturn Barz'];
const museArray = ['New Born', 'Bliss', 'Plug in Baby', 'Citizen Erased', 'Micro Cuts'];

if (gorillazArray.length < museArray.length) {
  for (i = gorillazArray.length; i < museArray.length; i++) {
    museArray.push(museArray[Math.floor(Math.random() * 7)])

    console.log(gorillazArray);
  }
} else if (museArray.length < gorillazArray.length) {
    for (i = museArray.length; i < gorillazArray.length; i++) {
      museArray.push(gorillazArray[Math.floor(Math.random() * 7)])

      console.log(museArray);
    }
} else {
    console.log('I due array hanno pari lunghezza');
}
