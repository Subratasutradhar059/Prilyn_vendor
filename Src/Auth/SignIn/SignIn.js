//import liraries
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../ReusableComponents/CustomTextInput';
import Eclipse from '../../ReusableComponents/Eclipse';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NaviGationHeader from '../../ReusableComponents/NaviGationHeader';
import styles from './styles';
import GlobalButton from '../../ReusableComponents/GlobalButton';

// create a component
const SignIn = ({navigation}) => {
  const [number, setNumber] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <Eclipse inlinestyle={styles.Circle} />
      <Text style={styles.textHead}>Welcome</Text>
      <Text style={styles.textSubHead}>Sign in with Phone Number</Text>
      <CustomTextInput
        iconType="icon"
        icon={<Ionicons name="call" size={25}/>}
        placeholder={'Phone Number'}
        Inlinestyle={styles.inlineTextInput}
        keyboardType={'number-pad'}
        onChangeText={(num)=>{
          setNumber(num)
        }}
        maxLength={10}
      />
      <View style={styles.Buttoncontainer}>
        <GlobalButton
          title={'Sign Up'}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <GlobalButton
          title={'Sign In'}
          titleStyle={{color:'#fff'}}
          inlineStyle={styles.SignIn}
          onPress={() => {
            navigation.navigate('Otp');
          }}
        />
      </View>
      <Text style={styles.textVeryfy}>We will send otp for verification.</Text>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default SignIn;
