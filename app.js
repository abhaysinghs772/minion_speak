`use strict`

// console.log(`hi`);
// let userName = prompt(`hi user emter your name`);
// alert(`hi ${userName}`);

let textInput = document.querySelector("#textInput");
let outputDiv = document.querySelector(`.output`)
let myButton = document.querySelector("#translate");

// outputDiv.innerText = `i'm captain america`

myButton.addEventListener(`click`, function (e) {
    // console.log(`${textInput.value}`);
    outputDiv.innerText = `asjsjjsjsjsjsj ${textInput.value}` ; 
});