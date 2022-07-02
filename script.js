// object to store user details
let userDetailsDatabase = {}

function getUserDetails (){
    // prompt username
    let username = prompt("Enter your username")
    // takes care of the cancel on the prompt
    if (username == null){
        return
    }

    // validating the username
    function validateUsername(username) {
        if(username.length < 10 && username.length > 0){
        return true
        }
        else {return false}
    }

    // constraint of must enter username to proceed

    while (validateUsername(username) == false) {
        username = prompt("Username must be less than 10 and greater than 0")      
    }
    userDetailsDatabase["username"] = username


    // email address
    let email = prompt("Enter your email address")

    // validate email
    function validateEmail(email) {
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

        // checks if its an email
        emailCheckResult = emailCheck.test(email);

        if (emailCheckResult == true ){
            return true
        }
        else{
            return false
            }
        }

        if (email == null){
            return
        }

         // constraint of must enter email to proceed
        
        while (validateEmail(email) == false){
            email = prompt("Enter a valid email address")
        }

        userDetailsDatabase["email"] = email

        // phone number input
    let phoneNumber = prompt("Enter your phone number")
    function validatephoneNumber(phoneNumber) {
        if(phoneNumber.length == 10 ){
            return true
        }
        else{
            return false
        }
        }
        if ((phoneNumber) == null){
            return
        }

        // validate phone number
        while (validatephoneNumber(phoneNumber) == false){
            phoneNumber = prompt("Enter a valid phone number 0f 10 digits")
        }
        userDetailsDatabase["phoneNumber"] = phoneNumber

        // password
        let password = prompt("Enter password")

        // validate pass
        function validatePass(password) {
        if (password.length < 8){
            return false
        }
        else{
            return true
        }
    }
    if (password == null){
        return
    }

    //  // constraint of must enter correct pass to proceed
    while (validatePass(password) == false) {
        password = prompt("The password should not be less then 8 characters")
        
    }

    // confirm passowrd
    let confirmPass = prompt("Confirm your password")

    // validate confirm pass
    function validateConfirmPass(confirmPass) {
        if (confirmPass != password){
            return false

        }
        else{
            return true
        }
        
    }
    if (confirmPass == null){
        return
    }

    while (validateConfirmPass(confirmPass) == false){
        confirmPass = prompt("Confirm password does not match, try again")
    }

    console.log(userDetailsDatabase);
}

function displayUserDetails() {
    alert(`YOUR DETAILS\n\nusername: ${userDetailsDatabase.username}\nPhone Number: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.email}`)
}
