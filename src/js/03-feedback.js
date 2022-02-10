var throttle = require('lodash.throttle');
const refs = {
    "form": document.querySelector("form"),
    "email": document.querySelector("input"),
    "message": document.querySelector("textarea"),
    "btn": document.querySelector("button")
}


//  getting INPUTS put them into Object
let inputObj = {};
let savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
    savedData = JSON.parse(savedData);
    inputObj = savedData;
    Object.entries(savedData).forEach(([name, value]) => {
        refs.form.elements[name].value = value;
    })
 } 
refs.form.addEventListener("input",throttle(getInput, 500));


function getInput(evt) {
    
    inputObj[evt.target.name]=evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(inputObj));
    inputObj = "";
}

// 
//  SUBMIT BUTTON

refs.btn.addEventListener("click", logLocal)

function logLocal(event) {
    event.preventDefault();
     refs.email.value = "";
     refs.message.value = "";
    localStorage.clear();

}

// 

