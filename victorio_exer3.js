
const pass1 = "Pass1243";
const pass2 = "Pass1243";
const name = "Nikolai";

const validatePassword = (pass1, pass2) => {
    var passwordArray = [];
    var hasBig = false;
    var hasSmall = false;
    var hasNum = false;
    if (pass1 != pass2){
        console.log("Wrong Password!");
        return false;
    }else if (pass1.length < 8) {
        console.log("Too Short!");
        return false;
    }else {
        for (let i = 0; i < pass1.length; i++){
            passwordArray.push(pass1.charCodeAt(i));
        }
        passwordArray.forEach(element => {
            if (element > 64 && element < 91){
                hasBig = true;
            }
        })
        passwordArray.forEach(element => {
            if (element > 96 && element < 123){
                hasSmall = true;
            }
        })
        passwordArray.forEach(element => {
            if (element > 47 && element < 58){
                hasNum = true;
            }
        })
        if(hasBig == true && hasSmall == true && hasNum == true){
            return true;
        } else {
            console.log("Password does not meet the requirements!");
            return false;
        }
     }
}

const reversePassword = (pass) => {
    var reversed = "";
    var passwordLet = [];
    for (let i = 0; i < pass.length; i++){
        passwordLet.push(pass.charAt(i))
    }
    while (passwordLet.length != 0){
        reversed = reversed + passwordLet.pop()
    }
    return reversed;
}
const storePassword = (name, pass2) => {
    const a = {
        name: name,
        newpassword: ""
    }
    var passValid = validatePassword(pass1, pass2);
    if(passValid == true){
        a.newpassword = reversePassword(pass1);
        return a;
    };
}
console.log(storePassword(name, pass2));