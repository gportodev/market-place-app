import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(4, 'O nome deve ter pelo menos 4 caracteres'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: yup
    .string()
    .required('Confirmar Senha é obrigatório')
    .oneOf([yup.ref('password')], 'Senhas não coincidem'),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .matches(/^\d{11}$/, 'Telefone deve ter 11 dígitos (DDD + número)'),
});
