const inputField = document.getElementById("guessInput");
inputField.addEventListener("keypress", event => { 
  if(event.key === "Enter"){
    checkGuess();
  } 
});

// yes, i am aware you can just console.log the random number in the browser console - I don't care XD
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
      document.getElementById("message").textContent = `Glückwunsch! Du hast die Zahl ${randomNumber} in ${attempts} Versuchen richtig erraten.`;
      message.style.color = 'green';
      randomNumber = Math.floor(Math.random() * 10) + 1;
      attempts = 0;
      guessedNumbers = []; 
      
    } else if ((guessedNumber < randomNumber)){
      document.getElementById("message").textContent = "Die Zahl ist zu niedrig. Versuche es erneut.";
      switch (attempts) {
        case 1: 
          message.style.color = 'yellow';
          break;
        case 2: 
          message.style.color = 'orange';
          break;
        default: message.style.color = 'black';
      }
    } else {
      document.getElementById("message").textContent = "Die Zahl ist zu hoch. Versuche es erneut.";
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
    
    if ((attempts === 3) && (guessedNumber != randomNumber)) {
      randomNumber = Math.floor(Math.random() * 10) + 1;
      attempts = 0;
      guessedNumbers = [];
      document.getElementById("message").textContent = "3 Fehlversuche. Zahl wird neu generiert."
      message.style.color = 'red';
    }
  }
}