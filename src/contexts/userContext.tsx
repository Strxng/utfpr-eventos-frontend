import { useNavigation } from '@react-navigation/native'
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
  const navigation = useNavigation()

  useEffect(() => {
    getUserDetailsService().then((user) => {
      setUser(user)
    }).catch(() => {
      navigation.reset('Initial')
    })
  }, [])

  const contextValue = useMemo(
    () => ({
      user
    }),
    []
  )

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

export const useUserContext = (): UserContextData => useContext(UserContext)
