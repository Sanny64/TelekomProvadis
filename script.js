const inputField = document.getElementById("guessInput");
inputField.addEventListener("keypress", event => { 
  if(event.key === "Enter"){
    checkGuess();
  } 
});

// yes, i am aware you can just console.log the randomNumber in the browser console - I don't care XD
let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumbers = [];

function checkGuess() {
  const guessedNumber = parseInt(inputField.value);

  if (isNaN(guessedNumber) || (guessedNumber > 10) || (guessedNumber <= 0)) {
    document.getElementById("message").textContent = "Bitte gib eine gültige Nummer ein.";
    message.style.color = 'red';
  } else if (guessedNumbers.includes(guessedNumber)) {
    
    document.getElementById("message").textContent = `Du hast ${guessedNumber} bereits versucht! Versuche eine andere Zahl.`;
    message.style.color = 'orange';
  } else {
    attempts++;
    guessedNumbers.push(guessedNumber);

    if (guessedNumber === randomNumber) {
      switch (attempts) {
        case 1:
          document.getElementById("message").innerHTML = `Glückwunsch!<br><br>Du hast die Zahl beim ersten Versuch erraten.`;
        break;
        default:
          document.getElementById("message").innerHTML = `Glückwunsch!<br><br>Du hast die Zahl in ${attempts} Versuchen erraten.`;
      }
      message.style.color = 'green';
      resetGame()
      
    } else if ((guessedNumber < randomNumber)){
      document.getElementById("message").textContent = "Die Zahl ist zu niedrig. Versuche es erneut.";
      setStyle(attempts)
    } else {
      document.getElementById("message").textContent = "Die Zahl ist zu hoch. Versuche es erneut.";
      setStyle(attempts)
      }
    } 
    
    if ((attempts === 3) && (guessedNumber != randomNumber)) {
      document.getElementById("message").textContent = "3 Fehlversuche. Zahl wird neu generiert."
      message.style.color = 'red';
      resetGame();
    }
}

function setStyle (attempts) {
  switch (attempts) {
    case 1: 
      message.style.color = 'yellow';
      break;
    case 2: 
      message.style.color = 'orange';
      break;
    default: message.style.color = 'black';
  }
}

function resetGame () {
  attempts = 0;
  guessedNumbers = [];
  randomNumber = Math.floor(Math.random() * 10) + 1;
}