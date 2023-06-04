
function authTwiter() {
const auth = firebase.auth();
  const TwitterProvider = new firebase.auth.TwitterAuthProvider();

  auth.signInWithPopup(TwitterProvider)
  .then(() => {
    window.location.assign('home.html');
  })
  .catch(error => {
    console.error(error);
  })
}


function authGoogle() 
{
  console.log("ta funcionando");
  const auth = firebase.auth()
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider)
    .then(() => {
      window.location.assign('home.html');
    })
    .catch(error => {
      console.error(error);
    })
  }






firebase.auth().onAuthStateChanged(function(user)
{
  if (user){
    window.location.href = "home.html";
  }
})


function register() {
  showLoading();
  
  const usuarioCad = form2.usuarioCad().value;
  const email3 = form2.email2().value;
  const password3 = form2.password2().value;
  const bd = firebase.firestore();

  bd.collection("users").add({
    Usuário: usuarioCad,
    email:email3
  
  })

  firebase.auth().createUserWithEmailAndPassword(
    email3, password3).then(data => {
      const uid = data.user.uid;
      console.log(uid)
      alert("Cadastro foi feito")
      hideLoading();
      window.location.href = "home.html";
  
      })
    
  .catch(error2 => {
    hideLoading();
    alert(getErrorMessage2(error2));
  })
}

function getErrorMessage2(error2) {
  if (error2.code == "auth/email-already-in-use") {
    return "Email já esta em uso";
  }
  return error2.message;
}



function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function login() {
  showLoading();
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
  ).then(() => {
    hideLoading();
    window.location.href = "home.html";
  }).catch(error => {
    hideLoading();
    alert(getErrorMessage(error));
  });
}

function showAlert(text){
  const popup = document.querySelector("#senha_invalida")
  popup.classList.toggle("active")
}

function fecharAlerta(){
  const popup = document.querySelector("#senha_invalida")
  popup.classList.remove("active")
}

function showEmail(text){
  const popup2 = document.querySelector("#email_enviado")
  popup2.classList.toggle("active")
}

function fecharEmail(){
  const popup2 = document.querySelector("#email_enviado")
  popup2.classList.remove("active")
}

function recoverPassword() {
  showLoading();
  firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
    hideLoading();
    showEmail();

  }).catch(error => {
    hideLoading();
    showEmail();
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário não encontrado";
  }
  if (error.code == "auth/wrong-password") {
    return "Senha inválida";
  }
  return error.message;
}



function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";

  form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
  const password = form.password().value;
  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPasswordButton().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  return form.password().value ? true : false;
}

const form = {
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () => document.getElementById("password-required-error"),
  recoverPasswordButton: () => document.getElementById("recover-password-button"),
}


//area do cadastro

function onChangeEmail2() {
  const email2 = form2.email2().value;
  form2.emailObg().style.display = email2 ? "none" : "block";

  form2.emailInvalid().style.display = validateEmail(email2) ? "none" : "block";

  toggleRegisterButtonDisable();
}

function onChangePassword2() {
  const password2 = form2.password2().value;
  form2.passwordRequiredError2().style.display = password2 ? "none" : "block";

  form2.passwordMinError().style.display = password2.length >= 6 ? "none" : "block";

  validatePasswordsMatch();
  toggleRegisterButtonDisable();

}

function onChangeConfirmPassword() {
  validatePasswordsMatch();
  toggleRegisterButtonDisable();

}

function validatePasswordsMatch() {
  const password2 = form2.password2().value;
  const confirmPassword = form2.confirmPassword().value;

  form2.passwordDiferentes().style.display =
    password2 == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisable() {
  form2.registerButton().disabled = !isFormValid();
}

function isFormValid() {
  const email = form2.email2().value;
  if (!email || !validateEmail(email)) {
    return false;
  }

  const password = form2.password2().value;
  if (!password || password.length < 6) {
    return false;
  }

  const confirmPassword = form2.confirmPassword().value;
  if (password != confirmPassword) {
    return false;
  }

  return true;
}


const form2 = {
  email2: () => document.getElementById('email2'),
  confirmPassword: () => document.getElementById('confirmPassword'),
  emailInvalid: () => document.getElementById('email-invalid'),
  emailObg: () => document.getElementById('email-obg'),
  password2: () => document.getElementById('password2'),
  passwordMinError: () => document.getElementById('password-min-error'),
  passwordRequiredError2: () => document.getElementById('password-required-error2'),
  passwordDiferentes: () => document.getElementById('password-diferentes'),
  registerButton: () => document.getElementById('register-button'),
  usuarioCad:() => document.getElementById('usuarioCad')

}

//animação do cadastro
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

