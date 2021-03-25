import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Dashboard from '../pages/Dashboard'
import ChooseDoctorAppointments from '../pages/ChooseDoctorAppointments'
import ChooseHospitalAppointments from '../pages/ChooseHospitalAppointments'
import ChooseDateAppointments from '../pages/ChooseDateAppointments'
import AppoimentsCreated from '../pages/AppoimentsCreated'
import MedicalDocuments from '../pages/MedicalDocuments'
import AppointmentsList from '../pages/AppointmentsList'

const App = createStackNavigator();

const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator

      tabBarOptions = {{
        style: {
          backgroundColor:'#C4C4C4',
        },
        activeTintColor: '#000',
        inactiveTintColor: '#000',
        showLabel: false
      }


      }>
        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={35} />
          ),
        }} name="Perfil" component={Dashboard} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={35} />
          ),
        }} name="Home" component={Dashboard} />

        <Tab.Screen options={{
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={35} />
          ),
        }} name="Notificação" component={Dashboard} />
      </Tab.Navigator>
    );
  }


const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFF'},
    }}
  >
    <App.Screen name="Dashboard" component={MyTabs} />
    <App.Screen name="ChooseDoctorAppointments" component={ChooseDoctorAppointments} />
    <App.Screen name="ChooseHospitalAppointments" component={ChooseHospitalAppointments} />
    <App.Screen name="ChooseDateAppointments" component={ChooseDateAppointments} />
    <App.Screen name="AppoimentsCreated" component={AppoimentsCreated} />
    <App.Screen name="MedicalDocuments" component={MedicalDocuments} />
    <App.Screen name="AppointmentsList" component={AppointmentsList} />

  </App.Navigator>

);

export default AppRoutes
