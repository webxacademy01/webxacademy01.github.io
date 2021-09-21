
/************************************************************Image Changer**************************************************************************/

let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/myPic1.jpg') {
      myImage.setAttribute('src','images/pic2.jfif');
    } else {
      myImage.setAttribute('src','images/myPic1.jpg');
    }
}






/***************************************************Store User Inpute On Local Storage*************************************************************/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || !isNaN(myName)) {
     setUserName();
}else{
  localStorage.setItem('name', myName);
  myHeading.textContent =  'Welcome to my website ' + myName + ', Nice to meet you.'  ;
}
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back ' + storedName + ', glad to see you again.';
}


myButton.onclick = function() {
  setUserName();
}





/************************************************************ mindGuess.js Game********************************************************************/


let ans = document.getElementById('gameAns');

function game() {

alert("Pick a whole number between 1 and 10 then press OK");
alert("Multiply the number you picked by 2 to continue");
alert("Then Multiply your result by 5 and press OK");
alert("Now divide your answer by the original number you picked from the beginning");
alert("Finally, suntract 7 from the result");


ans.textContent = "Your Final answer is " + " ' " + 3 + " '";

}

function clearAns() {

ans.textContent = "Ready To Play!";

}
