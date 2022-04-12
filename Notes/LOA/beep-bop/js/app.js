/*Summer Sexton 
NEWM-N 220 
February 17, 2022 */

let divOutput = document.createElement("div");

for(let i = 0; i < 25; i++){
    //check if divisible by 3 AND 5
    if(i%3 == 0 && i%5 == 0){
        divOutput.innerHTML += "beepbop <br>";
    } 
    //then check if divisible by only 3
    else if(i%3 == 0){
        divOutput.innerHTML += "beep <br>";
    } 
    //then check if divisible by only 5
    else if(i%5 == 0){
        divOutput.innerHTML += "bop <br>";
    } 
    //if not, do this
    else{
        divOutput.innerHTML += "bap <br>";
    }

}

document.body.appendChild(divOutput);