let count = 0;
let boost = 1;

const counterElement = document.getElementById("counter");
const coin = document.getElementById("coin");
const boostButton = document.getElementById("boostButton");

coin.addEventListener("click", () => {
  count += boost;
  counterElement.textContent = count;
});

boostButton.addEventListener("click", () => {
  boost *= 2;
  boostButton.textContent = `Буст x${boost}`;
});