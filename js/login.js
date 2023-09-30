document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit btn click ');
    const emailField = document.getElementById('user_email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user_password');
    const password = passwordField.value;

    if (email === 'user@gmail.com' && password === 'password') {
        console.log('valid user');
    }else{
        alert('invalid user')
    }
});
