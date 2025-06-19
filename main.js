const addToCart = document.querySelector(".add-to-cart");
const cartContainer = document.querySelector(".cart-container");

const decreaseBtn = document.querySelector(".decrease-btn");
const countOutput = document.querySelector(".count-output");
const increaseCount = document.querySelector(".increase-btn");

const avatar = document.querySelector(".avatar");
const cartDropdown = document.getElementById("cart-dropdown");

const dataCount = parseInt(cartContainer.getAttribute("data-count"));
const cartEmpty = document.querySelector(".cart-empty");
const cartFilled = document.querySelector(".cart-filled");

avatar.addEventListener("click", () => {
  if (cartDropdown.style.display === "none") {
    cartDropdown.style.display = "";

    if (count === 0) {
      cartEmpty.style.display = "";
      cartFilled.style.display = "none";
    } else {
      cartEmpty.style.display = "none";
      cartFilled.style.display = "";
    }
  } else {
    cartDropdown.style.display = "none";
  }
});

let count = 0;

let outputCount = 0;

addToCart.addEventListener("click", () => {
  count++;
  cartContainer.setAttribute("data-count", count);
});

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
