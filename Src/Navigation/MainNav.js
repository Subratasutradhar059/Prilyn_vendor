// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
import Otp from '../Auth/Otp/Otp';
import ForgotPassword from '../Auth/ForgotPassWord/ForgotPassword';
import NewPassword from '../Auth/NewPassWord/NewPassword';
import DashBoard from '../MainScreen/DashBoard/DashBoard';
import AddProduct from '../MainScreen/AddProduct/AddProduct';
import Order from '../MainScreen/Order/Order';
import AllProduct from '../MainScreen/AllProduct/AllProduct';
import Profile from '../MainScreen/Profile/Profile';
import RegisterSellerAccount from '../MainScreen/RegisterSellerAccount/RegisterSellerAccount';
import GeneralStatement from '../MainScreen/GeneralStatement/GeneralStatement';
import BankAccount from '../MainScreen/BankAccount/BankAccount';
import BuisnessInfo from '../MainScreen/BuisnessInfo/BuisnessInfo';
import CheckOut from '../MainScreen/CheckOut/CheckOut';
import OrderSuccess from '../MainScreen/OrderSuccess/OrderSuccess';
import OrderDetails from '../MainScreen/OrderDetails/OrderDetails';

const Stack = createNativeStackNavigator();



const MainNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />

      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="AllProduct" component={AllProduct} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RegisterSellerAccount" component={RegisterSellerAccount} />
      <Stack.Screen name="GeneralStatement" component={GeneralStatement} />
      <Stack.Screen name="BankAccount" component={BankAccount} />
      <Stack.Screen name="BuisnessInfo" component={BuisnessInfo} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};
export default MainNav;
