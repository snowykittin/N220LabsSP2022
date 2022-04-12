/*Summer Sexton 

NEWM-N 220 

February 10, 2022 */

var clickCounter = 0;

let clickBtn = document.createElement("div");
clickBtn.style.width = "1000px";
clickBtn.style.height = "500px";
clickBtn.style.backgroundColor = "#582285";
clickBtn.style.color = "#fff";
clickBtn.style.fontSize = "24px";
clickBtn.innerHTML = "Click Me!";

clickBtn.onclick = function(){
    clickCounter++;
    if(clickCounter == 3){
        clickBtn.innerHTML = "You Sure?";
    }
    if(clickCounter == 5){
        clickBtn.innerHTML = "Okay, stop...";
    }
    if(clickCounter == 6){
        clickBtn.innerHTML = "No, seriously...";
    }
    if(clickCounter == 7){
        clickBtn.innerHTML = "Stop clicking me. ";
    }
    if(clickCounter > 7){
        clickBtn.innerHTML += "Dude, stop clicking me. ";
    }
}

document.body.appendChild(clickBtn);