function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

document.getElementById('startButton').addEventListener('click', function () {
  this.disabled = true;
  document.getElementById('stopButton').disabled = false; // Poprawiony błąd
  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

document.getElementById('stopButton').addEventListener('click', function () {
  document.getElementById('startButton').disabled = false;
  this.disabled = true;
  clearInterval(intervalId);
});
