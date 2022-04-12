let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");
let dvResult = document.getElementById("result");


function checkCredentials(){
    let checkUsername = userName.value;
    let checkPassword = passWord.value;

    if((checkUsername == "Username") && (checkPassword == "Password")){
        dvResult.innerHTML = "Success!"
    }else{
        dvResult.innerHTML = "Wrong information."
    }
}

document.body.appendChild(dvResult);