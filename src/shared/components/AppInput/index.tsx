import { Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import { appInputVariants } from './input.variant';
import { Ionicons } from '@expo/vector-icons';

export const AppInput = () => {
  const styles = appInputVariants({});

  return (
    <View>
      <Pressable>
        <Ionicons name="person" size={20} color="#000" />

        <TextInput />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={20} color="#000" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
