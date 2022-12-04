import { mainApiGet } from 'api/mainApi'

interface Genre {
  id: string
  name: string
}

export interface Course {
  id: string
  name: string
}

export interface Campus {
  id: string
  name: string
  courses: Course[]
}

interface Favorites {
  favorites: number
}
export interface Event {
  id: string
  name: string
  image: string
  description: string
  startDate: Date
  endDate: Date
  local: string
  courseId: string
  course: string
  isFavorite: boolean
  campus: string
}
export interface SignupScreenDataResponse {
  genres: Genre[]
  campus: Campus[]
}

export interface HomeScreenDataResponse {
  courses: Course[]
  popularEvents: Array<Event & Favorites>
  weekEvents: Event[]
}

export const signupScreenDataService = async (): Promise<SignupScreenDataResponse> => {
  const { data: genres } = await mainApiGet('genre')
  const { data: campus } = await mainApiGet('campus')

  return { genres, campus }
}

export const homeScreenDataService = async (categoryId: string): Promise<HomeScreenDataResponse> => {
  const urlString = categoryId ? `event/popular-week?categoryId=${categoryId}` : 'event/popular-week'

  const { data: courses } = await mainApiGet('course')
  const { data: events } = await mainApiGet(urlString)

  const { popularEvents, weekEvents } = events

  return {
    courses,
    popularEvents,
    weekEvents
  }
}
