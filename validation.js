console.log("Script Working..");
let email;

document.getElementById('check').onclick = function(){
    email = document.getElementById('email').value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(email)) {
        document.getElementById('result').innerHTML = "Email Approved!";
    } else {
        document.getElementById('result').innerHTML = "Invalid Email Address!";
    }
}