const otherLinks = document.querySelector("#other");
const megaMenu = document.querySelector(".mega-menu");

const ourSkills = document.querySelector("#our-skills");
const progs = [...document.querySelectorAll(".progress span")];

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

window.onscroll = () => {
  if (window.scrollY >= ourSkills.offsetTop - 300) {
    for (let prog of progs) {
      prog.style.width = prog.dataset.width;
    }
  }
};
