function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/imagens/icons/Icon.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/imagens/icons/close.svg";
  }
}
