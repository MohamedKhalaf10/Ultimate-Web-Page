const otherLinks = document.querySelector("#other");
const megaMenu = document.querySelector(".mega-menu");

otherLinks.addEventListener("click", (e) => {
  e.preventDefault();
  if (megaMenu.style.transform === "translateY(100%)") {
    megaMenu.style.transform = "translateY(0)";
    megaMenu.style.opacity = "1";
  } else {
    megaMenu.style.transform = "translateY(100%)";
    megaMenu.style.opacity = "0";
  }
});
