//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import CustomTextInput from '../../ReusableComponents/CustomTextInput';
import GlobalButton from '../../ReusableComponents/GlobalButton';
import NaviGationHeader from '../../ReusableComponents/NaviGationHeader';
import Theme from '../../ReusableComponents/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
// create a component
const RegisterSellerAccount = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <NaviGationHeader
            title={'Saller Account'}
            onPress={() => {
              navigation.goBack();
            }}
          />

          <View style={styles.inputContainer}>
            <CustomTextInput
              placeholder={'Full Name'}
              placeholderTextColor={Theme.black}
            />
            <CustomTextInput  placeholder={'Full Name'}
              placeholderTextColor={Theme.black} />
            <CustomTextInput  placeholder={'Full Name'}
              placeholderTextColor={Theme.black}/>
            <CustomTextInput  placeholder={'Full Name'}
              placeholderTextColor={Theme.black}/>
            <CustomTextInput  placeholder={'Full Name'}
              placeholderTextColor={Theme.black}/>
            <CustomTextInput  placeholder={'Full Name'}
              placeholderTextColor={Theme.black}/>
            <GlobalButton type={'full'} title={"Save"} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default RegisterSellerAccount;
