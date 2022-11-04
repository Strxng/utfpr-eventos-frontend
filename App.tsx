import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'

import { Navigation } from './src/config/navigation'
import { UserProvider } from './src/contexts/userContext'

export default function App (): JSX.Element {
  const [isLoading, setIsLoading] = useState(true)

  const initApp = useCallback(async () => {
    await Font.loadAsync({
      'PlusJakartaSans-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
      'PlusJakartaSans-Medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
      'PlusJakartaSans-Regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf')
    })

    setIsLoading(false)
  }, [])

  useEffect(() => {
    void initApp()
  }, [])

  if (isLoading) return <ActivityIndicator />

  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  )
}
