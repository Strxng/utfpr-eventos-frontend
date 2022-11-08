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
  const { data } = await mainApiGet('screen-data/signup')
  return data
}

export const homeScreenDataService = async (): Promise<HomeScreenDataResponse> => {
  const { data } = await mainApiGet('screen-data/home')
  return data
}
