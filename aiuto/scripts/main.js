let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/foto-dani.JPG') {
      myImage.setAttribute('src','images/dani-reale.JPG');
    } else {
      myImage.setAttribute('src','images/foto-dani.JPG');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'benvenuto nel mondo di Daniele, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'benvenuto nel mondo di Daniele, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }

