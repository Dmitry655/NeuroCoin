// Countdown timer to CEX listing
const targetDate = new Date("2025-12-01T00:00:00Z");
const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    timerElement.textContent = "🎉 Listed on CEX!";
  } else {
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60)) % 24);
    const minutes = Math.floor((diff/ (1000*60)) % 60);
    const seconds = Math.floor((diff/1000) % 60);
    timerElement.textContent = `Countdown to CEX listing: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

setInterval(updateTimer, 1000);
updateTimer();