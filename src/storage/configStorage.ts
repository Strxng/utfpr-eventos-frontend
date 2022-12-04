import { getStorageItem, setStorageItem } from 'storage'

export const saveThemeStore = async (theme: 'light' | 'dark'): Promise<void> => {
  await setStorageItem('THEME', theme)
}

export const findThemeStore = async (): Promise<string | null> => {
  return await getStorageItem('THEME')
}
