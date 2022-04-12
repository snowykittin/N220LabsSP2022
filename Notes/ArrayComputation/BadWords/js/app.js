/*Summer Sexton
N220 Spring 2022
April 12, 2022
*/

let userInput = document.getElementById("sentence");
let dvFound = document.getElementById("found");
let dvWordCount = document.getElementById("wordCount");

function sentenceSplit(){
    let sentence = userInput.value;
    //splits the sentence by spaces
    let splitSentence = sentence.split(" ");
    let wordCount = 0;
    let isFound = "not found";

    for(let i = 0; i < splitSentence.length; i++){
        //checking the current word if it is bad. if it is, word count goes up and it is noted that isFound is well, found.
        if(splitSentence[i] == "clear" ){
            wordCount++;
            isFound = "Found";
        }else if(splitSentence[i] == "water"){
            wordCount++;
            isFound = "Found";
        }else if(splitSentence[i] == "tires"){
            wordCount++;
            isFound = "Found";
        }
        else{
            isFound = "Not found";
        }

    }

    dvFound.innerHTML = isFound;
    dvWordCount.innerHTML = wordCount + " bad words found.";

    document.body.appendChild(dvFound);
    document.body.appendChild(dvWordCount);
    // resets the input value
    userInput.value = "";
}
