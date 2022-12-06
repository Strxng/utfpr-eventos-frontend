import React from 'react'
import { BaseToast, ErrorToast } from 'react-native-toast-message'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../theme'

export const toastConfig = {
  success: (props: any) => {
    const { colors } = useTheme() as ThemeTypeProps
    return (
    <BaseToast {...props}
      style={{
        height: 50,
        backgroundColor: colors.lightBackground,
        borderLeftColor: colors.success
      }}
      text1Style = {{
        fontSize: 13,
        color: colors.textPrimary
      }}
    />
    )
  },

  error: (props: any) => {
    const { colors } = useTheme() as ThemeTypeProps
    return (
      <ErrorToast {...props}
        style={{
          height: 50,
          backgroundColor: colors.lightBackground,
          borderLeftColor: colors.error
        }}
        text1Style = {{
          fontSize: 13,
          color: colors.textPrimary
        }}
      />
    )
  }
}
