document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("numberInput");
  const startButton = document.getElementById("startButton");
  const countdown = document.getElementById("countdown");

  let interval;

  startButton.addEventListener("click", function () {
      const inputValue = parseInt(numberInput.value);

      if (isNaN(inputValue) || inputValue < 1) {
          alert("Vui lòng nhập một số nguyên dương.");
          return;
      }

      startCountdown(inputValue);
  });

  function startCountdown(number) {
     // clearInterval(interval);
      let currentNumber = number;

      countdown.textContent = currentNumber;
      interval = setInterval(function () {
          currentNumber--;
          if (currentNumber >= 0) {
              countdown.textContent = currentNumber;
          } else {
              //clearInterval(interval);
          }
      }, 1000);
  }
});
