import { View, Text, TouchableOpacity } from 'react-native';
import { useRegisterViewModel } from './useRegister.viewModel';
import { FC } from 'react';

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Register</Text>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
