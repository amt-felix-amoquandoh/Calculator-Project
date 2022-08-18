let toggleSwitch = document.getElementsByClassName('redButton')[0];
 const bodyElement = document.body;
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






        function theme1() {
            toggleSwitch.classList.add('horizTranslate1');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            bodyElement.classList.toggle("theme1" );
            if(bodyElement.classList.contains("theme1")){
               localStorage.setItem("firstTheme", "themeActive");
            } else{
               localStorage.removeItem("firstTheme");
            }
                      
           
        }

        function theme2() {
            toggleSwitch.classList.add('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate1');
            bodyElement.classList.toggle("theme2");
            if(bodyElement.classList.contains("theme2")){
               localStorage.setItem("secondTheme", "themeActive");
            } else{
               localStorage.removeItem("secondTheme");
            }
            
        }

        function theme3() {
            toggleSwitch.classList.add('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate1');
            bodyElement.classList.toggle("theme3");
            if(bodyElement.classList.contains("theme3")){
               localStorage.setItem("thirdTheme", "themeActive");
            } else{
               localStorage.removeItem("thirdTheme");
            }

            // document.body.style.backgroundColor = "red"
            // document.getElementById("outerContainer").style.backgroundColor = "#000000"
            // document.getElementById("buttonContainer").style.backgroundColor = "#444444"
            // document.getElementById("legendTextContainer").style.color = "#E2D241"
            
        }
