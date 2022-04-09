/*Summer Sexton
N220 Spring 2022
April 8, 2022*/

//Set HTML elements for use in javascript
let userInput = document.getElementById("userInput");
let dvResult = document.getElementById("result");

function isDivisible(){
    //sets a variable of the input
    let num = userInput.value
    //declares default; it's automatically NOT divisible
    let divisibleSeven = false;

    //Checks for a remainder. If it's 0, it's divisible.
    if(num%7 == 0){
        divisibleSeven = true;
    }

    //sets it as the HTML
    dvResult.innerHTML = divisibleSeven;
    
}

//adds it to the body to show result
document.body.appendChild(dvResult);