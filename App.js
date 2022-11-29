import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './Src/Navigation/AuthNav';
import MainNav from './Src/Navigation/MainNav';

// create a component
const MyComponent = () => {
  return (
    <NavigationContainer>
      {/* <AuthNav/> */}
      <MainNav/>
    </NavigationContainer>
  );
};

export default MyComponent;
