//Draw function is used for animation and time-based coding.
function setup() {
    createCanvas(400, 300);
}

let xPos = 0;
let yPos = 40;
let xSpeed = 1;
let ySpeed = 1;

/*let spices = 0;
function draw() {
    spices = spices + 1;
    console.log(spices);
}
How to make it go backwards? Change it to -1. 
How to make it go slower? Make the number less than 1.
How to make it go faster? Make the number greater than 1.*/


/*The animation/movement is caused by adding a number to the coordinate variable.
Clearing the Screen is done by redrawing the background.
Also, set a variable for speed - it allows for a much easier, fun time*/

function draw(){
    background("#ccccff");
    xPos += xSpeed;
    yPos += ySpeed;

    /* Adding gravity to a ball
    ySpeed = ySpeed + .1;*/

    
    /*Changes color once xPos is greater than each set of 100.
    if(xPos > 100) {
        fill(255, 20, 20);
    }
    else{
        fill(19, 71, 26);
    }*/

    //Uses inputs to operate the boolean. Get keycodes from https://keycode.info/
    if(keyIsDown(LEFT_ARROW)) {
        xSpeed = -1;
    }
    if(keyIsDown(RIGHT_ARROW)){
        xSpeed = 1;
    }
    if(keyIsDown(UP_ARROW)) {
        ySpeed = -1;
    }
    if(keyIsDown(DOWN_ARROW)){
        ySpeed = 1;
    }

    circle(xPos, yPos, 30);
}

//Logic is the building blocks of interactivity. Computers can do basic logical checks. All turn out true or false.
