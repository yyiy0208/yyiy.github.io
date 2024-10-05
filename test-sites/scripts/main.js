let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src")
    if (mySrc == "images/roy.jpg" ) {
        myImage.setAttribute("src", "images/roy2.jpg");
    } else {
        myImage.setAttribute("src", "images/roy.jpg");
    }
};

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    let myName = prompt("input your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = "hi, " + myName

    }

}


if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "hi, " + storedName;

}

myButton.onclick = function() {
    setUserName();
}