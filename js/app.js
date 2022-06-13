/* Start Go Up */

let goUp = document.querySelector(".go-up");

function goUpFunc() {
  if (this.scrollY === 0) {
    goUp.style.right = "-100px";
  } else {
    goUp.style.right = "10px";
  }
}
// Scroll To Top On Click
goUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

/* End Go UP */
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
/* Start Top Videos */

// Get Videos List
let videos = [...document.querySelectorAll("#top-videos ul li")];
// Get Video Img
let img = document.querySelector(".video");

// Get Random Icon
let random = document.querySelector(".random");

// Declare Click Event Function
function topVideos(element) {
  // Change Img Src
  img.innerHTML = `<img src="images/videos-0${element}.jpg"">
      <div class="description">Everything About The Virtual Hosts</div> `;
  // Remove active-video Class From The Active Video
  document.querySelector(".active-video").classList.remove("active-video");
}

// Loop Over The Videos List
for (let vid of videos) {
  // Get data-video Value
  let dataVideo = vid.dataset.video;

  // Add Event Listener To Each Video On Click
  vid.addEventListener("click", () => {
    // Execute topVideos Function
    topVideos(dataVideo);
    // Add active-video Class To The New Clicked Video
    vid.classList.add("active-video");
  });
}
// Add Event Listener To Random Icon On Click
random.addEventListener("click", () => {
  // Get Random Number From 1 To 7
  let randomNum = Math.floor(Math.random() * 7) + 1;
  if (
    document.getElementById(`${randomNum}`) !=
    document.querySelector(".active-video")
  ) {
    // Execute topVideos Function
    topVideos(randomNum);
    // Add active-video Class To The New Clicked Video
    document.getElementById(`${randomNum}`).classList.add("active-video");
  } else {
    // Get New Random Number
    randomNum = Math.floor(Math.random() * 7) + 1;
    // Execute topVideos Function
    topVideos(randomNum);
    // Add active-video Class To The New Clicked Video
    document.getElementById(`${randomNum}`).classList.add("active-video");
  }
});

/* End Top Videos */
/* Start On Scroll Functions */
window.onscroll = () => {
  skillsFunc();
  statsFunc();
  goUpFunc();
};
/* End On Scroll Functions */
