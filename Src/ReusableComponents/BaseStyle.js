import { Dimensions, Platform } from 'react-native';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const isIphoneX = () => {
  let d = Dimensions.get('window');
  const { height, width } = d;
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 ||
      width === 812 ||
      height === 896 ||
      width === 896 ||
      width === 896 ||
      height === 926 || // iPhone 12 pro max
      width === 926 ||
      height === 844 || // iPhone 12 & 12 pro
      width === 844)
  );
};

const BaseStyle = {
  BorderRadius :12,
  BorderRadiusSmall:8,
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  // DRAWER
  DRAWER_WIDTH: x * 0.53,
  DRAWER_HEIGHT: y,
  DRAWER_OFFSET: 0.3,
  isIphoneX: isIphoneX(),
};
export default BaseStyle;
