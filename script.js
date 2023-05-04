/*
Show modal window
*/
var modal = document.querySelectorAll(".modal");

var btn = document.querySelectorAll(".btn");

var span = document.querySelectorAll(".close");

for (let i = 0; i < span.length; i++) {
  btn[i].onclick = function () {
    modal[i].style.display = "block";
  };

  span[i].onclick = function () {
    modal[i].style.display = "none";
  };

  window.addEventListener("click", function (event) {
    if (event.target == modal[i]) modal[i].style.display = "none";
  });
}

/*
Show modal window end
*/

/*
INFORMATION FROM API
*/
/*
 https://ipdata.co/blog/how-to-get-the-ip-address-in-javascript/ not our code
*/
var pInfo = document.querySelector(".information");
function json(url) {
  return fetch(url).then((res) => res.json());
}

let apiKey = "627c6d76f95b0ee0e7cef70893447a56f28f3859021e4cab28a183ac";
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
  e.addEventListener("click", function () {
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
var radio = document.querySelector("input");
var background = document.querySelectorAll("#wrapper, body, header");
var text = document.querySelectorAll(
  "p, h3,h4,.definition,.translation, .centre-t"
);
var headMain = document.querySelectorAll("h1,h2");
var anch = document.querySelectorAll("a");

// .inline-d is the text that appears when clicking on a key word.
var innyD = document.querySelectorAll(".inline-d");
var cardsy = document.querySelectorAll(".cards");
var image = document.querySelectorAll("img");
var modalHeader = document.querySelectorAll(".modal-header");
var modalContent = document.querySelectorAll(".modal-content");
var emph = document.querySelector("em");
var code = document.querySelectorAll("code");

// when clicking the sun or moon icon in the top right this function will execute
radio.addEventListener("click", () => {
  emph.classList.toggle("lightMode-emph");
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
});

/*
Light Mode Dark Mode End
*/
