# Web Speech Recognition Number Guessing Game

## Description

This web game uses speech recognition technology to create an interactive number-guessing experience. Players use their microphone to guess a randomly generated secret number within a defined range. The game provides feedback on guesses.

## Technologies

- **HTML5:** Structure and content of the game interface.
- **CSS3:** Styling and visual presentation of the game elements.
- **JavaScript (ES6+):** Core game logic, interaction handling, speech recognition integration, and DOM manipulation.
- **Web Speech API:** Enables speech recognition functionality within the browser.

## Detailed Description

1. **Game Initialization:**
   - On page load, the game generates a random secret number within a predetermined range.
   - The user interface displays:
      - A text field for displaying messages (e.g., instructions, feedback).
      - A button to initiate the speech recognition process.

2. **Speech Recognition:**
   - When the button is clicked:
      - The Web Speech API activates the user's microphone.
      - The player speaks their guess into the microphone.
      - The API transcribes the speech into text.

3. **Guess Validation and Feedback:**
   - The transcribed text is checked for:
      - If it's a valid number.
      - If the number falls within the allowed range.
   - Based on the validation:
      - If invalid, a message is displayed to inform the player of the error (e.g., "Invalid Number").
      - If valid, the game checks if the guess matches the secret number.
         - If correct, the game declares the player as the winner, displays a win message, and reveals a "Play Again" button.
         - If incorrect, the game provides feedback (e.g., "Higher" or "Lower") and allows the player to guess again.

4. **Play Again:**
   - Clicking the "Play Again" button resets the game:
      - A new secret number is generated.
      - The message area is cleared.
      - The game returns to its initial state.
