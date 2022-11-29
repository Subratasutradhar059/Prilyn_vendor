//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import NaviGationHeader from '../../ReusableComponents/NaviGationHeader';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../ReusableComponents/Theme';
import CustomTextInput from '../../ReusableComponents/CustomTextInput';
import GlobalButton from '../../ReusableComponents/GlobalButton';
import * as Yup from 'yup';
import {Formik} from 'formik';
// create a component
const SignUp = ({navigation}) => {
  const [option, setoption] = useState('Buisness');

  const RegisterSchema = Yup.object().shape({
    Country: Yup.string().required('Country Is Required To Continue'),
    PhoneNumber: Yup.string().required('PhoneNumber Is Required To Continue'),
    email: Yup.string()
      .required('email address is required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
    confirmPassword: Yup.string()
      .required('confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    ShopName: Yup.string().required('Please mention your Shopname'),
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <NaviGationHeader
          title={'Sign up to your Account'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.textSubHead}>Select Account Type*</Text>
        <View style={styles.radio}>
          <TouchableOpacity
            style={[
              styles.whiteDot,
              {backgroundColor: option === 'Buisness' ? Theme.primary : null},
            ]}
            onPress={() => {
              setoption('Buisness');
            }}>
            {option === 'Buisness' ? (
              <Feather name="check" size={20} color={'#fff'} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.radioText}>Buisness</Text>
          <TouchableOpacity
            style={[
              styles.whiteDot,
              {backgroundColor: option === 'Private' ? Theme.primary : null},
            ]}
            onPress={() => {
              setoption('Private');
            }}>
            {option === 'Private' ? (
              <Feather name="check" size={20} color={'#fff'} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.radioText}>Private</Text>
        </View>

        {/* InputFields */}
        <Formik
          validationSchema={RegisterSchema}
          initialValues={{
            PhoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
            ShopName: '',
            Country: '',
          }}
          onSubmit={values => {
            console.log(values);
            // if (values) {
            //   navigation.navigate('Otp');
            // } else {
            //   alert('something went wrong');
            //   return;
            // }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View>
              <CustomTextInput
              type='dropdown'
                placeholder={'Country'}
                iconType={'icon'}
                icon={
                  <MaterialCommunityIcons
                    name="map-marker-radius"
                    size={20}
                    color={'#000'}
                  />
                }
                value={values.Country}
                onChangeText={handleChange('Country')}
                onBlur={handleBlur('Country')}
                isErrors={errors.Country}
                isTouched={touched.Country}
              />

              <CustomTextInput
                placeholder={'Phone Number'}
                iconType={'icon'}
                icon={<Ionicons name="call" size={20} color={'#000'} />}
                value={values.PhoneNumber}
                onChangeText={handleChange('PhoneNumber')}
                onBlur={handleBlur('PhoneNumber')}
                isErrors={errors.PhoneNumber}
                isTouched={touched.PhoneNumber}
              />

              <CustomTextInput
                placeholder={'Email Address'}
                iconType={'icon'}
                icon={<Ionicons name="mail" size={20} color={'#000'} />}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                isErrors={errors.email}
                isTouched={touched.email}
              />

              <CustomTextInput
                placeholder={'Password'}
                iconType={'icon'}
                icon={<Fontisto name="locked" size={20} color={'#000'} />}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                isErrors={errors.password}
                isTouched={touched.password}
              />

              <CustomTextInput
                placeholder={'Confirm Password'}
                iconType={'icon'}
                icon={<Fontisto name="locked" size={20} color={'#000'} />}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                isErrors={errors.confirmPassword}
                isTouched={touched.confirmPassword}
              />

              <CustomTextInput
                placeholder={'Shop Name'}
                iconType={'icon'}
                icon={<Feather name="shopping-bag" size={20} color={'#000'} />}
                value={values.ShopName}
                onChangeText={handleChange('ShopName')}
                onBlur={handleBlur('ShopName')}
                isErrors={errors.ShopName}
                isTouched={touched.ShopName}
              />
              <GlobalButton
                inlineStyle={{marginTop: 20}}
                title={'Continue'}
                type={'full'}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>

        <Text style={styles.textVeryfy}>
          We will send otp for verification.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default SignUp;
