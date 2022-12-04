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
  const weekEventsUrlString = categoryId ? `event/week?categoryId=${categoryId}&page=1&limit=10` : 'event/week?page=1&limit=10'
  const popularEventsUrlString = categoryId ? `event/popular?categoryId=${categoryId}?page=1&limit=10` : 'event/popular?page=1&limit=10'

  const { data: courses } = await mainApiGet('course')
  const { data: weekEvents } = await mainApiGet(weekEventsUrlString)
  const { data: popularEvents } = await mainApiGet(popularEventsUrlString)

  return {
    courses,
    popularEvents,
    weekEvents
  }
}
