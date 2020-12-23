
function signup() {

    var username = document.getElementById("username`").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var password = document.getElementById("password").value

    user = {
        userName: username,
        email: email,
        phone: phone,
        password: password
    }

    console.log(user)

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000';
    Http.open("POST", url);
    Http.setRequestHeader("content-type", "application/json")
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        alert(Http.responseText)
    }

    return false;

}