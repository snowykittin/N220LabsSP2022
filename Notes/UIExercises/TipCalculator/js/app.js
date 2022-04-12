let txtInput = document.getElementById("txtInput");
let dvResult = document.getElementById("result");

function generateContent(){
    //converts the value to an integer to allow for math
    let userBill = parseInt(txtInput.value);
    let userTip = userBill * .2;
    //rounds two decimal places
    userTip = Math.round(userTip * 100) / 100;

    let userTotal = userBill + userTip;
    //rounds two decimal places
    userTotal = Math.round(userTotal * 100)/100;
     //sets two digits after the decimal point
     userTip = userTip.toFixed(2);
    userTotal = userTotal.toFixed(2);
    let val = `Tip: $${userTip}. Total: $${userTotal}.`;
    dvResult.innerHTML = val;
    console.log(val);
    txtInput.value = "";
}

document.body.appendChild(dvResult);