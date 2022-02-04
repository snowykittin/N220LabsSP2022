/*Summer Sexton
February 3, 2022
N220 Functions Exercise*/

function setup(){
    createCanvas(1400, 800);
}


function drawBear(x, y){
    //why repeat these variables? DRY!
    var earDiam = 90;
    var limbDiam = 120;

    //from original values, calculate X and Y's offset from the middle of the body.
    circle(x-100, y-300, earDiam);
    circle(x+100, y-300, earDiam);
    circle(x, y-230, 200);
    circle(x, y, 330); //mouseX, mouseY focus
    circle(x-150, y-70, limbDiam);
    circle(x+150, y-70, limbDiam);
    circle(x-130, y+130, limbDiam);
    circle(x+130, y+130, limbDiam);



}


function draw(){
    background("#fff");


    //Brown teddy bear!
    fill("#6b4015");
    noStroke();
    drawBear(mouseX, mouseY);
}