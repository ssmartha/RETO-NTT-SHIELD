const BASE_URI = "https://randomuser.me/api/";

export function getUsersData(num) {
  return fetch(BASE_URI + "?page=1&results=" + num + "&seed=abc")
  .then((response) => response.json()
  ).then((data) => data);
}


