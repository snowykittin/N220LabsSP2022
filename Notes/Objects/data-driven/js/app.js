function setup(){
    createCanvas(250, 300);
}
function draw(){
    background("#4a88cc");

    buildSnowman(objSnowman.color);  
    
    fill("#fff");
    rect(0, 200, 250, 100);
    
}

let objSnowman = {
    color: "#ccffff",
    x: 100,
    firstY: 50,
    secondY: 100,
    thirdY: 165,
    firstDiam: 50,
    secondDiam: 70,
    thirdDiam: 90

};

function buildSnowman(color){
    fill(color);
    circle(objSnowman.x, objSnowman.firstY, objSnowman.firstDiam);
    circle(objSnowman.x, objSnowman.secondY, objSnowman.secondDiam);
    circle(objSnowman.x, objSnowman.thirdY, objSnowman.thirdDiam);
};



/* Logging values for debugging sake
console.log(objDetails.color);
console.log(objDetails.x);
console.log(objDetails.y);
console.log(objDetails.width);
console.log(objDetails.height);*/