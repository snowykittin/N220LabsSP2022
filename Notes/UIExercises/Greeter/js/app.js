let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("result");

function generateContent(){
    let userName = txtName.value;
    let val = `Hello there, ${userName}.`;
    dvResult.innerHTML = val;
    console.log(val);
    txtName.value = "";
}

document.body.appendChild(dvResult);