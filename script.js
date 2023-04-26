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
 https://ipdata.co/blog/how-to-get-the-ip-address-in-javascript/
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

for (i = 0; i < title.length; i++) {
  var height = header.offsetHeight;
  var negativeHeight = height * -1;
  var offsetSize = height;
  title[i].style.paddingTop = height + "px";
  title[i].style.marginTop = negativeHeight + "px";
}

/* calculating header height for offset end */

/*
Light Mode Dark Mode Probably a more elegant way to achieve this, but i like loops
*/
var radio = document.querySelector("input");
var wrapper = document.querySelector("#wrapper");
var text = document.querySelectorAll("p");
var body = document.querySelector("body");
var deffy = document.querySelectorAll(".definition");
var header = document.querySelector("header");
var head1 = document.querySelector("h1");
var head2 = document.querySelectorAll("h2");
var head3 = document.querySelectorAll("h3");
var head4 = document.querySelectorAll("h4");
var anch = document.querySelectorAll("a");
var innyD = document.querySelectorAll(".inline-d");
var cardsy = document.querySelectorAll(".cards");
var imagen = document.querySelectorAll("img");
var modalText = document.querySelectorAll(".centre-t");
var modalHeader = document.querySelectorAll(".modal-header");
var modalContent = document.querySelectorAll(".modal-content");
var emph = document.querySelector("em");
var ole = document.querySelectorAll(".translation");
var code = document.querySelectorAll("code");

var deffyCount = deffy.length;
var textCount = text.length;
var head2Count = head2.length;
var head3Count = head3.length;
var head4Count = head4.length;
var anchCount = anch.length;
var innyDCount = innyD.length;
var cardCount = cardsy.length;
var imagenCount = imagen.length;
var modalTextCount = modalText.length;
var modalHeaderCount = modalHeader.length;
var modalContentCount = modalContent.length;
var oleLength = ole.length;
var codeLength = code.length;
radio.onclick = function () {
  // if (radio.checked) {
  wrapper.classList.toggle("darkMode-bcw");
  body.classList.toggle("darkMode-bcw");
  header.classList.toggle("darkMode-bcw");
  head1.classList.toggle("darkMode-head1");
  emph.classList.toggle("darkMode-emph");
  for (let i = 0; i < textCount; i++) {
    text[i].classList.toggle("darkMode-txt");
  }
  for (let i = 0; i < deffyCount; i++) {
    deffy[i].classList.toggle("darkMode-txt");
  }
  for (let i = 0; i < head2.length; i++) {
    head2[i].classList.toggle("darkMode-head2");
  }
  for (let i = 0; i < head3Count; i++) {
    head3[i].classList.toggle("darkMode-txt");
  }
  for (let i = 0; i < head4Count; i++) {
    head4[i].classList.toggle("darkMode-txt");
  }
  for (let i = 0; i < anchCount; i++) {
    anch[i].classList.toggle("darkMode-anch");
  }

  for (let i = 0; i < innyDCount; i++) {
    innyD[i].classList.toggle("darkMode-innyD");
  }
  for (let i = 0; i < cardCount; i++) {
    cardsy[i].classList.toggle("darkMode-card");
  }

  for (let i = 0; i < imagenCount; i++) {
    imagen[i].classList.toggle("darkMode-img");
  }
  for (let i = 0; i < modalTextCount; i++) {
    modalText[i].classList.toggle("darkMode-modalText");
  }
  for (let i = 0; i < modalHeaderCount; i++) {
    modalHeader[i].classList.toggle("darkMode-modalHeader");
  }
  for (let i = 0; i < modalContentCount; i++) {
    modalContent[i].classList.toggle("darkMode-modalContent");
  }
  for (let i = 0; i < ole.length; i++) {
    ole[i].classList.toggle("darkMode-ol");
  }
  for (let i = 0; i < code.length; i++) {
    code[i].classList.toggle("darkMode-code");
  }
};

// if (!radio.checked) {
//   wrapper.classList.remove("darkMode-bcw");
//   body.classList.remove("darkMode-bcw");
//   header.classList.remove("darkMode-bcw");
//   for (let i = 0; i < textCount; i++) {
//     text[i].classList.remove("darkMode-txt");
//   }
//   head1.classList.remove("darkMode-head1");
//   emph.classList.remove("darkMode-emph");
//   for (let i = 0; i < head2.length; i++) {
//     head2[i].classList.remove("darkMode-head2");
//   }
//   for (let i = 0; i < head3Count; i++) {
//     head3[i].classList.remove("darkMode-txt");
//   }
//   for (let i = 0; i < head4Count; i++) {
//     head4[i].classList.remove("darkMode-txt");
//   }

//   for (let i = 0; i < deffyCount; i++) {
//     deffy[i].classList.remove("darkMode-txt");
//   }
//   for (let i = 0; i < anchCount; i++) {
//     anch[i].classList.remove("darkMode-anch");
//   }

//   for (let i = 0; i < innyDCount; i++) {
//     innyD[i].classList.remove("darkMode-innyD");
//   }
//   for (let i = 0; i < cardCount; i++) {
//     cardsy[i].classList.remove("darkMode-card");
//   }
//   for (let i = 0; i < imagenCount; i++) {
//     imagen[i].classList.remove("darkMode-img");
//   }
//   for (let i = 0; i < modalTextCount; i++) {
//     modalText[i].classList.remove("darkMode-modalText");
//   }
//   for (let i = 0; i < modalHeaderCount; i++) {
//     modalHeader[i].classList.remove("darkMode-modalHeader");
//   }
//   for (let i = 0; i < modalContentCount; i++) {
//     modalContent[i].classList.remove("darkMode-modalContent");
//   }
//   for (let i = 0; i < ole.length; i++) {
//     ole[i].classList.remove("darkMode-ol");
//   }
//   for (let i = 0; i < code.length; i++) {
//     code[i].classList.remove("darkMode-code");
//   }
// }
//};
/*
Light Mode Dark Mode End
*/
