import { mainApiGet, mainApiPost } from 'api/mainApi'
import { destroyUserTokenStore, saveUserTokenStore } from 'storage/userStorage'

interface AcessToken {
  accessToken: string
}

export interface User {
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
  const { data } = await mainApiPost('auth/login', { email, password })
  await saveUserTokenStore(data.accessToken)
  return data
}

const signupService = async (user: SignupServiceParams): Promise<UserServiceResponse> => {
  const { data } = await mainApiPost('user', user)
  await saveUserTokenStore(data.accessToken)
  return data
}

const getUserDetailsService = async (): Promise<User> => {
  const { data } = await mainApiGet('user')
  return data
}

const logoutUserService = async (): Promise<void> => {
  await destroyUserTokenStore()
}

export { authService, signupService, getUserDetailsService, logoutUserService }
