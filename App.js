import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './Components/Main/Main';
import ProfilScreen from './Components/Profil/Profil';
import AuthorizationScreen from './Components/Authorization/Authorization';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
        <Tab.Screen name="Authorization" component={AuthorizationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}