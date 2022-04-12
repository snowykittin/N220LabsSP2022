let txtName = document.getElementById("txtName");
let dvStoryResult = document.getElementById("storyResult");

function generateStory(){
    let userName = txtName.value;
    let userInput = " ";
    for(let i = 0; i < 3; i++){
        userInput += (userName + " ");
    }
    let val = `Three's a winner! ${userInput}`;
    dvStoryResult.innerHTML = val;
    txtName.value = "";
}

document.body.appendChild(dvStoryResult);