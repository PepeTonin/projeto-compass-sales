import axios from 'axios';

const BACKEND_URL = 'https://compass-sales-5c247-default-rtdb.firebaseio.com/';

interface userDataType {
  name: string;
  uid: string;
}

export async function storeUserName(userData: userDataType) {
  await axios.post(`${BACKEND_URL}/user-data/${userData.uid}.json`, {
    name: userData.name,
  });
}

export async function getUserNameByUid(targetUid: string) {
  const response = await axios.get(
    `${BACKEND_URL}/user-data/${targetUid}.json`
  );
  for (let key in response.data) {
    const name = response.data[key].name;
    return name;
  }
}
