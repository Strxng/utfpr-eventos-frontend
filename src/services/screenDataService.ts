import { mainApiGet } from 'api/mainApi'
import { Campus, Course } from './campusService'
import { Event } from './eventService'

interface Genre {
  id: string
  name: string
}
export interface SignupScreenDataResponse {
  genres: Genre[]
  campus: Campus[]
}

export interface HomeScreenDataResponse {
  courses: Course[]
  popularEvents: Event[]
  weekEvents: Event[]
}

export const signupScreenDataService = async (): Promise<SignupScreenDataResponse> => {
  const { data: genres } = await mainApiGet('genre')
  const { data: campus } = await mainApiGet('campus')

  return { genres, campus }
}

export const homeScreenDataService = async (courseId: string): Promise<HomeScreenDataResponse> => {
  const { data: courses } = await mainApiGet('course')
  const { data: weekEvents } = await mainApiGet(`event/week?page=1&limit=10&courseId=${courseId}`)
  const { data: popularEvents } = await mainApiGet(`event/popular?page=1&limit=10&courseId=${courseId}`)

  return {
    courses,
    popularEvents,
    weekEvents
  }
}
