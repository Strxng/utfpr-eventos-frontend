import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, Initial, SignIn, SignUp } from 'pages'

const RootStack = createNativeStackNavigator()

export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='Initial' component={Initial}/>
        <RootStack.Screen name='Home' component={Home}/>
        <RootStack.Screen name='SignIn' component={SignIn}/>
        <RootStack.Screen name='SignUp' component={SignUp}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
