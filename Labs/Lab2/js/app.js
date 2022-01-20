/*Summer Sexton
N220
January 20, 2022*/

//sets the diameter variable
let diameter = 1;

function setup(){
    //creates canvas
    createCanvas(800,600);

    //checks the state of the diameter upon setup
    console.log(diameter);
}

function draw(){
    //Sets a black background to refresh
    background(1);

    //action will occur when the mouse is pressed
    if(mouseIsPressed){
        
        //first if statement checks to see if the diameter is 50px. if it is, reset the circle. if not, then allow it to grow
        if(diameter == 50){
            diameter = 1;
        }else{
            diameter++;
        }

    }

    //logs the new state of the diameter as the draw function is executed
    console.log(diameter);

    //fills the circle light purple, and draws the circle to where the mouse is located
    fill("#ccccff");
    circle(mouseX, mouseY, diameter);

}