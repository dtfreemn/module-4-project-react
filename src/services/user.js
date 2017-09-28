export function createUser(userParams) {
  return fetch('http://localhost:3000/api/v1/users', {
      method: 'post',
      body : userParams,
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
}

export function logInUser(userParams) {
  return fetch('http://localhost:3000/api/v1/login', {
      method: 'post',
      body: userParams,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
}

export function logOutUser(){
  localStorage.removeItem("jwt")
}
