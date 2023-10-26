let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guessedNumber = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guessedNumber)) {
    document.getElementById("message").textContent = "Bitte gib eine gültige Nummer ein.";
  } else {
    attempts++;

    if (guessedNumber === randomNumber) {
      document.getElementById("message").textContent = `Glückwunsch! Du hast die richtige Zahl (${randomNumber}) in ${attempts} Versuchen erraten.`;
    } else if (guessedNumber < randomNumber) {
      document.getElementById("message").textContent = "Die Zahl ist zu niedrig. Versuche es erneut.";
    } else {
      document.getElementById("message").textContent = "Die Zahl ist zu hoch. Versuche es erneut.";
    }


    if (attempts === 3) {
      randomNumber = Math.floor(Math.random() * 10) + 1;
      attempts = 0;
      document.getElementById("message").textContent = "Deine drei Versuche sind um. Die Zahl wurde neu generiert."
    }
  }
}
