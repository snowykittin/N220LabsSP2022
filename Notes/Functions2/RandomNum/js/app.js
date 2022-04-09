/*Summer Sexton
N220 Spring 2022
April 8, 2022*/

//Set elements as needed
let dvResult = document.getElementById("result");
let btnGenerate = document.getElementById("btnGenerate");

function randomNum(){
    //generates a random number and rounds it DOWN to the nearest whole number. In order to get a result of 10, the multiplier in Math.floor is 11
    var numRandom = Math.floor(Math.random() * 11);
    //Make the result the dvResult's HTML
    dvResult.innerHTML = numRandom;
}

//Run the function and add the result each time "Generate" is clicked.
btnGenerate.onclick = function(){
    randomNum();
    document.body.appendChild(dvResult);
}