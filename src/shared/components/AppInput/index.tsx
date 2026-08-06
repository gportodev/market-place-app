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
import { useAppInputViewModel } from './useAppInputViewModel';

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  value,
  isError,
  secureTextEntry,
  onBlur,
  onFocus,
  onChangeText,
  mask,
  error,
  isDisabled,
  ...textInputProps
}) => {
  const {
    getIconColor,
    handleBlur,
    handleFocus,
    handlePasswordToggle,
    handleWrapperPress,
    showPassword,
    handleChangeText,
    isFocused,
  } = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  });

  const styles = appInputVariants({
    isFocused,
  });

  return (
    <View
      className={styles.container({
        className: containerClassName,
      })}
    >
      <Text className={styles.label()}>{label}</Text>
      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            color={getIconColor()}
            className="mr-3"
            name={leftIcon}
            size={22}
          />
        )}

        <TextInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={styles.input()}
          onChangeText={handleChangeText}
          value={value}
          {...textInputProps}
        />

        <TouchableOpacity>
          <Ionicons name="eye-off-outline" size={22} />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
