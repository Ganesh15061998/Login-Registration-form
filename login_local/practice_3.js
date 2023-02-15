console.log('Hello')
    // user Name
let email = document.getElementById('email')
let pass = document.getElementById('pass')
let user = document.getElementById("username")
let savedata = 1;


function submitform() {
    console.log(email.value)
    console.log(pass.value)


    if (email.value == '') {
        document.getElementById('emailError').innerHTML = "Plaese Enter Email"
        savedata = 0;
    } else {
        document.getElementById('emailError').innerHTML = ''
        savedata = 1;
        localStorage.setItem("email", email.value)
    }


    if (pass.value == '') {
        document.getElementById('passError').innerHTML = "Plaese Enter Password"
        savedata = 0;
    } else if (pass.value <= 5) {
        document.getElementById('passError').innerHTML = "Enter more than 4 char"
        savedata = 0;
    } else {
        document.getElementById('passError').innerHTML = ""
        savedata = 1;
        localStorage.setItem("password", pass.value)
    }


    if (user.value == '') {
        document.getElementById('userError').innerHTML = "Please Enter User Name"
        savedata = 0;
    } else {
        document.getElementById('userError').innerHTML = ""
        savedata = 1;
        localStorage.setItem("user Name", user.value)
    }

    if (savedata) {
        return true;

    } else {
        // location.href = 'home.html'
        return false
    }
}


function data() {
    if (email.value == '' && pass.value == '' && user.value == '') {
        console.log("error")
    } else {

        location.href = "https://getbootstrap.com/docs/4.0/utilities/sizing/"
    }

}


// let demoemail = document.getElementById('emaildemo')
// let demopass = document.getElementById('passdemo')
// let aemail = localStorage.getItem("email")
// let bpass = localStorage.getItem("password")


// function submitform() {

//     console.log(demoemail.value)
//     console.log(demoemail.value)
//     console.log(aemail)
//     console.log(bpass)
//     if (demoemail.value == aemail && demopass.value == bpass) {
//         alert('data match')
//     }

//     return false

// }