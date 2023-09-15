export function nameValidation(enteredName: string) {
  if (enteredName.length < 4) {
    return false;
  }
  return true;
}

export function emailValidation(enteredEmail: string) {
  if (enteredEmail.includes('@') && enteredEmail.includes('.com')) {
    return true;
  }
  return false;
}

export function passwordValidation(enteredPassword: string) {
  if (enteredPassword.length >= 6) {
    return true;
  }
  return false;
}
