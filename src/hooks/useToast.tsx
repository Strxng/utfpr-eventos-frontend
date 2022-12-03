import { useToast as useToastReactNativeStyled } from 'react-native-styled-toast'
import { useTheme } from 'styled-components'
import { ThemeTypeProps } from '../../theme'

interface useToastReturn {
  notifySuccess: (msg: string) => void
  notifyError: (msg: string) => void
}

export const useToast = (): useToastReturn => {
  const { toast } = useToastReactNativeStyled()
  const { colors } = useTheme() as ThemeTypeProps

  const notifySuccess = (msg: string): void => {
    toast({
      message: msg,
      hideCloseIcon: true,
      toastStyles: {
        bg: colors.lightBackground,
        borderColor: 'transparent'
      }
    })
  }

  const notifyError = (msg: string): void => {
    toast({
      message: msg,
      iconName: 'x-circle',
      accentColor: colors.error,
      iconColor: colors.error,
      hideCloseIcon: true,
      color: colors.textPrimary,
      toastStyles: {
        bg: colors.lightBackground,
        borderColor: 'transparent'
      }
    })
  }

  return { notifySuccess, notifyError }
}
