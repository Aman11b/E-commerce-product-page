const addToCart = document.querySelector(".add-to-cart");
const cartContainer = document.querySelector(".cart-container");

let count = 0;

addToCart.addEventListener("click", () => {
  count++;
  cartContainer.setAttribute("data-count", count);
});
