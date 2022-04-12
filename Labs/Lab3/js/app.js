/*Summer Sexton
N220
January 27, 2022*/


/* Exercise 1 + 2
var x = 50;
var y = 50;
var textContent = "Hello world";

function setup(){
    createCanvas(400, 800);
}

function draw(){
    x = x+x;
    y = y*3
    text(textContent, x,y);
    textContent+="d";
} */

function setup(){
    createCanvas(400, 400);
}

let diameter = 50;
function draw(){
    background("white");
   /* var newMouseX = mouseX;
    var newMouseY = mouseY;

    //If the mouse is on the left, I want to draw my circle on the right. To reflect across the X axis, I do y=-f(x)

    newMouseX = (-1 * mouseX) + 400;
    //If my mouse is on the top, I want my circle to be on the bottom. To reflect across the Y axis, I do x=-f(y)
    newMouseY = (-1 * mouseY) + 400; */


    fill("orange");
    circle(400-mouseX, 400-mouseY, diameter);
}