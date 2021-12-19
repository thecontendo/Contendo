import React from 'react';
import {View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {useTranslation} from '../../../hooks';
import {Colors} from '../../../styles';
import {HelperText} from '../HelperText';

import styles from './styles';

interface ErrorObj {
  message: string;
}

type Props = {
  disabled?: boolean;
  style?: object;
  error?: ErrorObj;
  helperStyle?: object;
  helper?: object;
  value?: boolean;
  onValueChange(): boolean;
  iosAnimationDuration?: number;
  iosBoxType?: 'circle' | 'square';
  iosCheckColor?: string;
  iosHideBox?: boolean;
  iosLineWidth?: number;
  iosOffAnimationType?:
    | 'stroke'
    | 'fill'
    | 'bounce'
    | 'flat'
    | 'one-stroke'
    | 'fade';
  iosOnAnimationType?:
    | 'stroke'
    | 'fill'
    | 'bounce'
    | 'flat'
    | 'one-stroke'
    | 'fade';
  iosOnFillColor?: string;
  iosOnTintColor?: string;
  iosTintColor?: string;
};

const Checkbox = ({
  disabled,
  error,
  helper,
  helperStyle,
  iosAnimationDuration,
  iosBoxType,
  iosCheckColor,
  iosHideBox,
  iosLineWidth,
  iosOffAnimationType,
  iosOnAnimationType,
  iosOnFillColor,
  iosOnTintColor,
  iosTintColor,
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
          lineWidth={iosLineWidth}
          hideBox={iosHideBox}
          boxType={iosBoxType}
          tintColor={iosTintColor}
          onCheckColor={iosCheckColor}
          onFillColor={iosOnFillColor}
          onTintColor={iosOnTintColor}
          animationDuration={iosAnimationDuration}
          onAnimationType={iosOnAnimationType}
          offAnimationType={iosOffAnimationType}
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

Checkbox.defaultProps = {
  androidTintColors: {true: Colors.SOFT_PURPLE, false: Colors.GRAY_SILK},
  disabled: false,
  helper: undefined,
  error: undefined,
  helperStyle: undefined,
  iosAnimationDuration: 0.5,
  iosBoxType: 'circle',
  iosCheckColor: Colors.SOFT_PURPLE,
  iosHideBox: false,
  iosLineWidth: 2,
  iosOffAnimationType: 'stroke',
  iosOnAnimationType: 'stroke',
  iosOnFillColor: Colors.TRANSPARENT,
  iosOnTintColor: Colors.SOFT_PURPLE,
  iosTintColor: Colors.GRAY_SILK,
  style: undefined,
  onValueChange: () => {},
  value: false,
};

export default Checkbox;
