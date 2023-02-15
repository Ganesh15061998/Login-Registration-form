let demoemail = document.getElementById('emaildemo')
let demopass = document.getElementById('passdemo')
let aemail = localStorage.getItem("email")
let bpass = localStorage.getItem("password")
let cuser = localStorage.getItem('user Name')
let demo = 1;

// if (demo) {
//     location.href = 'home.html'
//     return true;

// } else {
//     return false
// }




function submitform() {

    console.log(demoemail.value)
    console.log(demoemail.value)
    console.log(aemail)
    console.log(bpass)
        // console.log(userName)
    if (demoemail.value == aemail && demopass.value == bpass) {
        location.href = 'home.html'
        alert('data save')

    } else {
        document.getElementById("demoerror1").innerHTML = "Email not Match"
        document.getElementById("demoerror2").innerHTML = "Password not Match"
            // alert("data not save Please re-Enter")
    }

    return false

}