
function validateForm() {
    let X = document.forms["myForm"]["number"].value;
    if (X == "") {
        alert("You cannot leave a field empty");
        return false;
    }
}

