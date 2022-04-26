let dvCard = document.getElementsByClassName("card");
let dvPairResult = document.getElementById("pairInfo");
let pairFound = 0;
let clickCount = 0;
let tagOne = "";
let tagTwo = "";
let firstCardElement = null;
let secondCardElement = null;


for(let i = 0; i < dvCard.length; i++){
    dvCard[i].addEventListener("click", flipCard);
}

function flipCard(event){
    //First checks for win condition.
    if(pairFound == 8){
        dvPairResult.innerHTML = "You've Won!";
        //Resets pairFound
        pairFound = 0;
    }else{
        //sets first click
        if(clickCount == 0){
            firstCardElement = event.target;
            tagOne = event.target.getAttribute("data-tag");
            event.target.innerHTML = event.target.getAttribute("data-tag");
            event.target.classList.toggle("hidden");
            clickCount++;
        }else{
            //sets second click
            secondCardElement = event.target;
            tagTwo = event.target.getAttribute("data-tag");
            event.target.innerHTML = event.target.getAttribute("data-tag");
            event.target.classList.toggle("hidden");
    
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
        firstCardElement.classList.toggle("removed");
        secondCardElement.classList.toggle("removed");
    }else{
        //resets cards back to hidden after two seconds
        setTimeout(function (){
            console.log("Try again.");
        firstCardElement.classList.toggle("hidden");
        secondCardElement.classList.toggle("hidden");
        },2000);
    }

    //updates Pairs Found.
    dvPairResult.innerHTML = "Pairs Found: " + pairFound;
}