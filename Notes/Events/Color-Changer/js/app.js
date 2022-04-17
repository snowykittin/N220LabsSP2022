/*Summer Sexton
NEWM-N 220
April 14, 2022*/

//Grabs all of the squares as they all have the class 'listener' and creates an arraay named dvSquares
var dvSquares = document.getElementsByClassName('listener');

//sets up a for-loop to run through the array dvSquares
for (let i = 0; i < dvSquares.length; ++i) {
    //sets up an event listener for on click to run the function changeColor() for each instance at i
 dvSquares[i].addEventListener('click', changeColor)  
}

function changeColor() {
    //"this" is used to pair with the event listener - it grabs dvSquares[i] for whatever it is at. it then grabs the data attribute on the div to set the color.
    this.style.backgroundColor = this.getAttribute('data-color');
}