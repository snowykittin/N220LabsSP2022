/*Summer Sexton 

NEWM-N 220 

February 10, 2022 */

let chameleon = document.createElement("div");
chameleon.style.backgroundColor = "#00ffff";
chameleon.style.width = "100px";
chameleon.style.height = "100px";


chameleon.onmouseout = function(){
    chameleon.style.backgroundColor = "#00ffff";
}
chameleon.onmouseover = function(){
    chameleon.style.backgroundColor = "#000000";
}

document.body.appendChild(chameleon);