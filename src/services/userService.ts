import { ApiPost } from './api'
import { saveUserToken } from './storage'

interface AuthServiceParams {
  email: string
  password: string
}

interface UserServiceResponse {
  id: string
  name: string
  academicRegistry: string
  email: string
  phone: string
  birthdate: Date
  genre: string
  campus: string
  course: string
  accessToken: string
  createdAt: Date
  updatedAt: Date
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

export default { authService, signupService }
