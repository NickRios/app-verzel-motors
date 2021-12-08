import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const Auth = createStackNavigator();

const Routes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#07203F'},
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default Routes;
