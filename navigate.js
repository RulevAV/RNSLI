import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/Components/Main/Main'
import ProfilScreen from './src/Components/Profil/Profil';
import AuthorizationScreen from './src/Components/Authorization/Authorization';

const Tab = createBottomTabNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#42AAFF",

          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: "Pacifico-Regular",
            fontSize: 25
          },
          headerTintColor: '#fff',

        }}>
        <Tab.Screen name="Main" component={MainScreen} options={
          {
            title: "Главная",


          }} />
        <Tab.Screen name="Profil" component={ProfilScreen} options={
          {
            title: "Профиль",


          }} />
        <Tab.Screen name="Authorization" component={AuthorizationScreen} options={
          {
            title: "Авторизация",

          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}