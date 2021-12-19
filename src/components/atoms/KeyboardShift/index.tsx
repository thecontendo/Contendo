import React, {useCallback, useEffect, useMemo} from 'react';

import {Animated, Dimensions, Keyboard, TextInput} from 'react-native';

import styles from './styles';

type Props = {
  children: any;
};

const {State: TextInputState} = TextInput;

export const KeyboardShift = ({children}: Props) => {
  const shift = useMemo(() => new Animated.Value(0), []);
  const handleKeyboardDidShow = useCallback(
    event => {
      const {height: windowHeight} = Dimensions.get('window');
      const keyboardHeight = event.endCoordinates.height;
      console.log('squareRef', TextInputState.currentlyFocusedInput());
      TextInputState.currentlyFocusedInput().measure(
        (width, height, pageX, pageY) => {
          const gap = windowHeight - keyboardHeight - (pageY + height);
          if (gap >= 0) {
            return;
          }
          Animated.timing(shift, {
            toValue: gap,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        },
      );
    },
    [shift],
  );

  const handleKeyboardDidHide = useCallback(() => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [shift]);

  useEffect(() => {
    console.log('hello');
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      console.log("Keyboard Shown");
    });

    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [handleKeyboardDidShow, handleKeyboardDidHide]);

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: shift}]}]}>
      {children}
    </Animated.View>
  );
};
