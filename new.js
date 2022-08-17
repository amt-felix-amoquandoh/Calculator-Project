const mainDisplayText = document.querySelector("#numbersSumDisplay");
const operationDisplayText = document.querySelector("#operationDisplay");
const calcNumber = document.querySelectorAll("#numBtn");
const operator =  document.querySelectorAll("#operatorBtn");
const equalTo = document.querySelector("#equalBtn");
const clearLast = document.getElementById("clearBtn");
const reset = document.getElementById("resetBtn");


class MainCalculator {
    constructor(operationDisplayText, mainDisplayText){
        this.operationDisplayText = operationDisplayText;
        this.mainDisplayText = mainDisplayText;
        this.resetAll();
    }

    clearPrevious(){}

    resetAll(){
        this.mainDisplay= "";
        this.operationDisplay = "";
        this.operator = undefined
    }

    attachNumber(number){
        if (number === "." && this.mainDisplay.includes(".")) return;
        this.mainDisplay = this.mainDisplay.toString() + number.toString();
    }

    selectOperator(operation){
        if(this.mainDisplay === " ") return;
        if (this.operationDisplay !== ""){
            this.calculate();
        }
        this.operation = operation;
        this.operationDisplay = this.mainDisplay;
        this.mainDisplay = "";
    }

    calculate(){
        let calculation;
        const oldNumber = parseFloat(this.oldNumber);
        const newNumber = parseFloat(this.newNumber);
        if (isNaN(oldNumber) || isNaN(newNumber)) return;
        switch(this.operation){
            case "+":
                calculation = oldNumber + newNumber
                break; 
                case "-":
                calculation = oldNumber - newNumber
                break; 
                case "*":
                calculation = oldNumber * newNumber
                break; 
                case "/":
                calculation = oldNumber / newNumber
                break; 
                case "%":
                calculation = oldNumber % newNumber
                break; 
            default: return;
        }
        this.mainDisplay = calculation;
        this.operation = undefined;
        this.operationDisplay = " ";
    }

    updateScreen(){
        this.mainDisplayText.innerText = this.mainDisplay;
        this.operationDisplayText.innerText = this.operationDisplay
    }
}

 

const calculator = new MainCalculator(operationDisplayText, mainDisplayText);

calcNumber.forEach( button => {
    button.addEventListener( "click", () => {        
        calculator.attachNumber(button.innerText);
        calculator.updateScreen();
    })
});

operator.forEach( button => {
    button.addEventListener( "click", () => {        
        calculator.selectOperator(button.innerText);
        calculator.updateScreen();
    })
})

equalTo.addEventListener( "click", () => {
    calculator.calculate();
    calculator.updateScreen();
})