/*Summer Sexton
February 3, 2022
N220 Functions Exercise*/


function setup(){
    createCanvas(300, 300);
}

function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y =  r * Math.cos(mouseX);
    return createVector(x,y); 
}

function draw(){
    //changing the value of r changes the size of the circle
    var res = polarPoint(60);
    translate(100,100); 

    circle(res.x, res.y, 10);
}