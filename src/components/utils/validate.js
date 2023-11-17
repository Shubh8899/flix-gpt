export function validateCredentials(email, password) {
  const isEmailValid =
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!isEmailValid && !isPasswordValid) {
    return "Email & Password are invalid";
  } else if (!isEmailValid) {
    return "Email is invalid";
  } else if (!isPasswordValid) {
    return "Password is invalid";
  } else {
    return null;
  }
}

export function validateSignUpCred(name) {
    const isNameValid = /^[a-z ,.'-]+$/i.test(name);

    if (!isNameValid) {
        return "Name invalid"
    } else {
        return null
    }
}