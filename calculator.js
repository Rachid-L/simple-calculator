const firstValue = parseInt(prompt("Entrez première valeur")) 
const operator = prompt("Entrez l'opérateur")
const secondValue = parseInt(prompt("Entrez seconde valeur"))

if(operator === "+") {  
    console.log(firstValue + secondValue);
    }
    else if(operator === "-") {
        console.log(firstValue - secondValue);
    }
    else if(operator === "/") {
        console.log(firstValue / secondValue);
    }
    else if(operator === "*") {
        console.log(firstValue * secondValue);
    }
    else {
        console.log("Invalid operator")
    }
        