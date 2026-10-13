
const shoes = [
    { image: "black.png", name: "BLACK NIKE", price: "$120" },
    { image: "blue.png", name: "BLUE NIKE", price: "$135" },
    { image: "red.png", name: "RED NIKE", price: "$150" }
];

let currentShoe = 0;

const mainImage = document.querySelector(".img2");
const shoeTitle = document.querySelector("#hero-name");
const shoePrice = document.querySelector("#hero-price");
const currentSlide = document.querySelector("#current-slide");

const leftArrow = document.querySelector(".arrows .left");
const rightArrow = document.querySelector(".arrows .right");

function showShoe(index) {
    currentShoe = (index + shoes.length) % shoes.length;

    const shoe = shoes[currentShoe];

    // Меняем изображение
    mainImage.src = shoe.image;
    mainImage.alt = shoe.name;

    // Меняем название
    shoeTitle.innerHTML =
        `<span>${shoe.name.split(" ")[0]}</span> ` +
        shoe.name.split(" ").slice(1).join(" ");

    // Меняем цену
    shoePrice.textContent = shoe.price;

    // Меняем номер слайда
    currentSlide.textContent =
        String(currentShoe + 1).padStart(2, "0");
}

// Стрелка влево
leftArrow.addEventListener("click", function () {
    showShoe(currentShoe - 1);
});

// Стрелка вправо
rightArrow.addEventListener("click", function () {
    showShoe(currentShoe + 1);
});

// Текущий год в футере
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
