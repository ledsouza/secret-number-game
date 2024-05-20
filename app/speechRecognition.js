const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startButton = document.getElementById("startButton");
const elementGuess = document.getElementById("guess");

startButton.addEventListener("click", () => {
  recognition.start();
});

recognition.addEventListener("result", (event) => {
  const resultTranscription = event.results[0][0].transcript;
  const existingDiv = elementGuess.querySelector("div");
  const existingSpan = elementGuess.querySelector("span");

  if (existingDiv && existingSpan) {
    // Update existing elements if they exist
    existingSpan.innerHTML = resultTranscription;
  } else {
    // Create and append new elements if they don't exist
    const [div, span] = createBoxResult(resultTranscription);
    elementGuess.append(div, span);
  }
});

function createBoxResult(transcription) {
  const div = document.createElement("div");
  div.innerHTML = "You said";

  const span = document.createElement("span");
  span.classList.add("box");
  span.innerHTML = `${transcription}`;

  return [div, span];
}
