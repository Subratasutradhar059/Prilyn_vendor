//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Back from '../../ReusableComponents/Back';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../../ReusableComponents/Theme';
import CustomTextInput from '../../ReusableComponents/CustomTextInput';
import Fonts from '../../ReusableComponents/CustomeText';

// create a component
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.textSubHead}>Profile</Text>

      {/* Profile */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/Images/man.png')}
            style={styles.img}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.textP}>Saurav CHhetri</Text>
            <Text>DAHALMTV</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.notifiContain}>
            <Feather name="bell" size={25} color={Theme.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notifiContain}>
            <MaterialCommunityIcons
              name="account-edit"
              size={30}
              color={Theme.primary}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Catogery */}

      <CustomTextInput
        type="dropdown"
        iconType="icon"
        onPress={()=>{navigation.navigate('RegisterSellerAccount')}}
        circle={{backgroundColor:'#FFE8CE'}}
        icon={<Feather name="bell" size={25} color={Theme.primary} />}
        placeholderTextColor={Theme.black}
        placeholder={'Seller Account'}
      />
      <CustomTextInput
        type="dropdown"
        iconType="icon"
        circle={{backgroundColor:"#E5FDF0"}}
        icon={<Feather name="bell" size={25} color={Theme.primary} />}
        placeholderTextColor={Theme.black}
        placeholder={'General Statement'}
      />
      <CustomTextInput
        type="dropdown"
        iconType="icon"
        circle={{backgroundColor:'#FDE9CE'}}
        icon={<Feather name="bell" size={25} color={Theme.primary} />}
        placeholderTextColor={Theme.black}
        placeholder={'Notifications'}
      />
      <CustomTextInput
        type="dropdown"
        iconType="icon"
        circle={{backgroundColor:'#E6EDFF'}}
        icon={<Feather name="bell" size={25} color={Theme.primary} />}
        placeholderTextColor={Theme.black}
        placeholder={'Language'}
      />
      <CustomTextInput
        type="dropdown"
        iconType="icon"
        circle={{backgroundColor:'#FFECEF'}}
        icon={<Feather name="bell" size={25} color={Theme.primary} />}
        placeholderTextColor={Theme.black}
        placeholder={'Seller Help Center'}
      />
      <CustomTextInput
        type="dropdown"
        iconType="icon"
        circle={{backgroundColor:'#FFE8CE'}}
        icon={<Feather name="bell" size={25} color={Theme.primary} />}
        placeholderTextColor={Theme.black}
        placeholder={'About'}
      />
      <CustomTextInput
        type="dropdown"
        iconType="icon"
        circle={{backgroundColor:"#E5FDF0"}}
        icon={<Feather name="bell" size={25} color={Theme.primary} />}
        placeholderTextColor={Theme.black}
        placeholder={'Log Out'}
        onPress={()=>{navigation.navigate('AuthNav')}}
      />
    </SafeAreaView>
  );
};

//make this component available to the app
export default Profile;
