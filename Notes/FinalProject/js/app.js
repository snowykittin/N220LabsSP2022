let dvCard = document.getElementsByClassName("card");
let pairFound = 0;
let clickCount = 0;
let tagOne = "";
let tagTwo = "";

for(let i = 0; i < dvCard.length; i++){
    dvCard[i].addEventListener("click", flipCard);
}

function flipCard(event){
    //First checks for win condition.
    if(pairFound == 8){
        console.log("You've won!");
        //Resets pairFound
        pairFound = 0;
    }else{
        //sets first click
        if(clickCount == 0){
            tagOne = event.target.getAttribute("data-tag");
            event.target.innerHTML = event.target.getAttribute("data-tag");
            clickCount++;
        }else{
            //sets second click
            tagTwo = event.target.getAttribute("data-tag");
            event.target.innerHTML = event.target.getAttribute("data-tag");
    
            clickCount = 0;
            //sends them to be checked
            checkCards(tagOne, tagTwo);
        }
    }
}

function checkCards(cardOne, cardTwo){
    //compares cardOne to cardTwo if they match.
    if(cardOne == cardTwo){
        console.log("Match!");
        //adds one to pairFound for win condition
        pairFound++;
        tagOne = "";
        tagTwo = "";
    }else{
        //resets what tagOne and tagTwo are.
        console.log("Try again.");
        tagOne = "";
        tagTwo = "";
    }
}