import { controllerUser } from "../services/request/users";
let errors = {};
export default function validationFormLogin(
  { email, errorEmail, password, errorPassword },
  login,
  setError,
  setUserLogged,
  navigate,
  setErrorToken
) {
  //email
  const validateEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (login.email === "") {
    errors.email = "Debe llenar el campo Email";
  } else if (!validateEmail.exec(email.value)) {
    errors.email = "El email debe ser un email valido";
  } else {
    if (errors.email) {
      delete errors.email;
      email.classList.remove("is-invalid");
      errorEmail.innerText = "";
    }
  }
  //PASSWORD
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  if (login.password === "") {
    errors.password = "Debe llenar el campo contraseña";
  } else if (!login.password.match(lowerCaseLetters)) {
    errors.password = "La contraseña debe tener al menos un minúscula";
  } else if (!login.password.match(upperCaseLetters)) {
    errors.password = "La contraseña debe tener al menos un mayúscula";
  } else if (!login.password.match(numbers)) {
    errors.password = "La contraseña debe tener al menos un numero";
  } else if (login.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  } else {
    if (errors.password) {
      delete errors.password;
      password.classList.remove("is-invalid");
      errorPassword.innerText = "";
    }
  }

  if (Object.keys(errors) == 0) {
    // const formData = new FormData(formLogin);

    controllerUser
      .login(login)
      .then((response) => {
        if (response.data.accessToken) {
          setUserLogged(true);
          localStorage.setItem(
            "accessToken",
            JSON.stringify(response.data.accessToken)
          );
          navigate("/home");
          setErrorToken(null);
        }
      })
      .catch((error) => {
        console.log(error);
        if (!error.ok) {
          setError("Credenciales no validas o no esta autorizado");
        }
      });
  } else {
    if (errors.email) {
      email.classList.add("is-invalid");
      errorEmail.innerText = errors.email;
    }
    if (errors.password) {
      password.classList.add("is-invalid");
      errorPassword.innerText = errors.password;
    }
  }
}