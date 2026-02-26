// Project NO : 1 BUTTON CLICK ON OFF.
let button = document.querySelector("button");
button.addEventListener("click", function () {
    if (button.classList.toggle("ON")) {
        button.innerText = "ON";
    } else {
        button.innerText = "OFF";
    }
});


// Project NO : 2 USE  OF INPUT EVENTLISNER.
let input = document.querySelector("input");
input.addEventListener("change", function (val) {
    console.log(val);
});


// Project NO : 3 USE  OF CHANGE EVENTLISNER.
let h3 = document.querySelector("h3");
let select = document.querySelector("select");
select.addEventListener("change", function (dets) {
    h3.textContent = `Fruits Selected Is : ${dets.target.value}`;
});


// Project NO : 4 USE  KEYDOWN EVENTLISNER.
let h1 = document.querySelector(" h1");
window.addEventListener("keydown", function (val) {
    h1.textContent = `${val.key}`;
});