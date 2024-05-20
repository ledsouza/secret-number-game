function transcriptValidation(resultTranscription) {
  const guessedNumber = +resultTranscription;
  let errorMessage = elementGuess.querySelector(".errorMessage");

  clearErrorMessage();

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
  }

  function validNumber(guessedNumber) {
    return Number.isNaN(guessedNumber);
  }

  function validInterval(guessedNumber) {
    return guessedNumber < minValue || guessedNumber > maxValue;
  }

  function clearErrorMessage() {
    if (errorMessage) {
      errorMessage.remove();
      errorMessage = null;
    }
  }
}
