function setup(){
    createCanvas(1200, 800);
    var body = "#11165c";
    var window = "#cee6ed";
    var ornament = "#7e8c9e";
    var tire = "#141414";
    var road = "#262626";

    background("#bec4bc");
    strokeWeight(0);

    fill(road);
    rect(0, 600, 1200, 500);
    
    fill(body);
    rect(350, 250, 250, 200);
    circle(350, 375, 250);
    
    fill(window);
    circle(360, 385, 250);

    fill(body);
    rect(150, 375, 800, 200);
    rect(420, 250, 100, 200);

    fill(window);
    rect(350, 260, 90, 115);
    rect(475, 260, 125, 115);

    fill(ornament);
    rect(900, 345, 10, 30);
    triangle(905, 335, 895, 355, 925, 355);

    fill(tire);
    strokeWeight(50);
    circle(330, 600, 150);
    circle(770, 600, 150);
}