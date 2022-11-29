import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Theme from './Theme';
import BaseStyle from './BaseStyle';
import {moderateScale, scale, verticalScale} from './Scaling';
import Fonts from './CustomeText';

// create a component
const GlobalButton = ({title, onPress, inlineStyle, type ,titleStyle}) => {
  return (
    <>
      {type && type === 'full' ? (
        <TouchableOpacity style={[styles.continueButtonStyle,{...inlineStyle}]} onPress={onPress}>
          <Text style={styles.texts}>{title}</Text>
        </TouchableOpacity>
      ) : (
          <TouchableOpacity style={[styles.half,{...inlineStyle}]} onPress={onPress}>
            <Text style={[styles.textHalf,{...titleStyle}]}>{title}</Text>
          </TouchableOpacity>
      )}
    </>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    width: BaseStyle.DEVICE_WIDTH ,
  },
  continueButtonStyle: {
    padding: moderateScale(15),
    backgroundColor: Theme.secondary,
    minWidth:  '100%' ,
    borderRadius: BaseStyle.BorderRadius,
  },
  texts: {
    textAlign: 'center',
    ...Fonts.blackColor18Bold,
    color: Fonts.colors.White,
  },
  textHalf: {
    textAlign: 'center',
    ...Fonts.blackColor18Bold,
    color: Theme.secondary,
  },
  half: {
    padding: moderateScale(15),
    borderWidth:1,
    borderColor: Theme.secondary,
    minWidth: BaseStyle.DEVICE_WIDTH * 0.4,
    height: scale(50),
    borderRadius:BaseStyle.BorderRadius,
  },
});
