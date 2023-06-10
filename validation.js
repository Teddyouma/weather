var mail = document.getElementById("email"),
cs = document.getElementById("cs"),
us = document.getElementById("us"),
user = document.getElementById("user"),
cpass = document.getElementById("cpass"),
ms = document.getElementById("ms"),
ps = document.getElementById("ps"),
sub = document.getElementById("sub"),
pass = document.getElementById("pass");

window.addEventListener('load', () => {
    //Email Validation
    mail.addEventListener('keyup', () => {
        if(!mail.value){
            ms.style.color = 'red'
            ms.innerHTML = 'Email cannot be empty!!'
        } else if(!mail.value.includes("@")){
            ms.style.color = 'red'
            ms.innerHTML = 'Email is missing "@"!!'   
        } else {
            ms.style.color = 'green'
            ms.innerHTML = 'Valid.'
        }
    })

    //Username Validation
    user.addEventListener('keyup', () => {
        if(!user.value){
            us.style.color = 'red'
            us.innerHTML = 'Username cannot be empty!!'
        } else if(user.value.includes(".")){
            us.style.color = 'red'
            us.innerHTML = 'Username cannot have "."!!'   
        } else {
            us.style.color = 'green'
            us.innerHTML = 'Valid.'
        }
    });

    //Password Validation
    pass.addEventListener('keyup', () => {
        if(!pass.value){
            ps.style.color = 'red'
            ps.innerHTML = 'Password cannot be empty!!'
        } else {
            ps.style.color = 'green'
            ps.innerHTML = 'Valid.'
        }
    });

    //Password Confirmation Validation
    cpass.addEventListener('keyup', () => {
        if(!cpass.value){
            cs.style.color = 'red'
            cs.innerHTML = 'Field cannot be empty!!'
        } else if(cpass.value !== pass.value){
            cs.style.color = 'red'
            cs.innerHTML = 'Passwords do not match!!'   
        } else {
            cs.style.color = 'green'
            cs.innerHTML = 'Valid.'
        }
    });

});

//Stopping form submission
sub.addEventListener('click', (e) => {
    //Email Validation
        if(!mail.value){
            e.preventDefault()
        } else if(!mail.value.includes("@")){
            e.preventDefault()   
        }

    //Username Validation
        if(!user.value){
            e.preventDefault()
        } else if(user.value.includes(".")){
            e.preventDefault() 
        }

    //Password Validation
        if(!pass.value){
            e.preventDefault()
        }

    //Password Confirmation Validation
        if(!cpass.value){
            e.preventDefault()
        } else if(cpass.value !== pass.value){
            e.preventDefault()   
        }
})
