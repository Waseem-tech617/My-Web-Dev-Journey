// Project NO : 1 BUTTON CLICK ON OFF.
let button = document.querySelector("button");
button.addEventListener("click", function () {
    if (button.classList.toggle("ON")) {
        button.innerText = "ON";
    } else {
        button.innerText = "OFF";
    }
});



// Project NO : 2 USE  OF INPUT EVENTLISTENER.
let input = document.querySelector("input");
input.addEventListener("change", function (val) {
    console.log(val);
});



// Project NO : 3 USE  OF CHANGE EVENTLISTENER.
let h3 = document.querySelector("h3");
let select = document.querySelector("select");
select.addEventListener("change", function (dets) {
    h3.textContent = `Fruits Selected Is : ${dets.target.value}`;
});



// Project NO : 4 USE  KEYDOWN EVENTLISTENER.
let h1 = document.querySelector(" h1");
window.addEventListener("keydown", function (val) {
    h1.textContent = `${val.key}`;
});



// Project NO : 5 USE  OF CLICK AND CHANGE EVENTLISTENER.
let file=document.querySelector("#input");
let btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
file.click();
});
file.addEventListener("change",function(val){
let file=val.target.files[0];
if(file){
    btn.textContent=file.name;
}
});