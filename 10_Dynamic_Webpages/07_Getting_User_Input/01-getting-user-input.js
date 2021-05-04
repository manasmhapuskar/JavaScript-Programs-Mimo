function signUp() {
    var username = document.getElementById("usernameInput").value;
    var email = document.getElementById("emailInput").value;
    document.getElementById("message").innerHTML = username + " " + email;
}

signUp();