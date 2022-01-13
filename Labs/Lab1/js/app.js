function setup() {
    createCanvas(800, 600);
    background(40);
}

function draw() {
    circle(mouseX, mouseY, frameCount/10);
}