import {Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');

export const getStyles = (type: string) => {
  switch (type) {
    case 'success': {
      return {
        backgroundColor: '#def1d7',
        titleColor: '#1f8722',
        descriptionColor: '#1fa722',
      };
    }
    case 'warning': {
      return {
        backgroundColor: '#fef7ec',
        titleColor: '#f08135',
        descriptionColor: '#f08135',
      };
    }
    case 'error': {
      return {
        backgroundColor: '#fae1db',
        titleColor: '#d9100a',
        descriptionColor: '#d9100a',
      };
    }
    default:
      return {
        backgroundColor: 'white',
        titleColor: 'black',
        descriptionColor: 'grey',
      };
  }
};

export const isIphoneXorAbove = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (height === 812 ||
      width === 812 ||
      height === 896 ||
      width === 896 ||
      width === 390 ||
      height === 844 ||
      width === 390 ||
      height === 852 ||
      width === 428 ||
      height === 926 ||
      width === 428 ||
      height === 932)
  );
};

export const textScale = (fontSize: number, standardScreenHeight = 680) => {
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneXorAbove() || Platform.OS === 'android'
      ? standardLength - Number(offset)
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};
