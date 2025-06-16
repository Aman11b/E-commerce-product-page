const addToCart = document.querySelector(".add-to-cart");
const cartContainer = document.querySelector(".cart-container");

let count = 0;

addToCart.addEventListener("click", () => {
  count++;
  cartContainer.setAttribute("data-count", count);
});

const decreaseBtn = document.querySelector(".decrease-btn");
const countOutput = document.querySelector(".count-output");
const increaseCount = document.querySelector(".increase-btn");

let outputCount = 0;
increaseCount.addEventListener("click", () => {
  outputCount++;
  countOutput.textContent = outputCount;
});
decreaseBtn.addEventListener("click", () => {
  if (outputCount > 0) {
    outputCount--;
    countOutput.textContent = outputCount;
  }
});
