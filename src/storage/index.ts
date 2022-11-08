import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStorageItem = async (key: string): Promise<string | null> => {
  return await AsyncStorage.getItem(key)
}

export const setStorageItem = async (key: string, value: string): Promise<void> => {
  return await AsyncStorage.setItem(key, value)
}
