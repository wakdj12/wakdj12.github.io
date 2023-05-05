/*
mODAL WINDOW FUNCTIONALLITY 
*/
const modal = document.querySelectorAll(".modal");

const btn = document.querySelectorAll(".btn");

const span = document.querySelectorAll(".close");

// Would have used for each functions here but thought it would get messy

// opening modal
for (let i = 0; i < span.length; i++) {
  btn[i].addEventListener("click", () => {
    modal[i].style.display = "block";
  });

  // closing modal with x "button"
  span[i].addEventListener("click", () => {
    modal[i].style.display = "none";
  });

  // closing modal with wibdow click
  window.addEventListener("click", (event) => {
    if (event.target == modal[i]) modal[i].style.display = "none";
  });
}

/*
mODAL WINDOW FUNCTIONALLITY END
*/

/*
INFORMATION FROM API
*/

/*
 https://ipdata.co/blog/how-to-get-the-ip-address-in-javascript/ not our code
*/
const pInfo = document.querySelector(".information");
function json(url) {
  return fetch(url).then((res) => res.json());
}

const apiKey = "627c6d76f95b0ee0e7cef70893447a56f28f3859021e4cab28a183ac";
json(`https://api.ipdata.co?api-key=${apiKey}`).then((data) => {
  pInfo.textContent = `IP Adress: ${data.ip}, City: ${data.city}, Approximate Latitude: ${data.latitude}, Approximate Longitude: ${data.longitude}, Operating System: ${window.navigator.oscpu}`;
});

pInfo.textContent = json(
  `https://api.ipdata.co/27.126.160.0/threat?api-key=${apiKey}`
).then((data) => {});

/*
INFORMATION FROM API END
*/

width = window.innerWidth;
height = window.innerHeight;

/*
When clicking on a defintion it will appear or disappear depending on it's current state. Implemented to reduce clutter on mobile.
*/
var x = document.querySelectorAll(".inline-d");

x.forEach((e) => {
  e.addEventListener("click", () => {
    w = e.childNodes[1];
    s = getComputedStyle(w);
    if (s.display === "none") {
      w.style.display = "inline";
    } else if (s.display === "inline") {
      w.style.display = "none";
    }
  });
});

/*
DECLUTTERING END
*/

/* calculating header height for internal link offset due to the sticky header */

var title = document.querySelectorAll(".shift"),
  i;
var header = document.querySelector("header");

title.forEach((t) => {
  var height = header.offsetHeight + 5;
  var negativeHeight = height * -1;
  t.style.paddingTop = height + "px";
  t.style.marginTop = negativeHeight + "px";
});

/* calculating header height for offset end */

/*
Light Mode Dark Mode
*/
const radio = document.querySelector("input");
const background = document.querySelectorAll("#wrapper, body, header");
const text = document.querySelectorAll("p,.definition,.translation, .centre-t");
const headMain = document.querySelectorAll("h1,h2,h3,h4");
const anch = document.querySelectorAll("a");
const modalTitle = document.querySelectorAll(".modal-header  > h3");
// .inline-d is the text that appears when clicking on a key word.
const innyD = document.querySelectorAll(".inline-d");
const cardsy = document.querySelectorAll(".cards");
const image = document.querySelectorAll("img");
const modalHeader = document.querySelectorAll(".modal-header");
const modalContent = document.querySelectorAll(".modal-content");
const emph = document.querySelectorAll("em");
const code = document.querySelectorAll("code");

// when clicking the sun or moon icon in the top right this function will execute
radio.addEventListener("click", () => {
  emph.forEach((e) => e.classList.toggle("lightMode-emph"));
  background.forEach((w) => w.classList.toggle("lightMode-bcw"));
  text.forEach((t) => t.classList.toggle("lightMode-txt"));
  headMain.forEach((h) => h.classList.toggle("lightMode-headMain"));
  anch.forEach((a) => a.classList.toggle("lightMode-anch"));
  innyD.forEach((i) => i.classList.toggle("lightMode-innyD"));
  cardsy.forEach((c) => c.classList.toggle("lightMode-card"));
  image.forEach((i) => i.classList.toggle("lightMode-img"));
  modalHeader.forEach((mH) => mH.classList.toggle("lightMode-modalHeader"));
  modalContent.forEach((mc) => mc.classList.toggle("lightMode-modalContent"));
  code.forEach((c) => c.classList.toggle("lightMode-code"));
  modalTitle.forEach((t) => t.classList.toggle("lightMode-mTitle"));
});

/*
Light Mode Dark Mode End
*/

/*
EASY,MEDIUM, DIFFICULT
*/
const emdList = document.querySelectorAll(".emd-list > li");
console.log(emdList);
const input = document.querySelector(".slidey");
const output = document.querySelector(".emd-content");
const inputTitle = document.querySelector(".emd-title");
const inputTitleDefault = inputTitle.textContent;
const lowContent = [
  "I know it has been covered before but creating strong passwords is extremely important in order to ensure privacy.",
  "Using a browser that blocks trackers and does not collect information about you such as DuckDuckGo.",
  "An obvious one, but don't leave devices unlocked when you aren't near them",
  "Decline non-essential cookies when possible",
];
const mediumContent = ["lorem", "ipsum", "hi", "bye"];
const highContent = ["bye", "hi", "ipsum", "lorem"];
input.addEventListener("input", (event) => {
  if (event.target.value == 1) {
    inputTitle.textContent = inputTitleDefault;
    emdList[0].textContent = lowContent[0];
    emdList[1].textContent = lowContent[1];
    emdList[2].textContent = lowContent[2];
    emdList[3].textContent = lowContent[3];
  } else if (event.target.value == 2) {
    inputTitle.textContent = "Inconvenience: Medium";
    emdList[0].textContent = mediumContent[0];
    emdList[1].textContent = mediumContent[1];
    emdList[2].textContent = mediumContent[2];
    emdList[3].textContent = mediumContent[3];
  } else if (event.target.value == 3) {
    inputTitle.textContent = "Inconvenience: High";
    emdList[0].textContent = highContent[0];
    emdList[1].textContent = highContent[1];
    emdList[2].textContent = highContent[2];
    emdList[3].textContent = highContent[3];
  }
});

/*
EASY,MEDIUM, DIFFICULT END
*/
