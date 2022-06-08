/* Start Landing */
let otherLinks = document.querySelector("#other");
let megaMenu = document.querySelector(".mega-menu");

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
/* End Landing */
/* Start Our Skills */
let ourSkills = document.querySelector("#our-skills");
let progs = [...document.querySelectorAll(".progress span")];

let skillsFunc = () => {
  if (window.scrollY >= ourSkills.offsetTop - 300) {
    for (let prog of progs) {
      prog.style.width = prog.dataset.width;
    }
  }
};
/* End Our Skills */
/* Start Latest Events */

// Get Event Date
let eventDate = new Date("Jun 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find Diffrence Beween Now and CountDown Date
  let dateDiff = eventDate - dateNow;

  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  let minutes = Math.floor(dateDiff / (1000 * 60)) % 60;
  let seconds = Math.floor(dateDiff / 1000) % 60;

  // Display Time
  document.querySelector("#days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector("#hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector("#minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector("#seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  // If Time is Up
  if (dateDiff < 0) {
    clearInterval(counter);
    document.querySelector("#days").innerHTML = "00";
    document.querySelector("#hours").innerHTML = "00";
    document.querySelector("#minutes").innerHTML = "00";
    document.querySelector("#seconds").innerHTML = "00";
  }
}, 1000);
/* End Latest Events */
/* Start Stats */

// Get Stats Section
let stats = document.querySelector("#stats");
// Get Nums
let nums = [...document.querySelectorAll(".num")];

// Start Count When Section Is In View
let statsFunc = () => {
  for (let num of nums) {
    if (window.scrollY >= stats.offsetTop - 300) {
      let counter = setInterval(() => {
        if (num.innerHTML !== num.dataset.achivement) {
          num.innerHTML++;
        } else {
          clearInterval(counter);
        }
      }, 2000 / num.dataset.achivement);
    }
  }
};
/* End Stats */

/* Start On Scroll Functions */
window.onscroll = () => {
  skillsFunc();
  statsFunc();
};
/* End On Scroll Functions */
