const display = document.getElementById("numbersSumDisplay");
const Opdisplay = document.getElementById("operationDisplay");
const calcNumber = document.querySelectorAll("#numBtn");
const operator =  document.querySelectorAll("#operatorBtn");
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


let displayNum = "";
let displayOp = "";
let result = null;
let lastOperation = "";
let decimalDot = false;


// number display method
calcNumber.forEach( number => { 
   number.addEventListener("click", (e) => {
      if(e.target.innerText === "." && !decimalDot){
         decimalDot = true;
      } else if(e.target.innerText === "." && decimalDot){
         return;
      }
     
      displayNum += e.target.innerText;
      display.innerText = displayNum
   })
})

// operation method
operator.forEach( operation => {
   operation.addEventListener("click", (e)=>{
      if (!displayNum) return;
      decimalDot = false;
      const operatorName = e.target.innerText;
      if(displayNum && lastOperation){
         mathOperation();
      } else {
         result = parseFloat(displayNum); 
      }
      clearDisplay(operatorName);
   })
});

function clearDisplay(name = ""){
   
   displayNum = " ";
}

function mathOperation (){
   if(lastOperation === "x"){
      result = parseFloat(result) * parseFloat(displayNum)
   } else if (lastOperation === "+"){
      result = parseFloat(result) + parseFloat(displayNum)
   }
}



















