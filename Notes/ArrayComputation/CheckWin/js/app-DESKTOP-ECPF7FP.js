/*Summer Sexton
N220 Spring 2022
April 12, 2022
*/

let input = document.getElementById("userInput");
let dvResult = document.getElementById("result")

function checkWin(){
    let numList = input.value;
    //splits the string by commas
    let numSplit = numList.split(",");
    let winCon = 0;
    let result = "Not a winner"

    for(let i = 0; i < numSplit.length; i++){
        //converts string into a number
        let number = parseInt(numSplit[i]);

        //checks if it is a 1, if so, add to the win condition
        if(number == 1){
            winCon++;
        }else if(winCon == 3){
            result = "Winner!";
        }else{
            winCon = 0;
            result = "Not a winner";
        }
    }

    
    dvResult.innerHTML = result;
    document.body.appendChild(dvResult);
    //clears the input to enter in new numbers
    input.value = "";
}