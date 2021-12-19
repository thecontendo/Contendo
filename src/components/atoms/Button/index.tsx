import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Colors} from 'styles';
import {IButtonProps} from 'interfaces/IAtom';

const Button = (props: IButtonProps) => {
  const {onPress, title, width} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        {
          width: width,
        },
      ]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  // ...
  default: {
    paddingHorizontal: 36,
  },
  black: {
    backgroundColor: Colors.GRAY_90,
  },
  red: {
    backgroundColor: Colors.RED_INPUT_ERROR,
  },
  fullWidth: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  appButtonContainer: {
    width: '80%',
    elevation: 8,
    backgroundColor: '#4caea5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
