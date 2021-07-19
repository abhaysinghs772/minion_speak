`use strict`

// console.log(`hi`);
// let userName = prompt(`hi user emter your name`);
// alert(`hi ${userName}`);

let myButton = document.querySelector("#translate");
let textInput = document.querySelector("#textInput");

myButton.addEventListener(`click`, function(e){
    // console.log(e);
    // console.log(`${e} ,i got clicked`);
    console.log(`${textInput.value}`);
});