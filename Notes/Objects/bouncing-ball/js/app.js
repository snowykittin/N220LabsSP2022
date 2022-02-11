/*Summer Sexton 

NEWM-N 220 

February 10, 2022 */

function setup(){
    createCanvas(800, 600);
}

let objBall = {
    color: "#ccccff",
    x: 10,
    y: 10,
    diameter: 30,
    speedX: 5,
    speedY: 5,
    boundOne: 0,
    boundTwo: 800,
    boundThree: 600
}


function update(){

    if(objBall.x == objBall.boundOne || objBall.x == objBall.boundTwo){
        objBall.speedX *= -1;
    }
    if(objBall.y == objBall.boundOne || objBall.y == objBall.boundThree){
        objBall.speedY *= -1;
    }

    objBall.x += objBall.speedX;
    objBall.y += objBall.speedY;
    
    fill(objBall.color);
    circle(objBall.x, objBall.y, objBall.diameter);
}

function draw(){
    background("#fff");
    
    update();
}