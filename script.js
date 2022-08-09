const display = document.getElementById("numbersSumDisplay");
const calcNumber = document.getElementById("numBtn");
const operator =  document.getElementById("operatorBtn");
const reset = document.getElementById("resetBtn");
const clearLast = document.getElementById("clearBtn");
const equalTo = document.getElementById("equalBtn");

const bodyElement = document.body;
const theme1 = document.getElementById("togglebtn");
const theme2 = document.getElementById("togglebtn2");
const theme3 = document.getElementById("togglebtn3");
const firstTheme = localStorage.getItem("firstTheme");
const secondTheme = localStorage.getItem("secondTheme");
const thirdTheme = localStorage.getItem("thirdTheme");

if(firstTheme){
    bodyElement.classList.add("theme1")
} 

if(secondTheme){
    bodyElement.classList.add("theme2")
} 

if(thirdTheme){
    bodyElement.classList.add("theme3")
}

theme1.addEventListener("click", function(){
    bodyElement.classList.toggle("theme1" );
     if(bodyElement.classList.contains("theme1")){
        localStorage.setItem("firstTheme", "themeActive");
     } else{
        localStorage.removeItem("firstTheme");
     }
});

theme2.addEventListener("click", function(){
    bodyElement.classList.toggle("theme2");
     if(bodyElement.classList.contains("theme2")){
        localStorage.setItem("secondTheme", "themeActive");
     } else{
        localStorage.removeItem("secondTheme");
     }
});

theme3.addEventListener("click", function(){
    bodyElement.classList.toggle("theme3");
     if(bodyElement.classList.contains("theme3")){
        localStorage.setItem("thirdTheme", "themeActive");
     } else{
        localStorage.removeItem("thirdTheme");
     }
});

let displayNum1 = "0";
let displayNum2 = "0";
let result = null;
let decimalDot = false;


