import AsyncStorage from '@react-native-async-storage/async-storage'

export const findUserTokenStore = async (): Promise<string> => {
  const userToken = await AsyncStorage.getItem('AUTH_TOKEN')
  return userToken ?? ''
}

export const saveUserTokenStore = async (accessToken: string): Promise<void> => {
  await AsyncStorage.setItem('AUTH_TOKEN', accessToken)
}

export const destroyUserTokenStore = async (): Promise<void> => {
  await AsyncStorage.setItem('AUTH_TOKEN', '')
}
