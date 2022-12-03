export const darkTheme = {
  colors: {
    text: '#fff',
    background: '#000',
    lightBackground: '#252525',
    primary: '#f8c404',
    error: '#ff6d6d',
    muted: '#171717',
    success: '#7DBE31',
    info: '#00FFFF'
  },
  font: {
    font: {
      families: {
        regular: 'PlusJakartaSans-Regular',
        medium: 'PlusJakartaSans-Medium',
        bold: 'PlusJakartaSans-Bold'
      },
      sizes: {
        small: '16px',
        medium: '18px',
        large: '20px',
        extraLarge: '25px',
        big: '30px'
      }
    }
  }
}

export const lightTheme = {
  colors: {
    textPrimary: '#000',
    textSecondary: '#fff',
    background: '#fff',
    lightBackground: '#c9c9c9',
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

export interface ThemeTypeProps {
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
