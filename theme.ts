export const theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: '#fff',
    background: '#000',
    lightBackground: '#252525',
    primary: '#f8c404',
    error: '#ff6d6d',
    muted: '#171717',
    success: '#7DBE31',
    info: '#00FFFF'
  }
}

export interface ThemeProps {
  theme: {
    space: number[]
    colors: {
      text: string
      background: string
      lightBackground: string
      primary: string
      error: string
      muted: string
      success: string
      info: string
    }
  }
}
