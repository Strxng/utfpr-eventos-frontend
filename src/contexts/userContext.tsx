import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getUserDetailsService } from '../services/userService'

interface User {
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

export interface UserContextData {
  user: User | null
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider ({ children }: any): JSX.Element {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    getUserDetailsService().then((user) => {
      setUser(user)
    }).catch(() => {
    })
  }, [])

  const contextValue = useMemo(
    () => ({
      user
    }),
    [user]
  )

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

export const useUserContext = (): UserContextData => useContext(UserContext)
