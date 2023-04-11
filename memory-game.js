const screen1=document.querySelector("#screen1");
const screen2=document.querySelector("#screen2");
const button=document.querySelector("button");

button.onclick=()=>{
    screen1.style.display="none";
    screen2.style.display="block";
}