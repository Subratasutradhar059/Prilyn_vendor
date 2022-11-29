//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import BaseStyle from './BaseStyle';
import {moderateScale, scale, verticalScale} from './Scaling';
import Shadow from './Shadow';
import Theme from './Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

// create a component
const CustomTextInput = ({
  icon,
  rightIcon,
  onPress,
  type = 'input',
  placeholder,
  value,
  onChangeText,
  isErrors,
  isTouched,
  Inlinestyle,
  iconType = 'image',
  placeholderTextColor,
  keyboardType,
  maxLength,
  circle,
  ...props
}) => {
  console.log(rightIcon);
  return (
    <>
      {type === 'dropdown' ? (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.TextInput, {...Inlinestyle}]}>
          {icon ? (
            iconType === 'image' ? (
              <Image
                source={icon}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
            ) : (
              <TouchableOpacity style={[styles.notifiContain, {...circle}]}>
                {icon}
              </TouchableOpacity>
            )
          ) : null}
          <TextInput
            style={{width: '80%', color: '#000'}}
            placeholder={placeholder}
            value={value}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            onChangeText={text => {
              onChangeText(text);
            }}
            editable={false}
            {...props}
          />
          {type === 'dropdown' ? (
            <AntDesign name="right" size={18} />
          ) : (
            <AntDesign name="right" size={18} />
          )}
        </TouchableOpacity>
      ) : (
        <View style={[styles.TextInput, {...Inlinestyle}]}>
          {icon ? (
            iconType === 'image' ? (
              <Image
                source={icon}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
            ) : (
              icon
            )
          ) : null}
          <TextInput
            style={{
              width: rightIcon ? '80%' : '100%',
              color: '#000',
              marginLeft: 10,
            }}
            secureTextEntry={type == 'password' ? true : false}
            placeholder={placeholder}
            value={value}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            onChangeText={text => {
              onChangeText(text);
            }}
            maxLength={maxLength}
            {...props}
          />

          {rightIcon && rightIcon}
        </View>
      )}
      {isErrors && isTouched && (
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            paddingTop: 10,
          }}>
          <Text style={{fontSize: 12, color: 'red'}}>{isErrors}</Text>
        </View>
      )}
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  TextInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: Theme.white,
    height: scale(50),
    paddingHorizontal: moderateScale(5),
    backgroundColor: Theme.white,
    borderRadius: BaseStyle.BorderRadius,
    ...Shadow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(8),
  },
  notifiContain: {
    width: 40,
    height: 40,
    margin: moderateScale(5),
    backgroundColor: Theme.lightRed,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

//make this component available to the app
export default CustomTextInput;
