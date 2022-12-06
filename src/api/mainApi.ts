import axios from 'axios'
import { findUserTokenStore } from 'storage/userStorage'

interface HttpReponse {
  data: any
  statusCode: number
}

const Api = axios.create({
  baseURL: 'https://urchin-app-n8vub.ondigitalocean.app/', // mudar dps de acordo com as envs
  timeout: 10000
})

export const mainApiGet = async (endpoint: string): Promise<HttpReponse> => {
  try {
    const userToken = await findUserTokenStore()
    const response = await Api.get(endpoint, {
      headers: {
        authorization: userToken
      }
    })
    return {
      data: response.data,
      statusCode: response.status
    }
  } catch (error: any) {
    throw new Error(error?.response?.data?.message[0] || 'Falha ao comunicar com o servidor')
  }
}

export const mainApiPost = async (endpoint: string, postData: any): Promise<HttpReponse> => {
  try {
    const userToken = await findUserTokenStore()
    const response = await Api.post(endpoint, postData, {
      headers: {
        authorization: userToken
      }
    })
    return {
      data: response.data,
      statusCode: response.status
    }
  } catch (error: any) {
    throw new Error(error?.response?.data?.message[0] || 'Falha ao comunicar com o servidor')
  }
}

export const mainApiDelete = async (endpoint: string): Promise<HttpReponse> => {
  try {
    const userToken = await findUserTokenStore()
    const response = await Api.delete(endpoint, {
      headers: {
        authorization: userToken
      }
    })
    return {
      data: response.data,
      statusCode: response.status
    }
  } catch (error: any) {
    throw new Error(error?.response?.data?.message[0] || 'Falha ao comunicar com o servidor')
  }
}
