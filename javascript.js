function checkValidatiions(){
    var targetField = document.getElementById("fname");
    var emailfield = document.getElementById("email");
    var zipcodefield = document.getElementById("zipcode");
    var pass = document.getElementById("password");
    var vpass = document.getElementById("vpass");
   
    if(targetField.value.length === 0){
        targetField.focus();
        targetField.style.background="#ff29292e";
        return false;
    }
    if(emailfield.value.length === 0){
            emailfield.style.background="#ff29292e";
            emailfield.focus();
            return false;
        }
    if(zipcodefield.value.length < 5)
    {
        zipcodefield.focus();
        zipcodefield.style.background="#ff29292e";
        return false;
    }

    for(var i=0 ; i<= 4 ; i++)
    {
        var zipchar = parseInt(zipcodefield.value[i]);
        if(isNaN(zipchar))
        {
            zipcodefield.focus();
            zipcodefield.style.background="#ff29292e";
            return false;
        }
    }

    if(pass.value !== vpass.value)
    {
        pass.focus();
        pass.style.background="#ff29292e";
        return false;
    }
    targetField.style.background = "white";
}

function viewPassword(){
    var passwordInput = document.getElementById("password");
    var passStatus = document.getElementById("pass-status");
    if (passwordInput.type == 'password'){
        passwordInput.type='text';
        passStatus.className='fa fa-eye-slash';
        
      }
      else{
        passwordInput.type='password';
        passStatus.className='fa fa-eye';
      }
}
