function transcriptValidation(resultTranscription) {
  const guessedNumber = parseInt(resultTranscription, 10);
  let errorMessageEl = elementGuess.querySelector(".errorMessage");
  let hintMessageEl = elementGuess.querySelector(".hintMessage");

  clearMessageElements(errorMessageEl, hintMessageEl);
  errorMessageEl = null;
  hintMessageEl = null;

  if (!isValidInput(guessedNumber)) {
    displayErrorMessage(errorMessageEl, "Valor inválido!");
    return;
  }

  if (guessedNumber === secretNumber) {
    displayWinMessage(secretNumber);
  } else {
    displayHintMessage(
      hintMessageEl,
      guessedNumber > secretNumber ? "lesser" : "greater"
    );
  }

  function isValidInput(guessedNumber) {
    return (
      !isNaN(guessedNumber) &&
      guessedNumber >= minValue &&
      guessedNumber <= maxValue
    );
  }

  function displayErrorMessage(errorMessageEl, message) {
    if (!errorMessageEl) {
      errorMessageEl = document.createElement("div");
      errorMessageEl.classList.add("errorMessage");
      elementGuess.appendChild(errorMessageEl);
    }
    errorMessageEl.textContent = message;
  }

  function displayWinMessage(secretNumber) {
    document.body.innerHTML = `
        <h2>You got it!</h2>
        <h3>The secret number is ${secretNumber}</h3>
      `;
  }

  function displayHintMessage(hintMessageEl, direction) {
    if (!hintMessageEl) {
      hintMessageEl = document.createElement("div");
      hintMessageEl.classList.add("hintMessage");
      elementGuess.appendChild(hintMessageEl);
    }
    hintMessageEl.innerHTML = `
        The secret number is ${direction}
        <i class="fa-solid fa-arrow-${
          direction === "lesser" ? "down" : "up"
        }"></i>
      `;
  }

  function clearMessageElements(...elements) {
    elements.forEach((element) => {
      if (element) element.remove();
    });
  }
}
