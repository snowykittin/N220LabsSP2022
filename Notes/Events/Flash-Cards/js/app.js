/*Summer Sexton
NEWM-N 220
April 16, 2022*/

//Grabs elements, puts buttons in an array
let qButtons = document.getElementsByClassName("question");
let dvAnswer = document.getElementById("answer");

//For loop to add an event listener to all the buttons
for (let i = 0; i < qButtons.length; i++) {
    qButtons[i].addEventListener("click", showCard);
}

function showCard(event){
    //grabs the answer attribute
    let fact = event.target.getAttribute("data-answer");
    //makes it the answer div's content
    dvAnswer.innerHTML = fact;
}