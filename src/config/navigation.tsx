/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home, Initial, SignIn, SignUp, Profile, Favorites, Event, EventList } from 'pages'
import { FooterNavigation } from 'components/Footers'
import { EventSearch } from 'pages/eventSearch'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName='HomeTab' screenOptions={{ headerShown: false }} tabBar={(props) => <FooterNavigation {...props} />}>
      <Tab.Screen name='HomeTab' component={Home} options={{ unmountOnBlur: true }} />
      <Tab.Screen name='FavoritesTab' component={Favorites} options={{ unmountOnBlur: true }} />
      <Tab.Screen name='ProfileTab' component={Profile} />
    </Tab.Navigator>
  )
}

export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Initial' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={TabNavigation} />
        <Stack.Screen name='Initial' component={Initial} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Event' component={Event} />
        <Stack.Screen name='EventList' component={EventList} />
        <Stack.Screen name='EventSearch' component={EventSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
