import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import PageOne from '../pages/PageOne'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ResetPassword from '../pages/ResetPassword'


const Auth = createStackNavigator();

const Routes: React.FC = () => (
  <Auth.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFF'},
    }}
  >
    <Auth.Screen name="PageOne" component={PageOne} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="ResetPassword" component={ResetPassword} />

  </Auth.Navigator>

);

export default Routes
