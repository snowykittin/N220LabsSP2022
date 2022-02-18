/*Summer Sexton 
NEWM-N 220 
February 17, 2022 */

let raceTimes = [32.5, 30.9, 27.4];

for(i=0; i < raceTimes.length - 1; i++){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `Time: ${raceTimes[i]} seconds`;
    document.body.appendChild(newDiv);
}