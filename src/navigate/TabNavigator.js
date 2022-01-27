import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileContainer from '../Components/Profil/ProfileContainer';
import AuthorizationScreen from '../Components/Authorization/Authorization';
import { useSelector } from "react-redux";
import nacigateMain from "./nacigateMain"
import { Main, Profile, Authorization } from './TabsTitle';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const Auth = useSelector((state => {
    return state.AuthorizationReducer.Auth;
  }));
  return (
    <Tab.Navigator initialRouteName="Main" tabBarOptions={{ showLabel: false }}
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
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',

      }}>
      {Auth ? <Tab.Screen name="Main" component={nacigateMain} options={{
        title: "Главная",
        tabBarIcon: Main,
      }} /> : null}
      {Auth ? <Tab.Screen name="Profile" component={ProfileContainer} options={{
        title: "Профиль",
        tabBarIcon: Profile,
      }} /> : null}

      <Tab.Screen name="Authorization" component={AuthorizationScreen} options={{
        title: "Авторизация",
        tabBarIcon: Authorization,
      }} />
    </Tab.Navigator>
  );
}