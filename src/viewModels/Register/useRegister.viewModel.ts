import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormData, registerSchema } from './register.scheme';
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation';
import { useUserStore } from '../../shared/store/user-store';

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: 'teste2',
      email: 'teste2@email.com',
      password: '123123123',
      confirmPassword: '123123123',
      phone: '11111111112',
    },
  });

  const onSubmit = handleSubmit(async userData => {
    const { confirmPassword, ...registerData } = userData;
    const mutationResponse =
      await userRegisterMutation.mutateAsync(registerData);
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    });
  });

  console.log(user);

  return { control, errors, onSubmit };
};
