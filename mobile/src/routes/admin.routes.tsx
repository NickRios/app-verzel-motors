import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeAdmin from '../pages/Admin/Home';
import RegisterCars from '../pages/Admin/RegisterCars';
import UpdateCars from '../pages/Admin/UpdateCars';
import SelectedCarEdit from '../pages/Admin/UpdateCars/SelectedCarEdit';

const Admin = createStackNavigator();

const AdminRoutes: React.FC = () => (
  <Admin.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FFF'},
    }}>
    <Admin.Screen name="HomeAdmin" component={HomeAdmin} />
    <Admin.Screen name="RegisterCars" component={RegisterCars} />
    <Admin.Screen name="UpdateCars" component={UpdateCars} />
    <Admin.Screen name="SelectedCarEdit" component={SelectedCarEdit} />
  </Admin.Navigator>
);

export default AdminRoutes;
