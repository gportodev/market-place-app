import { View, Text, TouchableOpacity } from 'react-native';
import { useRegisterViewModel } from './useRegister.viewModel';
import { FC } from 'react';
import { AppInput } from '../../shared/components/AppInput';

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  return (
    <View className="flex-1  justify-center">
      <AppInput label={'E-mail'} />
      <AppInput label={'Senha'} />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
