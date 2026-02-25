//   Project NO : 1 BUTTON CLICK ON OFF.
let button=document.querySelector("button");
button.addEventListener("click",function(){
   if( button.classList.toggle("ON")){
    button.innerText="ON";
   }else{
    button.innerText="OFF";
   }
});