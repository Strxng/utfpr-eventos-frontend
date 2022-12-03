export interface ThemeTypeProps {
  name: string
  colors: {
    textPrimary: string
    textSecondary: string
    background: string
    lightBackground: string
    btnPrimary: string
    btnColored: string
    error: string
    muted: string
    success: string
    info: string
  }
  font: {
    families: {
      regular: string
      medium: string
      bold: string
    }
    sizes: {
      extraSmall: number
      small: number
      medium: number
      large: number
      extraLarge: number
      big: number
    }
  }
}

export interface ThemeType {
  theme: ThemeTypeProps
}

export const lightTheme: ThemeTypeProps = {
  name: 'light',
  colors: {
    textPrimary: '#000',
    textSecondary: '#fff',
    background: '#fff',
    lightBackground: '#dbdbdb',
    btnPrimary: '#000',
    btnColored: '#f8c404',
    error: '#ff6d6d',
    muted: '#171717',
    success: '#7DBE31',
    info: '#00FFFF'
  },
  font: {
    families: {
      regular: 'PlusJakartaSans-Regular',
      medium: 'PlusJakartaSans-Medium',
      bold: 'PlusJakartaSans-Bold'
    },
    sizes: {
      extraSmall: 14,
      small: 16,
      medium: 18,
      large: 20,
      extraLarge: 24,
      big: 30
    }
  }
}

export const darkTheme: ThemeTypeProps = {
  name: 'dark',
  colors: {
    textPrimary: '#fff',
    textSecondary: '#000',
    background: '#000',
    lightBackground: '#252525',
    btnPrimary: '#fff',
    btnColored: '#f8c404',
    error: '#ff6d6d',
    muted: '#171717',
    success: '#7DBE31',
    info: '#00FFFF'
  },
  font: {
    families: {
      regular: 'PlusJakartaSans-Regular',
      medium: 'PlusJakartaSans-Medium',
      bold: 'PlusJakartaSans-Bold'
    },
    sizes: {
      extraSmall: 14,
      small: 16,
      medium: 18,
      large: 20,
      extraLarge: 24,
      big: 30
    }
  }
}
