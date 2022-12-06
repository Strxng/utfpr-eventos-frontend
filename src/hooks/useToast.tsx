import Toast from 'react-native-toast-message'
interface useToastReturn {
  notifySuccess: (msg: string) => void
  notifyError: (msg: string) => void
}

export const useToast = (): useToastReturn => {
  const notifySuccess = (msg: string): void => {
    Toast.show({
      type: 'success',
      text1: msg
    })
  }

  const notifyError = (msg: string): void => {
    Toast.show({
      type: 'error',
      text1: msg
    })
  }

  return { notifySuccess, notifyError }
}
