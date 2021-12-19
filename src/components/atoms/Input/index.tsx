import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import {TextInputMask} from 'react-native-masked-text';

import {useTranslation} from '../../../hooks';
import {HelperText} from '../HelperText';
import {Colors} from '../../../styles';

import {Label} from './Label';
import styles from './styles';

type ControlProps = {
  onChange: any;
  value: string;
  controllerProps: any;
};

interface ErrorObj {
  message: string;
}

type Props = {
  control: any;
  name: string;
  containerStyle?: object;
  style?: object;
  helperStyle?: object;
  label?: string;
  value?: string;
  helper?: string;
  placeholder?: string;
  error?: ErrorObj;
  keyboardType?: string;
  textContentType?: string;
  onChangeText?: void;
  onBlur?: void;
  onFocus?: void;
  isEditable?: boolean;
  isMask?: boolean;
  isPassword?: boolean;
  leftIcon?: object;
  rightIcon?: object;
};

export const Input = ({
  control,
  name,
  label,
  helper,
  placeholder,
  containerStyle,
  style,
  error,
  isEditable,
  helperStyle,
  leftIcon,
  rightIcon,
  textContentType,
  keyboardType,
  isPassword,
  isMask,
  ...props
}: Props) => {
  const _t = useTranslation();
  const inputRef: any = useRef();
  const [isFocused, setFocus] = useState(false);
  const InputComponent = isMask ? TextInputMask : TextInput;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Label isFocused={isFocused} hasError={!!error} isDisabled={!isEditable}>
        {label ?? ''}
      </Label>
      <View>
        <View
          style={[
            styles.sectionStyle,
            isFocused && styles.focused,
            error && styles.error,
          ]}>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Controller
            name={name}
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value, ...controllerProps}}) => {
              // @ts-ignore
              return (
                // @ts-ignore
                <InputComponent
                  {...controllerProps}
                  {...props}
                  style={[
                    styles.input,
                    !isEditable && styles.disabled,
                    !!error && styles.inputError,
                    style,
                  ]}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  onChangeText={(val: string) => onChange(val)}
                  value={value}
                  placeholder={placeholder}
                  ref={inputRef}
                  textContentType={textContentType}
                  secureTextEntry={isPassword}
                  keyboardType={keyboardType}
                  autoCapitalize="none"
                  placeholderTextColor={Colors.GRAY_URANIUM}
                  as="input"
                />
              );
            }}
          />
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
        {(error || helper) && (
          <HelperText style={helperStyle} hasError={!!error}>
            {_t(error && error.message ? error.message : '') || helper}
          </HelperText>
        )}
      </View>
    </View>
  );
};
