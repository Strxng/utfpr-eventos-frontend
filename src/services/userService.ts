import { ApiGet, ApiPost } from './api'
import { saveUserToken } from './storage'

interface AcessToken {
  accessToken: string
}

interface User {
  id: string
  name: string
  academicRegistry: string
  email: string
  phone: string
  birthdate: Date
  genre: string
  campus: string
  course: string
  createdAt: Date
  updatedAt: Date
}

interface AuthServiceParams {
  email: string
  password: string
}

interface UserServiceResponse extends User, AcessToken {
}

interface SignupServiceParams {
  name: string
  academicRegistry: string
  email: string
  phone: string
  birthdate: Date
  genreId: string
  campusId: string
  courseId: string
  password: string
  confirmPassword: string
}

const authService = async ({ email, password }: AuthServiceParams): Promise<UserServiceResponse> => {
  const { data, statusCode } = await ApiPost('auth/login', { email, password })
  if (statusCode !== 201) {
    throw new Error(data.message[0])
  }

  await saveUserToken(data.accessToken)
  return data
}

const signupService = async (user: SignupServiceParams): Promise<UserServiceResponse> => {
  const { data, statusCode } = await ApiPost('user', user)
  if (statusCode !== 201) {
    throw new Error(data.message[0])
  }

  await saveUserToken(data.accessToken)
  return data
}

const getUserDetailsService = async (): Promise<User> => {
  const { data, statusCode } = await ApiGet('user')
  if (statusCode !== 200) {
    throw new Error(data.message[0])
  }

  return data
}

export { authService, signupService, getUserDetailsService }
