/*Summer Sexton
N220 Spring 2022
April 12, 2022
*/

let input = document.getElementById("userInput");
let dvSum = document.getElementById("sum");
let dvAverage = document.getElementById("average");

function sumInput(){
    let numList = input.value;
    //splits the string by commas
    let numSplit = numList.split(",");
    let numSum = 0;
    let numCount = 0;

    for(let i = 0; i < numSplit.length; i++){
        //converts the string into an integer, adding it to the sum and then adding one to the count which will be used to calculate the average
        let number = parseInt(numSplit[i]);
        numSum += number;
        numCount++;
    }

    let numAverage = numSum / numCount;
    dvSum.innerHTML = "The sum is " + numSum;
    dvAverage.innerHTML = "The average is " + numAverage;

    document.body.appendChild(dvSum);
    document.body.appendChild(dvAverage);
    //clears the input to enter in new numbers
    input.value = "";
}