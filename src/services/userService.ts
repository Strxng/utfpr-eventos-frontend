import { mainApiDelete, mainApiGet, mainApiPost } from 'api/mainApi'
import { destroyUserTokenStore, saveUserTokenStore } from 'storage/userStorage'
import { Event } from './screenDataService'

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

interface FavoriteEventsResponse {
  events: Event[]
  finishedEvents: Event[]
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

export const authService = async ({ email, password }: AuthServiceParams): Promise<UserServiceResponse> => {
  const { data } = await mainApiPost('auth/login', { email, password })
  await saveUserTokenStore(data.accessToken)
  return data
}

export const signupService = async (user: SignupServiceParams): Promise<UserServiceResponse> => {
  const { data } = await mainApiPost('user', user)
  await saveUserTokenStore(data.accessToken)
  return data
}

export const getUserDetailsService = async (): Promise<User> => {
  const { data } = await mainApiGet('user')
  return data
}

export const logoutUserService = async (): Promise<void> => {
  await destroyUserTokenStore()
}

export const favoriteService = async (eventId: string): Promise<void> => {
  await mainApiPost('event/favorite', { eventId })
}

export const unfavoriteService = async (eventId: string): Promise<void> => {
  await mainApiDelete(`event/favorite/${eventId}`)
}

export const getFavoriteEvents = async (): Promise <FavoriteEventsResponse> => {
  const { data } = await mainApiGet('event/favorite')
  return data
}
