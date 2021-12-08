import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import HomeAdmin from '../pages/Admin/Home';
import RegisterCars from '../pages/Admin/RegisterCars';
import UpdateCars from '../pages/Admin/UpdateCars';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FFF'},
    }}>
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="HomeAdmin" component={HomeAdmin} />
    <App.Screen name="UpdateCars" component={UpdateCars} />
    <App.Screen name="RegisterCars" component={RegisterCars} />
  </App.Navigator>
);

export default AppRoutes;
