import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormData, registerSchema } from './register.scheme';

export const useRegisterViewModel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(() => {});

  return { control, errors, onSubmit };
};
