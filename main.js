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

const mainImage = document.querySelector(".main-image");
const thumbnailGalleryBtn = document.querySelectorAll(
  ".thumbnails-gallery-btn"
);

const lightbox = document.querySelector(".lightbox");
const lightboxMainImage = document.querySelector(".light-box-image");
const lightboxCloseBtn = document.querySelector(".lightbox-close");
const lightboxPrevBtn = document.querySelector(".lightbox-prev");
const lightboxNextBtn = document.querySelector(".lightbox-next");
const lightboxThumbnailsGallery = document.querySelectorAll(
  ".lightbox-thumbnails-gallery img"
);

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click",()=>{
  const visibility = primaryNav.getAttribute("data-visible");
  if(visibility === 'false'){
    primaryNav.setAttribute("data-visible",true);
    navToggle.setAttribute("aria-expanded",true);

    document.body.classList.add("overlay-active");
  }
  else if(visibility === 'true'){
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);

    document.body.classList.remove("overlay-active");

  }
})

mainImage.addEventListener("click", () => {
  openLightBox(0);
});

let currentIndex = 0;
function openLightBox(index) {
  currentIndex = index;
  const fullSrc = lightboxThumbnailsGallery[currentIndex].src.replace(
    "-thumbnail",
    ""
  );
  lightboxMainImage.src = fullSrc;
  lightbox.classList.remove("hidden");
}
function updateImage(step) {
  currentIndex =
    (currentIndex + step + lightboxThumbnailsGallery.length) %
    lightboxThumbnailsGallery.length;
  lightboxMainImage.src = lightboxThumbnailsGallery[currentIndex].src.replace(
    "-thumbnail",
    ""
  );
}

function closeLightbox() {
  lightbox.classList.add("hidden");
}

lightboxCloseBtn.addEventListener("click", () => closeLightbox());
lightboxThumbnailsGallery.forEach((thumb, index) => {
  thumb.addEventListener("click", () => openLightBox(index));
});

lightboxPrevBtn.addEventListener("click", () => updateImage(-1));
lightboxNextBtn.addEventListener("click", () => updateImage(1));

thumbnailGalleryBtn.forEach((button) => {
  const thumbnail = button.querySelector("img");
  button.addEventListener("click", () => {
    const fullImageSrc = thumbnail.src.replace("-thumbnail", "");
    mainImage.src = fullImageSrc;
  });
});

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