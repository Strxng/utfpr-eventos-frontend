import { getStorageItem, setStorageItem } from 'storage'

export const findUserTokenStore = async (): Promise<string> => {
  const userToken = await getStorageItem('AUTH_TOKEN')
  return userToken ?? ''
}

export const saveUserTokenStore = async (accessToken: string): Promise<void> => {
  await setStorageItem('AUTH_TOKEN', accessToken)
}

export const destroyUserTokenStore = async (): Promise<void> => {
  await setStorageItem('AUTH_TOKEN', '')
}
