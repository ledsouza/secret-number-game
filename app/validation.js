function transcriptValidation(resultTranscription) {
  const guessedNumber = +resultTranscription;
  let errorMessage = elementGuess.querySelector(".errorMessage");
  let hintMessage = elementGuess.querySelector(".hintMessage");

  clearErrorMessage();
  clearHintMessage();

  if (validNumber(guessedNumber) || validInterval(guessedNumber)) {
    if (!errorMessage) {
      // Create only if it doesn't exist
      errorMessage = document.createElement("div");
      errorMessage.classList.add("errorMessage");
      elementGuess.appendChild(errorMessage);
    }
    errorMessage.textContent = "Valor inválido!"; // Set or update error text
    return;
  }

  if (guessedNumber === secretNumber) {
    document.body.innerHTML = `
        <h2>You got it!</h2>
        <h3>The secret number is ${secretNumber}</h3>
        `;
  } else if (guessedNumber > secretNumber) {
    hintMessage = document.createElement("div");
    hintMessage.classList.add("hintMessage");
    hintMessage.innerHTML = `
    The secret number is lesser
    <i class="fa-solid fa-arrow-down"></i>
    `;
    elementGuess.appendChild(hintMessage);
  } else if (guessedNumber < secretNumber) {
    hintMessage = document.createElement("div");
    hintMessage.classList.add("hintMessage");
    hintMessage.innerHTML = `
    The secret number is greater
    <i class="fa-solid fa-arrow-up"></i>
    `;
    elementGuess.appendChild(hintMessage);
  }

  function validNumber(guessedNumber) {
    return Number.isNaN(guessedNumber);
  }

  function validInterval(guessedNumber) {
    return guessedNumber < minValue || guessedNumber > maxValue;
  }

  function clearHintMessage() {
    if (hintMessage) {
      hintMessage.remove();
      hintMessage = null;
    }
  }

  function clearErrorMessage() {
    if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }
  }
}
