import axios from 'axios'
import { getUserToken } from './storage'

interface HttpReponse {
  data: any
  statusCode: number
}

const Api = axios.create({
  baseURL: 'http://localhost:8080/', // mudar dps de acordo com as envs
  timeout: 10000
})

export const ApiGet = async (endpoint: string): Promise<HttpReponse> => {
  const userToken = await getUserToken()

  const response = await Api.get(endpoint, {
    headers: {
      authorization: userToken
    }
  })

  return {
    data: response.data,
    statusCode: response.status
  }
}

export const ApiPost = async (endpoint: string, postData: any): Promise<HttpReponse> => {
  const userToken = await getUserToken()

  const response = await Api.post(endpoint, postData, {
    headers: {
      authorization: userToken
    }
  })

  return {
    data: response.data,
    statusCode: response.status
  }
}
