let menuIcon = document.getElementById("menu-icon");
let links = document.getElementById("links");
menuIcon.onclick = function () {
  if (links.style.height == "155px") {
    links.style.height = "0px";
    setTimeout(() => {
      links.classList.remove("active");
    }, 300);
  } else {
    links.classList.add("active");
    setTimeout(() => {
      links.style.height = "155px";
    }, 1);
  }
};
let prevPBtn = document.querySelector("#prev-paragraph");
let nextPBtn = document.querySelector("#next-paragraph");
let paragraphCount = 3;
let paragraphOption = 2;
let paragraphontainer = document.getElementById("paragraph-container");
function handleParagraph() {
  if (paragraphOption == 1) {
    paragraphontainer.style.transform = "translateX(120%)";
  } else if (paragraphOption == 2) {
    paragraphontainer.style.transform = "translateX(0%)";
  } else if (paragraphOption == 3) {
    paragraphontainer.style.transform = "translateX(-120%)";
  }
  if (paragraphOption == 3) {
    nextPBtn.style.color = "#ddd";
  } else {
    nextPBtn.style.color = "var(--main-color)";
  }
  if (paragraphOption == 1) {
    prevPBtn.style.color = "#ddd";
  } else {
    prevPBtn.style.color = "var(--main-color)";
  }
}
nextPBtn.onclick = function () {
  if (paragraphOption == 3) {
    return false;
  } else {
    paragraphOption++;
  }
  handleParagraph();
};
prevPBtn.onclick = function () {
  if (paragraphOption == 1) {
    return false;
  } else {
    paragraphOption--;
  }
  handleParagraph();
};
let portfolioImgs = document.querySelectorAll(
  ".portfolio .container .imgs-container img"
);
portfolioImgs.forEach(function (img) {
  img.addEventListener("click", () => {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    let popUpBox = document.createElement("div");
    popUpBox.className = "popup-box";
    let icon = document.createElement("i");
    icon.className = "fas";
    icon.classList.add("fa-times");
    popUpBox.appendChild(icon);
    let portfolioImg = document.createElement("img");
    portfolioImg.src = img.src;
    popUpBox.appendChild(portfolioImg);
    document.body.appendChild(popUpBox);
    let title = document.createElement("h4");
    title.appendChild(document.createTextNode(img.alt));
    popUpBox.appendChild(title);
    icon.onclick = function () {
      overlay.remove();
      popUpBox.remove();
    };
  });
});

let textArea = document.getElementById("message");
let submitBtn = document.getElementById("submit-btn");
let numbersSpan = document.getElementById("letters-left");
let lettersLeft = 250 - textArea.value.length;

textArea.addEventListener("keypress", handleLettters);
function handleLettters() {
  lettersLeft = 250 - textArea.value.length;
  numbersSpan.textContent = `Chracters Left : ${lettersLeft}`;
  if (lettersLeft < 0) {
    numbersSpan.style.color = "red";
  } else {
    numbersSpan.style.color = "var(--main-color)";
  } 
}
setInterval(() => {
  handleLettters()
}, 100);
submitBtn.onclick = function (e) {
  if (lettersLeft < 0) {
    e.preventDefault()
    window.alert("message Chracters must be less than 250 letter")
  }
}