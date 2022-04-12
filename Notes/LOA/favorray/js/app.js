/*Summer Sexton 
NEWM-N 220 
February 17, 2022 */

let favStuff = ["Cats", "Sushi", "Programming", "Coffee", "Red Pandas"];

let divFav = document.createElement("div");
document.body.appendChild(divFav);

let i = 0;
while(i < 5){
    divFav.innerHTML += (favStuff[i]) + ", is one of my favorite things." + "<br>";
    i++;
}