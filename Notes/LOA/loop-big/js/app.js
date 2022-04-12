/*Summer Sexton 
NEWM-N 220 
February 17, 2022 */

let divSize = document.createElement("div");
document.body.appendChild(divSize);

for(let i = 1; i<6; i++){
    //multiplying i by 1000 allows for easier processing
    divSize.innerHTML += (i * 1000) + " ";
}