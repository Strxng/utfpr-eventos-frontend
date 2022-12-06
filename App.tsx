import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, LogBox } from 'react-native'
import * as Font from 'expo-font'

import { Navigation } from './src/config/navigation'
import { UserProvider } from './src/contexts/userContext'
import { ThemeProvider } from 'styled-components'
import Toast from 'react-native-toast-message'
import { toastConfig } from './src/config/toastConfig'
import { darkTheme, lightTheme } from './theme'
import { findThemeStore } from 'storage/configStorage'

export default function App (): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isDark, setIsDark] = useState<boolean>(false)

  const initApp = useCallback(async () => {
    const theme = await findThemeStore()
    if (theme === 'dark') {
      setIsDark(true)
    }

    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state'
    ])

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
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Navigation />
        <Toast config={toastConfig}/>
      </ThemeProvider>
    </UserProvider>
  )
}
