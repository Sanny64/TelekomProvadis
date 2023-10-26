const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
function guessNumber() {
  const guessedNumber = parseInt(prompt("Rate eine Zahl zwischen 1 und 10:"));
  if (isNaN(guessedNumber)) {
    alert("Bitte gib eine Nummer zwischen 1 und 10 ein.");
  } else {
    attempts++;
    if (guessedNumber === randomNumber) {
      alert(`Glückwunsch! Du hast die richtige Zahl (${randomNumber}) in ${attempts} Versuchen erraten.`);
      attempts = 0; 
      randomNumber = Math.floor(Math.random() * 10) + 1; 
    } else if (guessedNumber < randomNumber) {
      alert("Die Zahl ist zu niedrig. Versuche es erneut.");
    } else {
      alert("Die Zahl ist zu hoch. Versuche es erneut.");
    }
    attempts = 0; 
    randomNumber = Math.floor(Math.random() * 10) + 1; 
    guessNumber();
  }
}
guessNumber();
