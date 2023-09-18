import axios from 'axios';

const AUTH_ENDPOINT = 'https://identitytoolkit.googleapis.com/v1/accounts:';

const API_KEY = 'AIzaSyBPpwE5idc2__CFguEwmWdSlJRISRWR_bo';

async function authenticate(mode: string, email: string, password: string) {
  const url = `${AUTH_ENDPOINT}${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email.toLowerCase(),
    password: password,
    returnSecureToken: true,
  });
  const token: string = response.data.idToken;
  const uid: string = response.data.localId;
  return { token: token, uid: uid };
}

export function createUser(email: string, password: string) {
  return authenticate('signUp', email, password);
}

export function login(email: string, password: string) {
  return authenticate('signInWithPassword', email, password);
}

export async function resetPassword(email: string) {
  const url = `${AUTH_ENDPOINT}sendOobCode?key=${API_KEY}`;
  await axios.post(url, { requestType: 'PASSWORD_RESET', email: email.toLowerCase() });
}
