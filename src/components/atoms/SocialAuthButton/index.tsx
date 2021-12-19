import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableNativeFeedback} from 'react-native';

import {PROP_TYPES_STYLE} from '../../../constant/prototypes';

import styles from './styles';

// @ts-ignore
const SocialAuthButton = ({children, onPress, style}) => (
  <TouchableNativeFeedback onPress={onPress} style={styles.button}>
    <View style={[styles.container, style]}>{children}</View>
  </TouchableNativeFeedback>
);

SocialAuthButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PROP_TYPES_STYLE,
};

export default SocialAuthButton;
