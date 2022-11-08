import { useToast as useToastReactNativeStyled } from 'react-native-styled-toast'
import theme from '../../theme'

interface useToastReturn {
  notifySuccess: (msg: string) => void
  notifyError: (msg: string) => void
}

export const useToast = (): useToastReturn => {
  const { toast } = useToastReactNativeStyled()

  const notifySuccess = (msg: string): void => {
    toast({
      message: msg,
      hideCloseIcon: true,
      closeButtonStyles: {
        bg: '#000'
      },
      toastStyles: {
        bg: '#171717'
      }
    })
  }

  const notifyError = (msg: string): void => {
    toast({
      message: msg,
      iconName: 'x-circle',
      accentColor: theme.colors.error,
      iconColor: theme.colors.error,
      hideCloseIcon: true,
      closeButtonStyles: {
        bg: '#000'
      },
      toastStyles: {
        bg: '#171717'
      }
    })
  }

  return { notifySuccess, notifyError }
}
