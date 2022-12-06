import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getUserDetailsService, logoutUserService } from '../services/userService'

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
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider ({ children }: any): JSX.Element {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    getUserDetailsService().then((user) => {
      setUser(user)
    }).catch(() => {
      logoutUserService().catch(() => { })
      setUser(null)
    })
  }, [])

  const contextValue = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  )

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

export const useUserContext = (): UserContextData => useContext(UserContext)
