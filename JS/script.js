const input = document.querySelector(".input");

addEventListener("keydown", inputText);
addEventListener("keydown", calc)

let savedValue = 0;
let savedValueTwo = 0;
let what = 0;
let whatAction = 0;

function inputText(e) {
   if (e.code == "Escape" || e.code == "Backspace") {

      if (input.textContent.length > 0) {
         let inputValue = input.textContent.slice(0, -1);
         input.textContent = inputValue;
         if (what == 0){
            savedValue = input.textContent;
         }
         if (what != 0){
            savedValueTwo = input.textContent;
         }
      }


   } else {
      if (Number(e.key) >= 0 || e.key == ".") {
         if (input.textContent.length > 19) {
            input.style.fontSize = "24px";
         }
         if (input.textContent.length < 26) {
            input.textContent = input.textContent + e.key;
            if (what == 0){
               savedValue = input.textContent;
            }
            if (what != 0){
               savedValueTwo = input.textContent;
            }
         }
      }
   }
}

function inputDel(){
   if (input.textContent.length > 0) {
      let inputValue = input.textContent.slice(0, -1);
      input.textContent = inputValue;
      if (what == 0){
         savedValue = input.textContent;
      }
      if (what != 0){
         savedValueTwo = input.textContent;
      }
   }
}

function telInputText(number){
      if (input.textContent.length > 19) {
         input.style.fontSize = "24px";
      }
      if (input.textContent.length < 24) {
         input.textContent = input.textContent + number;
         if (what == 0){
            savedValue = input.textContent;
         }
         if (what != 0){
            savedValueTwo = input.textContent;
         }
      }
   }

function calc(e) {
   if (e.key === "+") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      addEventListener('keydown', Sum)
      what = 1;
   }
   if (e.key === "*") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      addEventListener('keydown', multi)
      what = 1;
   }
   if (e.key === "/") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      addEventListener('keydown', del)
      what = 1;
   }
   if (e.key === "-") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      addEventListener('keydown', minus)
      what = 1;
   }
}
function telCalc(action) {
   if (action == "+") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      whatAction = 1
      what = 1;
   }
   if (action == "*") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      whatAction = 2
      what = 1;
   }
   if (action == "/") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      whatAction = 3
      what = 1;
   }
   if (action == "-") {
      savedValueTwo = input.textContent;
      input.textContent = '';
      whatAction = 4
      what = 1;
   }
}

function telSum(){
   if (whatAction == 1){
      inputSum = Number(savedValue) + Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      whatAction = 0;
   }
   if (whatAction == 2){
      inputSum = Number(savedValue) * Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      whatAction = 0;
   }
   if (whatAction == 3){
      inputSum = Number(savedValue) / Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      whatAction = 0;
   }
   if (whatAction == 4){
      inputSum = Number(savedValue) - Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      whatAction = 0;
   }
}

function Sum(e) {
   if (e.key == "Enter") {
      inputSum = Number(savedValue) + Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      what = 0;
      removeEventListener("keydown", Sum)
   }
}
function multi(e) {
   if (e.key == "Enter") {
      inputSum = Number(savedValue) * Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      what = 0;
      removeEventListener("keydown", multi)
   }
}
function minus(e) {
   if (e.key == "Enter") {
      inputSum = Number(savedValue) - Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      what = 0;
      removeEventListener("keydown", minus)
   }
}
function del(e) {
   if (e.key == "Enter") {
      inputSum = Number(savedValue) / Number(savedValueTwo);
      input.textContent = inputSum;
      savedValue = input.textContent;
      what = 0;
      removeEventListener("keydown", del)
   }
}

function log(){
   console.log(123);
}