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

export interface SignupScreenDataResponse {
  genres: Genre[]
  campus: Campus[]
}

export const signupScreenDataService = async (): Promise<SignupScreenDataResponse> => {
  const { data } = await mainApiGet('screen-data/signup')
  return data
}
