const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconBurgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".aside-product-detail");
const cardsContainer = document.querySelector(".cards-container");
const cardProductDetail = document.querySelector(".product-detail");
const iconProductDetailClose = document.querySelector(".product-detail-close");
const bodyDarken = document.querySelector("#darken");

const productDetailImage = document.querySelector("#product-detail-image");
const productDetailPrice = document.querySelector("#product-detail-price");
const productDetailName = document.querySelector("#product-detail-name");

navbarEmail.addEventListener("click", toggleDesktopMenu);
iconBurgerMenu.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toggleAsideProductDetail);
iconProductDetailClose.addEventListener("click", closeCardProductDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("active");
  asideProductDetail.classList.add("active");
  cardProductDetail.classList.add("active");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  asideProductDetail.classList.add("active");
  cardProductDetail.classList.add("active");
}

function toggleAsideProductDetail() {
  asideProductDetail.classList.toggle("active");
  desktopMenu.classList.add("active");
  mobileMenu.classList.add("active");
  cardProductDetail.classList.add("active");
}

function openCardProductDetail(product) {
  cardProductDetail.classList.remove("active");
  asideProductDetail.classList.add("active");
  desktopMenu.classList.add("active");
  mobileMenu.classList.add("active");
  bodyDarken.classList.add("darken");
  console.log(product);
  if (product.id) {
    product.id.classList.toggle("active");
    console.log(product.id);
  }
}

function closeCardProductDetail() {
  cardProductDetail.classList.add("active");
  bodyDarken.classList.remove("darken");
}

const productsList = [
  {
    id: 0,
    name: "Wetsuit",
    price: "120,00",
    image: "https://i.postimg.cc/kBRpwdHL/5c547c7573683cadaa90ff7e1de8631b.jpg",
  },
  {
    id: 1,
    name: "Wetsuit short",
    price: "100,00",
    image:
      "https://i.postimg.cc/ftkKLcn1/e7fcbb48a412aff04309c3a6e53c07b3-surfing-pink-black.jpg",
  },
  {
    id: 2,
    name: "Men's Wetsuits and Surf Suits",
    price: "190,00",
    image: "https://i.postimg.cc/Q9RpdvqW/2652ecf5edd89e1391e48e4e612c43f2.jpg",
  },
  {
    id: 3,
    name: "Diving and snorkel equipment",
    price: "250,00",
    image: "https://i.postimg.cc/nCnXGHMh/95173254cbb4c14d7e294ca09c6263ae.jpg",
  },
  {
    id: 4,
    name: "Snorkel and fins",
    price: "180,00",
    image: "https://i.postimg.cc/TLmKC1rp/a2ec3c1fbdf3b078bfa4bd405cd6142e.jpg",
  },
  {
    id: 5,
    name: "Kayak boat",
    price: "600,00",
    image: "https://i.postimg.cc/hXfTVS37/27acd65217afdaf67ab65f33b11d94bf.jpg",
  },
];

function renderProducts(arr) {
  for (product of arr) {
    console.log(product);
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.addEventListener("click", () => openCardProductDetail(product));

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productPriceProduct = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const figure = document.createElement("figure");
    const iconCart = document.createElement("img");
    iconCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figure.appendChild(iconCart);
    productPriceProduct.appendChild(productPrice);
    productPriceProduct.appendChild(productName);

    productInfo.append(productPriceProduct, figure);

    productCard.append(productImage, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productsList);
