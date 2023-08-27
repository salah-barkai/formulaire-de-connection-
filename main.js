var password = document.getElementById("pass");
var message_error = document.getElementById("error");
var submit = document.getElementById("btn");
var passform = document.getElementById("card");
var username = document.getElementById("username");

passform.addEventListener('submit', (event) => {
    event.preventDefault();
    var enterpasword = password.value;
    var entername = username.value;

    console.log(enterpassword);
    console.log(entername);

    if (enterpassword === "12345" && entername === 'sbk') {
        message_error.classList.remove('show-error');
        // Effectuer d'autres actions si le mot de passe est correct
    } else {
        message_error.classList.add('show-error');
        password.classList.add('shake');
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
        // Effectuer d'autres actions si le mot de passe est incorrect
    }
});