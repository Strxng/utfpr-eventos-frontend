import * as Yup from 'yup'

export const signinSchema = Yup.object().shape({
  email: Yup.string().required('O campo email é obrigatório'),
  password: Yup.string().required('O campo senha é obrigatório')
})
