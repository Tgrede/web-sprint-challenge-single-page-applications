import * as yup from 'yup'

export default yup.object().shape({
     username: yup.string().required('Name Required').min(2, 'Enter a longer name')
})