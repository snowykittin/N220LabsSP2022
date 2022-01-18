function setup(){
    createCanvas(400, 300);
}

let count = 0;
let diameter = 1;

function draw(){
    console.log(count);
    count = count + 1;
    background(1);

    if(mouseX < 200){
        fill(50, 90, 168);
    }
    if(mouseX > 200){
        fill(181, 38, 31);
    }
    if(diameter == 200){
        diameter = 1;
    }else{
        diameter++;
    }
    circle(mouseX, mouseY, diameter);
}