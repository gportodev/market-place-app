import {
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  TextInputProps,
} from 'react-native';
import { appInputVariants, AppInputVariantsProps } from './input.variant';
import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (valu: string) => void | string;
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  ...textInputProps
}) => {
  const styles = appInputVariants({});

  return (
    <View
      className={styles.container({
        className: containerClassName,
      })}
    >
      <Text className={styles.label()}>Label</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons name="person" size={22} />

        <TextInput className={styles.input()} {...textInputProps} />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
