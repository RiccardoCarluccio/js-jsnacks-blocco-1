const arrayOfNumbers = [];

for (i = 0; i < 10; i++) {
  const arrayItem = Math.floor(Math.random() * 11);
  console.log(`Random generated number: ${arrayItem}`);

  arrayOfNumbers.push(arrayItem);
  console.log(`The random generated array is: ${arrayOfNumbers}`);

  if (i === 9) {   //forse mettere 9
    let sumOfOddsPlaced = 0;
    for (j = 0; j < arrayOfNumbers.length; j++) {
      if (j % 2 !== 0) {
        sumOfOddsPlaced += parseInt(arrayOfNumbers[j]);
        console.log(sumOfOddsPlaced);
      }
    }
  }
}