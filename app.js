

function signup() {

    var username = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var password = document.getElementById("password").value

    user = ({ userName: username, email: email, phone: phone, password: password })
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("password").value = ""
    // console.log(user)

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/signUp';
    Http.open("POST", url);
    Http.setRequestHeader("content-type", "application/json")
    Http.send(JSON.stringify(user));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        alert(Http.responseText)
        // Document.getElementById("result").innerHTML = Http.responseText
    }

    return false;

}



function login() {

    var loginUserEmail = document.getElementById("loginEmail").value
    var loginUserPassword = document.getElementById("loginPassword").value

    loginData = (
        {
            email:loginUserEmail,
            password:loginUserPassword

        }
    )

    document.getElementById("loginEmail"). value = ""
    document.getElementById("loginPassword"). value = ""

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("content-type", "application/json")
    Http.send(JSON.stringify(loginData));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        alert(Http.responseText)
        // Document.getElementById("result").innerHTML = Http.responseText
    }

    // console.log(loginData)

    return false;
}