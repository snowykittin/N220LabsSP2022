/*Summer Sexton
NEWMN-220
February 26, 2022*/

//set global variables for score
let userScore = 0;
//grabbing elements of scorebaord and the output
let scoreBoard = document.getElementById("score");
let outputMove = document.getElementById("output");

//set up function for computer to choose their move. 0 = rock, 1 = paper, 2 = scissors - compMoves will ALWAYS be 3.
function compMove(compMoves){
    return  Math.floor(Math.random() * compMoves);
}

//Run guard. No logic needed - just update and output the score.
function guard(){
    userScore -= 0.5;
    outputMove.innerHTML = "You chose to guard!";
    scoreBoard.innerHTML = "Score: " + userScore;
}

//Runs rock. Checks if same, then loss, then win.
function rock(){
    if(compMove(3) == 0){
        outputMove.innerHTML = "The computer chose rock! You chose rock! Rock is the same as rock.";
    }else if(compMove(3) == 1){
        outputMove.innerHTML  = "The computer chose paper! You chose rock! Paper beats rock.";
        userScore--;
    }else if(compMove(3) == 2){
        outputMove.innerHTML = "The computer chose scissors! You chose rock! Scissors does not beat rock.";
        userScore++;
    }
    scoreBoard.innerHTML = "Score: " + userScore;
}

//Runs paper. Checks if same, then loss, then win.
function paper(){
    if(compMove(3) == 1){
        outputMove.innerHTML = "The computer chose paper! You chose paper! Paper is the same as paper.";
    }else if(compMove(3) == 2){
        outputMove.innerHTML  = "The computer chose scissors! You chose paper! Scissors beats paper.";
        userScore--;
    }else if(compMove(3) == 0){
        outputMove.innerHTML = "The computer chose rock! You chose paper! Rock does not beat paper.";
        userScore++;
    }
    scoreBoard.innerHTML = "Score: " + userScore;
}

//Runs scissors. Checks if same, then loss, then win.
function scissors(){
    if(compMove(3) == 2){
        outputMove.innerHTML = "The computer chose scissors! You chose scissors! Scissors is the same as scissors.";
    }else if(compMove(3) == 0){
        outputMove.innerHTML  = "The computer chose rock! You chose scissors! Rock beats scissors."
        userScore--;
    }else if(compMove(3) == 1){
        outputMove.innerHTML = "The computer chose paper! You chose scissors! Paper does not beat scissors."
        userScore++;
    }
    scoreBoard.innerHTML = "Score: " + userScore;
}

document.body.appendChild(outputMove);
document.body.appendChild(scoreBoard);