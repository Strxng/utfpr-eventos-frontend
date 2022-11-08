import * as Yup from 'yup'

export const signupSchema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório'),
  email: Yup.string().required('O campo email é obrigatório'),
  academicRegistry: Yup.string().required('O campo RA é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  birthdate: Yup.string().required('Data de nascimento é obrigatória'),
  password: Yup.string().required('O campo senha é obrigatório'),
  confirmPassword: Yup.string().required('O campo confirmar senha é obrigatório'),
  genreId: Yup.string().required('O campo gênero é obrigatório'),
  campusId: Yup.string().required('O campo campus é obrigatório'),
  courseId: Yup.string().required('O campo curso é obrigatório')
})
