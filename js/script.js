let nameInp = document.getElementById('userName'),
    emailInp = document.getElementById('userEmail'),
    passwordInp = document.getElementById('userPassword'),
    signUpBtn = document.getElementById('signUp'),
    nameInvalid = document.getElementById('nameInvalid'),
    emialInvalid = document.getElementById('emailInvalid'),
    passInvalid = document.getElementById('passInvalid'),
    emailExist = document.getElementById('emailExist'),
    nameExist = document.getElementById('nameExist'),
    loginBtn = document.getElementById('loginBtn'),
    smartLogin = document.getElementById('smartLogin'),
    loginError = document.getElementById('loginError')



let userArray = [];

  if (localStorage.getItem('userData') == null) {

    userArray = [];
  }else{
    userArray = JSON.parse(localStorage.getItem('userData'));
  }

  // inputs regular expression 

let regexName = /^[A-Z][a-z]{3,8}$/,
    regexPassword = /^[A-Z].{8,}/,
    regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    // check name input validation

      nameInp.addEventListener('keyup',function(){
        if (regexName.test(nameInp.value) == true) {
          nameInp.classList.add('is-valid');
          nameInp.classList.remove('is-invalid');
          nameInvalid.style.display = 'none';
        }else{
          nameInp.classList.add('is-invalid');
          nameInp.classList.remove('is-valid');
          nameInvalid.style.display = 'block';
        }
      })

    // check email input validation


    
      emailInp.addEventListener('keyup',function(){
        if (regexEmail.test(emailInp.value) == true) {
          emailInp.classList.add('is-valid');
          emailInp.classList.remove('is-invalid');
          emialInvalid.style.display = 'none';
        }else{
          emailInp.classList.add('is-invalid');
          emailInp.classList.remove('is-valid');
          emialInvalid.style.display = 'block';
        }
      })


    // check passwordInp validation

    

      passwordInp.addEventListener('keyup',function(){
        if (regexPassword.test(passwordInp.value) == true) {
          passwordInp.classList.add('is-valid');
          passwordInp.classList.remove('is-invalid');
          passInvalid.style.display = 'none';
        }else{
          passwordInp.classList.add('is-invalid');
          passwordInp.classList.remove('is-valid');
          passInvalid.style.display = 'block';
        }
      })

  // check if user name is exist

  
      nameInp.addEventListener('blur',isNameExist);

      function isNameExist(){
        for (let i = 0; i < userArray.length; i++) {
          
          if (userArray[i].Name == nameInp.value) {
              nameExist.classList.add('d-block');
              nameExist.classList.remove('d-none');
              return false;
            }else{
              nameExist.classList.add('d-none');
              nameExist.classList.remove('d-block');
              
            }
          }
        }


  // check if user emial is exist

  
      emailInp.addEventListener('blur',isEmailExist);

      function isEmailExist(){
        for (let i = 0; i < userArray.length; i++) {
          
          if (userArray[i].email == emailInp.value) {
            emailExist.classList.add('d-block');
            emailExist.classList.remove('d-none');
            return false;
            }else{
              emailExist.classList.add('d-none');
              emailExist.classList.remove('d-block');
              
              
            }
            
          }
          
        }

  // signup button function 

    signUpBtn.addEventListener('click', function(){

      if (regexName.test(nameInp.value) == true && regexEmail.test(emailInp.value) == true && regexPassword.test(passwordInp.value) == true && isNameExist() != false &&isEmailExist() != false ) {

        let userInfo = {
          Name : nameInp.value,
          email : emailInp.value,
          password : passwordInp.value
        }
        userArray.push(userInfo);
  
        localStorage.setItem('userData',JSON.stringify(userArray));

        anotherPage();

      }else{
        signUpBtn.setAttribute('disabled', true)
      }
      
      
    })

    function anotherPage(){
      location.href = 'index.html';
    }













