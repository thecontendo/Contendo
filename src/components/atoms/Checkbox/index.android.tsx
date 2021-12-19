import React from 'react';
import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {useTranslation} from '../../../hooks';
import {HelperText} from '../HelperText';

import styles from './styles';

interface AndroidTintColorsInterface {
  true: string;
  false: string;
}
interface ErrorObj {
  message: string;
}

type Props = {
  androidTintColors?: AndroidTintColorsInterface;
  style?: object;
  disabled?: boolean;
  error?: ErrorObj;
  helperStyle?: object;
  helper?: object;
  value?: boolean;
  isChecked?: boolean;
  onValueChange(): void;
};

const Checkbox = ({
  androidTintColors,
  disabled,
  error,
  helper,
  helperStyle,
  style,
  onValueChange,
  value,
}: Props) => {
  const _t = useTranslation();

  return (
    <View>
      <View style={style}>
        <CheckBox
          disabled={disabled}
          value={value}
          onValueChange={onValueChange}
          tintColors={androidTintColors}
          style={styles.checkboxContainer}
        />
      </View>
      {(error || helper) && (
        <HelperText style={helperStyle} hasError={!!error}>
          {_t(error && error.message ? error.message : '') || helper}
        </HelperText>
      )}
    </View>
  );
};

export default Checkbox;
