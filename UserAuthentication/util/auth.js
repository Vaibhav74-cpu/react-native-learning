import axios from "axios";

const API_KEY = "AIzaSyCHYAQzWrBOj0Ma-gnrtehsDkslplARVes";

async function authenticate(mode, email, password) {
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export  function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

//another approach

// export async function createUser(email, password) {
//   const response = await axios.post(
//     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     },
//   );
// }

// export async function login(email, password) {
//   const response = await axios.post(
//     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,

//     {
//       email: email,
//       password: password,
//       returnSecureToken: true,
//     },
//   );
//   console.log(response.data);
// }
