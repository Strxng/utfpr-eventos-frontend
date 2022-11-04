import AsyncStorage from '@react-native-async-storage/async-storage'

export const getUserToken = async (): Promise<string> => {
  const userToken = await AsyncStorage.getItem('AUTH_TOKEN')
  return userToken ?? ''
}

export const saveUserToken = async (accessToken: string): Promise<void> => {
  await AsyncStorage.setItem('AUTH_TOKEN', accessToken)
}
