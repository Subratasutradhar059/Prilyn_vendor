//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale } from './Scaling';

// create a component
const Back = ({
    onPress
}) => {
  return <AntDesign style={styles.back} name="arrowleft" size={25} onPress={onPress}/>;
};

// define your styles
const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    bottom: 0,
    top: scale(15),
    left: scale(15),
  },
});

//make this component available to the app
export default Back;
