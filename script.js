// Countdown Timer (Example: 3 Days)
const countdownElement = document.getElementById('countdown');
let days = 3;

const updateCountdown = () => {
  countdownElement.textContent = `${days} Days!`;
  days--;
  if (days < 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "Contest Started!";
  }
};

const countdownInterval = setInterval(updateCountdown, 86400000); // 1 Day
