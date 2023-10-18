// Exercise #1

var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener(`mouseover`, function () {
  fans.innerText = `123K`;
});

fish.addEventListener(`mouseover`, function () {
  fish.innerText = `47K`;
});

fish.addEventListener(`mouseout`, function () {
  fish.innerText = `???`;
});

pets.addEventListener(`mouseover`, function () {
  pets.innerText = `20K`;
});

// Exercise #2
var pageTitle = document.querySelector("title");
var ball = document.querySelector(".ball");
var toggle = document.querySelector("#toggle");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var quincy = document.querySelector(".cat img");

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
    pageTitle.innerText = "Stealth Quincy Profile";
    quincy.src = "img/quincy.jpg";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
    pageTitle.innerText = "Party Quincy Profile";
    quincy.src = "img/party-quincy.jpg";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "l") {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
    pageTitle.innerText = "Party Quincy Profile";
    quincy.src = "img/party-quincy.jpg";
  } else if (e.key === "d") {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      ball.classList.remove("move-right");
      h1.innerText = "Stealth Quincy";
      pageTitle.innerText = "Stealth Quincy Profile";
      quincy.src = "img/quincy.jpg";
    }
  }
});
