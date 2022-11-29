import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import React from 'react';
import { scale } from './Scaling';

export default function Eclipse({
  inlinestyle
}) {
  return <TouchableOpacity style={[styles.circle,{...inlinestyle}]}>
    <Image source={require('../Assets/Images/Eclipse.png')}/>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  circle: {
    // position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    width: scale(90),
    height:scale(90),
    borderRadius:scale(100),
    // top: scale(151),
    backgroundColor: '#FF710A',
  },
});
