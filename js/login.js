// login button 
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

let userSmart = localStorage.getItem('sessionUserName');


  function login(){

    for (let i = 0; i < userArray.length; i++) {
      
      if (userArray[i].email == emailInp.value && userArray[i].password == passwordInp.value) {
        location.href = 'smart-login.html';
        localStorage.setItem('sessionUserName',userArray[i].Name)
        

        }else{
          
          loginError.classList.add('d-block');
          loginError.classList.remove('d-none')
          
        }
        
      }

}

function displayWelcome(){
  smartLogin.innerHTML = `<h2>Welcome ${userSmart}</h2>`
}

// for logout 

function logout(){
  localStorage.removeItem('sessionUserName');
  location.href = 'index.html'
}