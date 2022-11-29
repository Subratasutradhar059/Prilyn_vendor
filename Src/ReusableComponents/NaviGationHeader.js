//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BaseStyle from './BaseStyle';
import { scale } from './Scaling';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo  from 'react-native-vector-icons/Entypo'
import Fonts from './CustomeText';

// create a component
const NaviGationHeader = ({
    title,
    onPress,

}) => {
    return (
        <View style={styles.container}>
            <AntDesign onPress={onPress} name='arrowleft' size={25}/>
            <Text style={styles.texts} >{title}</Text>
            <Entypo onPress={onPress} name='dots-three-vertical' size={25}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'center'
    },
    texts:{
        ...Fonts.grayColor20Bold
    }
});

//make this component available to the app
export default NaviGationHeader;
