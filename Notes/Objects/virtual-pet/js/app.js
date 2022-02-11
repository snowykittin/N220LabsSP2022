let fakePet = {
    x: 150,
    y: 150,
    diameter: 70,
    offsetX: 10
};

function setup(){
    createCanvas(800, 300);
}

function draw(){

    fakePet.x = mouseX;
    fakePet.y = mouseY;
    if(mouseIsPressed && fakePet.offsetX != 0){
        fakePet.offsetX -= 1;
    }
    else{
        fakePet.offsetX += 1;
    }
    
    fill("#999966");
    circle((fakePet.x + fakePet.offsetX), fakePet.y, fakePet.diameter);

}