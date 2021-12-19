import React from 'react';
import {
  Modal as RNModal,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {BaseText} from '../../atoms/BaseText';
import {TextButton} from '../../atoms/TextButton';
import {Colors, Typography} from '../../../styles';

import styles from './styles';

type Props = {
  isVisible?: boolean;
  title: string;
  bodyText: string;
  icon?: object;
  positiveTextButton?: string;
  negativeTextButton?: string;
  onPositiveButtonPress(): void;
  onNegativeButtonPress(): void;
  onIconPress(): void;
  onClose(): void;
};

export const Modal = ({
  isVisible,
  title,
  bodyText,
  positiveTextButton,
  negativeTextButton,
  onPositiveButtonPress,
  onNegativeButtonPress,
  icon,
  onIconPress,
  onClose,
}: Props) => (
  <RNModal
    animationType="slide"
    transparent
    visible={isVisible}
    onRequestClose={onClose}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.contentScrollView}
      bounces={false}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlay}
        onPress={onClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.titleContainer}>
              <BaseText
                lineHeight={Typography.LINE_HEIGHT_18}
                fontSize={Typography.FONT_SIZE_14}
                color={Colors.SOFT_PURPLE}
                isUppercase>
                {title}
              </BaseText>
              <TouchableOpacity onPress={onIconPress} style={styles.icon}>
                {icon}
              </TouchableOpacity>
            </View>
            <BaseText
              lineHeight={Typography.LINE_HEIGHT_18}
              fontSize={Typography.FONT_SIZE_12}
              color={Colors.GRAY_URANIUM}>
              {bodyText}
            </BaseText>
            <View style={styles.buttonsContainer}>
              {negativeTextButton && (
                <TextButton
                  type="primary"
                  text={negativeTextButton}
                  isBold
                  onPress={onNegativeButtonPress}
                  style={[styles.button, styles.negativeButton]}
                />
              )}
              {positiveTextButton && (
                <TextButton
                  type="primary"
                  text={positiveTextButton}
                  isBold
                  onPress={onPositiveButtonPress}
                  style={styles.button}
                  isUppercase
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </ScrollView>
  </RNModal>
);

Modal.defaultProps = {
  isVisible: false,
  icon: undefined,
  positiveTextButton: undefined,
  negativeTextButton: undefined,
  onPositiveButtonPress: () => {},
  onNegativeButtonPress: () => {},
  onIconPress: () => {},
};
