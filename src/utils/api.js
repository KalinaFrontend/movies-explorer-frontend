import { baseUrl } from "./constants"

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }


export async function getUserInfo () {
   const data = await fetch(`${baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
   })
   return checkResponse(data);
}

export async function updateUserInfo(userInfo) {
  const data = await fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  })
  return checkResponse(data);
}
