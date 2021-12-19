import {Dimensions, PixelRatio} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {WHITE} from './colors';

const guidelineBaseWidth = 360;
export const WINDOW_WIDTH = Dimensions.get('window').width;

export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const windownPercent = (size: number) => (size * WINDOW_WIDTH) / 100;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

const dimensions = (
  top: number,
  right = top,
  bottom = top,
  left = right,
  property: string,
) => ({
  [`${property}Top`]: top,
  [`${property}Right`]: right,
  [`${property}Bottom`]: bottom,
  [`${property}Left`]: left,
});

export const margin = (top: any, right: any, bottom: any, left: any) =>
  dimensions(
    scaleSize(top),
    scaleSize(right),
    scaleSize(bottom),
    scaleSize(left),
    'margin',
  );

export const padding = (top: any, right: any, bottom: any, left: any) =>
  dimensions(
    scaleSize(top),
    scaleSize(right),
    scaleSize(bottom),
    scaleSize(left),
    'padding',
  );

export const border = (
  top: any,
  right = top,
  bottom = top,
  left = right,
  color = Colors.BLACK,
) => ({
  borderColor: color,
  borderTopWidth: scaleSize(top),
  borderRightWidth: scaleSize(right),
  borderBottomWidth: scaleSize(bottom),
  borderLeftWidth: scaleSize(left),
});

export const boxShadow = (
  color: any,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) => ({
  shadowColor: color,
  shadowOffset: offset,
  shadowOpacity: opacity,
  shadowRadius: radius,
  elevation: radius,
});

export const scene = () => ({
  flex: 1,
  backgroundColor: WHITE,
});

export const SPACING = {
  SIMPLE: 8,
  DOUBLE: 16,
  TRIPLE: 24,
};
export const PADDING_HORIZONTAL = SPACING.DOUBLE;

export const isSmallDevice = WINDOW_WIDTH < 375;

export const screen = {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
};
