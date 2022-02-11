let objTV = {
    x:150,
    y:200,
    h:300,
    w:250,
    adj:50,
    half:100,
    x1:450,
    y1:200,
    x2:100,
    y2:50,
 };
  
  
 function drawTV(){
    fill('#964B00');
    noStroke();
    rect(objTV.x,objTV.y,objTV.h,objTV.w);
    fill(0,0,200);
    rect(objTV.x + objTV.adj,objTV.y + objTV.adj,objTV.h - objTV.half,objTV.w - objTV.half);
    fill(0);
    line(objTV.x1,objTV.y1,objTV.x2,objTV.y2)
   
 }
  
  
  
 function setup(){
    createCanvas(600,800);
 }
  
 function draw(){ drawTV();   
 }
  