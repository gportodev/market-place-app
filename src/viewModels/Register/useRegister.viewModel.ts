import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormData, registerSchema } from './register.scheme';
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation';

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: 'teste',
      email: 'teste@email.com',
      password: '123123123',
      confirmPassword: '123123123',
      phone: '11111111111',
    },
  });

  const onSubmit = handleSubmit(async userData => {
    const { confirmPassword, ...registerData } = userData;
    await userRegisterMutation.mutate(registerData);
  });

  return { control, errors, onSubmit };
};
