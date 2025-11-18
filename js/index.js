const burger = document.querySelector(".header__burger");
const menuContainer = document.querySelector(".header__menu-container");

burger.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});
