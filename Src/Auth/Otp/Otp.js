//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Eclipse from '../../ReusableComponents/Eclipse';
import Back from '../../ReusableComponents/Back';
import GlobalButton from '../../ReusableComponents/GlobalButton';
import SmoothPinCodeInput from '../../ReusableComponents/smoothPinCode';
import Theme from '../../ReusableComponents/Theme';
// create a component
const Otp = ({navigation}) => {
  const [time, setTime] = useState(30);
  const [otp, setOtp] = useState('');
  const timerRef = React.useRef(time);
  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Eclipse />

      <Text style={styles.textSubHead}>
        Please enter the 4-digit code sent {'\n'}
        to your mobile number
      </Text>

      <SmoothPinCodeInput
        placeholder=""
        editable={true}
        autoFocus={true}
        cellStyle={{
          borderRadius: 5,
          borderWidth: 2,
          borderColor: '#fff',
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        cellStyleFocused={{
          borderColor: Theme.primary,
        }}
        cellSpacing={10}
        codeLength={4}
        value={otp}
        onTextChange={(txt)=>setOtp(txt)}
        textStyle={{color: Theme.gray, fontSize: 24}}
      />
      <Text style={styles.textVeryfy}>Didn’t receive the otp code! </Text>

      {time == 0 ? (
        <TouchableOpacity style={styles.wrapper} onPress={() => {}}>
          <Text style={styles.timer}>Resend</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.textSubHead}>Resend Otp in {time}</Text>
      )}

      <GlobalButton
        title={'Continue'}
        type={'full'}
        onPress={() => {
          navigation.navigate('AddProduct');
        }}
      />
    </SafeAreaView>
  );
};

//make this component available to the app
export default Otp;
