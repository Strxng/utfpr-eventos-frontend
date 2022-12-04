import { mainApiGet } from 'api/mainApi'

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
  campus: string
  favorites: number
  isFavorite: boolean
}

interface GetEventsServiceProps {
  page?: number
  limit?: number
  search?: string
  campusId?: string
  courseId?: string
  eventType?: 'week' | 'popular'
}

export const getEventsService = async ({
  campusId,
  courseId,
  limit,
  page,
  search,
  eventType
}: GetEventsServiceProps): Promise<Event[]> => {
  let url: string
  if (eventType) {
    url = `event/${eventType}?page=${page ?? ''}&limit=${limit ?? ''}&search=${search ?? ''}&campusId=${campusId ?? ''}&courseId=${courseId ?? ''}`
  } else {
    url = `event?page=${page ?? ''}&limit=${limit ?? ''}&search=${search ?? ''}&campusId=${campusId ?? ''}&courseId=${courseId ?? ''}`
  }

  const { data: events } = await mainApiGet(url)

  return events
}
