/*Summer Sexton
February 3, 2022
N220 Functions Exercise*/

function setup(){
    createCanvas(800, 800);
}

function removeRed(r, g, b){
    // allows arguments of the color to be passed in for the function
    let colourSet = color(r, g, b);
    // sets the red value to 0... removing it
    colourSet.setRed(0);

    //returns the new values of the rgb so that it may be used
    return colourSet;
}

function draw(){
    let noRed = removeRed(170, 200, 150);
    fill(noRed);
    circle(mouseX, mouseY, 40);
}