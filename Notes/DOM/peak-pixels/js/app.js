/*Summer Sexton 

NEWM-N 220 

February 10, 2022 */

let num = 100;
let divGrow = document.createElement("div");
    divGrow.style.backgroundColor = "#3d634f";
    divGrow.style.width = num + "px";
    divGrow.style.height = num + "px";
    document.body.appendChild(divGrow);

    divGrow.onclick = function () {
    var newWidth = divGrow.offsetWidth *1.1;
    var newHeight = divGrow.offsetHeight *1.1;
    divGrow.style.width = (newWidth) + "px";
    divGrow.style.height = (newHeight) + "px";
}


