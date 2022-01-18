function setup(){
    createCanvas(400, 300);
}

//Will allow for a number to output to the console
let count = 0;
let diameter = 1;

function draw(){
    //outputs each frame drawm to the console
    console.log(count);
    count = count + 1;

    //sets background color to avoid screensaver effect
    background(1);

    //if-statements used to determine if the mouse is in the left or right half of the canvas, and change color accordingly
    if(mouseX < 200){
        fill(50, 90, 168);
    }
    if(mouseX > 200){
        fill(181, 38, 31);
    }

    //if statement checks if the diameter has reached 200. if it has, reset it back to 1. if not, keep adding 1 to the diameter.
    if(diameter == 200){
        diameter = 1;
    }else{
        diameter++;
    }
    circle(mouseX, mouseY, diameter);
}