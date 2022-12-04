import { mainApiGet } from 'api/mainApi'

export interface Course {
  id: string
  name: string
}

export interface Campus {
  id: string
  name: string
  courses: Course[]
}

export const getCampusService = async (): Promise<Campus[]> => {
  const { data: campus } = await mainApiGet('campus')
  return campus
}
