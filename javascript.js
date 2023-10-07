confirmPassword = () => {
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    const wrongPasswordText = document.getElementById("incorrectPassword")
    console.log(password.value);
    console.log(confirm.value);
    // Checks to see if the value of the password is the same as the confirm input.
    // Enables submit button if the value is true.
    if (password.value === confirm.value) {
        confirm.style.outline = "none";
        wrongPasswordText.innerHTML = "";
        document.getElementById("submit").disabled = false;
    }
    // if it is not the same password, we will outline it in red and ask for a reinput of the password until correct.
    // disables submit button if incorrect.
    else {
        confirm.style.outline = "1px solid red";
        wrongPasswordText.innerHTML = "Incorrect, please try again!";
        document.getElementById("submit").disabled = true;
    }
}