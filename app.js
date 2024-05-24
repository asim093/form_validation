document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cnic = document.getElementById('cnic').value;

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
const cnicRegex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

if(emailRegex.test(email) && passwordRegex.test(password) && usernameRegex.test(name) && cnicRegex.test(cnic)){
    alert('your All Form Values are Good');
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(cnic);

}else{
    alert('invalid values Retry')

}
    
});


