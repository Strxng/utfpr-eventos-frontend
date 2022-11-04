import axios from 'axios'

const baseUrl = 'https://127.0.0.1:3000/login'

const auth = userObject => {
  const request = axios.post(baseUrl, userObject)
  return request.then(response => response.data)
}

const signup = userObject => {
  const request = axios.post(baseUrl, userObject)
  return request.then(response => response.data)
}

export default { auth, signup }
