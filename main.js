const addToCart = document.querySelector(".add-to-cart");
const cartContainer = document.querySelector(".cart-container");

const decreaseBtn = document.querySelector(".decrease-btn");

const increaseCount = document.querySelector(".increase-btn");

const avatar = document.querySelector(".avatar");
const cartDropdown = document.getElementById("cart-dropdown");

const dataCount = parseInt(cartContainer.getAttribute("data-count"));

const cartEmpty = document.querySelector(".cart-empty");
const cartFilled = document.querySelector(".cart-filled");

const countOutput = document.querySelector(".count-output");
const quantityCount = document.querySelector(".qunatity-count");
const totalCost = document.querySelector(".total-cost");

const deleteBtn = document.querySelector(".delete-btn");

let count = 0;
let outputCount = 0;
let unitPrice = 125;

function updateCartInformation() {
  quantityCount.innerHTML = countOutput.innerHTML;

  const quantity = parseInt(countOutput.innerHTML) || 0;
  const total = unitPrice * quantity;
  totalCost.innerHTML = `$${total.toFixed(2)}`;
}

updateCartInformation();

deleteBtn.addEventListener("click", () => {
  count = 0;
  outputCount = 0;

  countOutput.textContent = outputCount;
  quantityCount.textContent = count;

  cartContainer.setAttribute("data-count", "0");

  cartEmpty.style.display = "";
  cartFilled.style.display = "none";
});

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

addToCart.addEventListener("click", () => {
  count++;
  cartContainer.setAttribute("data-count", count);
});

increaseCount.addEventListener("click", () => {
  outputCount++;

  countOutput.textContent = outputCount;
  updateCartInformation();
});

decreaseBtn.addEventListener("click", () => {
  if (outputCount > 0) {
    outputCount--;
    countOutput.textContent = outputCount;
    updateCartInformation();
  }
});
