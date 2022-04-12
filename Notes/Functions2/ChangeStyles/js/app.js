/*Summer Sexton
N220 Spring 2022
April 8, 2022*/

//sets divs inside of js
let dvFirst = document.getElementById("div1");
let dvSecond = document.getElementById("div2");
let dvThird = document.getElementById("div3");

//Sets buttons inside of js
let btnFirst = document.getElementById("btn1");
let btnSecond = document.getElementById("btn2");
let btnThird = document.getElementById("btn3");

//declares width and height variables, as well as a selected div variable
var width = 500;
var height = 500;
var dvSelected = dvFirst;

//sets default styles for divs
dvFirst.style.backgroundColor = "#990000";
dvFirst.style.width = width + "px";
dvFirst.style.height = height + "px";
dvSecond.style.backgroundColor = "#990000";
dvSecond.style.width = width + "px";
dvSecond.style.height = height + "px";
dvThird.style.backgroundColor = "#990000";
dvThird.style.width = width + "px";
dvThird.style.height = height + "px";

function changeStyle(){
    //sets background to blue
    dvSelected.style.backgroundColor = "#000099";
    //maintainds width be smaller than height
    width -= 10;
    height -= 5;
    dvSelected.style.width = width + "px";
    dvSelected.style.height = height + "px";
}

btnFirst.onclick = function(){
    dvSelected = dvFirst;
    changeStyle();
}

btnSecond.onclick = function(){
    dvSelected = dvSecond;
    changeStyle();
}

btnThird.onclick = function(){
    dvSelected = dvThird;
    changeStyle();
}


document.body.appendChild(dvFirst);
document.body.appendChild(dvSecond);
document.body.appendChild(dvThird);