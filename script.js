const inputField = document.getElementById("guessInput");
inputField.addEventListener("keypress", event => { 
  if(event.key === "Enter"){
    checkGuess();
  } 
});


let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guessedNumber = parseInt(inputField.value);


  if (isNaN(guessedNumber) || (guessedNumber > 10) || (guessedNumber <= 0)) {
    document.getElementById("message").textContent = "Bitte gib eine gültige Nummer ein.";
    message.style.color = 'red';
  } else {
    attempts++;

    if (guessedNumber === randomNumber) {
      document.getElementById("message").textContent = `Glückwunsch! Du hast die richtige Zahl (${randomNumber}) in ${attempts} Versuchen erraten.`;
      message.style.color = 'green';
      // setGameover();
    } else if (guessedNumber < randomNumber) {
      document.getElementById("message").textContent = "Die Zahl ist zu niedrig. Versuche es erneut.";
      message.style.color = 'red';
      // setGameover();
    } else {
      document.getElementById("message").textContent = "Die Zahl ist zu hoch. Versuche es erneut.";
      message.style.color = 'red';
      // setGameover();
    } 
    
    if (attempts === 3) {
      randomNumber = Math.floor(Math.random() * 10) + 1;
      attempts = 0;
      document.getElementById("message").textContent = "3 Fehlversuche. Zahl wird neu generiert."
    }
  }
}
