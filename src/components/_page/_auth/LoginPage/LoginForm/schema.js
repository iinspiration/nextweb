import * as yup from 'yup'

export default yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('กรุณากรอก Email'),
  password: yup
    .string()
    .trim()
    .required('กรุณากรอกรหัสผ่าน'),
})
