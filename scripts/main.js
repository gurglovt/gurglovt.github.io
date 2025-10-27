const myImage = document.querySelector("img");
let thisIs = document.querySelector("h3");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/doggy.jpg") {
    myImage.setAttribute("src", "images/doggy_tee.jpg");
    thisIs.textContent = `This is my tshirt.`;
  } else {
    myImage.setAttribute("src", "images/doggy.jpg");
    thisIs.textContent = `This is not my dog.`;
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Listen to me, ${myName}.`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Listen to me, ${storedName}.`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
