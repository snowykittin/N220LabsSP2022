/*Summer Sexton
NEWMN-220 
February 26, 2022*/

//initialize what is in each div
let words = ["Cat","Dog","Fish","Horse","Snake","Hamster"];
let bodyStyle = document.getElementById("body");

//sets tracking div
let tracker = document.createElement("div");
//set word divs or "nav"
let div1 = document.createElement("div");
div1.innerHTML = words[0];
let div2 = document.createElement("div");
div2.innerHTML = words[2];
let div3 = document.createElement("div");
div3.innerHTML = words[3];
let div4 = document.createElement("div");
div4.innerHTML = words[4];
let div5 = document.createElement("div");
div5.innerHTML = words[5];
let div6 = document.createElement("div");
div6.innerHTML = words[1];

//checks if div has been clicked, "highlights" the div
div1.onclick = function(){
    div1.style.backgroundColor = "aqua";
    div1.style.fontWeight = "bold";

    tracker.innerHTML += words[0] + " ";
}
//sees if mouse has left the div and resets styling
div1.onmouseleave = function(){
    div1.style.backgroundColor = "white";
    div1.style.fontWeight = "normal";
}

//checks if div was clicked, "highlights" the div
div2.onclick = function(){
    div2.style.backgroundColor = "aqua";
    div2.style.fontWeight = "bold";

    tracker.innerHTML += words[2] + " ";
}
//sees if mouse has left the div and resets styling
div2.onmouseleave = function(){
    div2.style.backgroundColor = "white";
    div2.style.fontWeight = "normal";
}

//checks if div was clicked, "highlights" the div
div3.onclick = function(){
    div3.style.backgroundColor = "aqua";
    div3.style.fontWeight = "bold";

    tracker.innerHTML += words[3] + " ";
}
//sees if mouse has left the div and resets styling
div3.onmouseleave = function(){
    div3.style.backgroundColor = "white";
    div3.style.fontWeight = "normal";
}

//checks if div was clicked, "highlights" the div
div4.onclick = function(){
    div4.style.backgroundColor = "aqua";
    div4.style.fontWeight = "bold";

    tracker.innerHTML += words[4] + " ";
}
//sees if mouse has left the div and resets styling
div4.onmouseleave = function(){
    div4.style.backgroundColor = "white";
    div4.style.fontWeight = "normal";
}

//checks if div was clicked, "highlights" the div
div5.onclick = function(){
    div5.style.backgroundColor = "aqua";
    div5.style.fontWeight = "bold";

    tracker.innerHTML += words[5] + " ";
}
//sees if mouse has left the div and resets styling
div5.onmouseleave = function(){
    div5.style.backgroundColor = "white";
    div5.style.fontWeight = "normal";
}

//checks if div was clicked, "highlights" the div
div6.onclick = function(){
    div6.style.backgroundColor = "aqua";
    div6.style.fontWeight = "bold";

    tracker.innerHTML += words[1] + " ";
}
//sees if mouse has left the div and resets styling
div6.onmouseleave = function(){
    div6.style.backgroundColor = "white";
    div6.style.fontWeight = "normal";
}   

document.body.appendChild(tracker);
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(div4);
document.body.appendChild(div5);
document.body.appendChild(div6);