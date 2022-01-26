import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileContainer from '../Components/Profil/ProfileContainer';
import AuthorizationScreen from '../Components/Authorization/Authorization';
import { useSelector } from "react-redux";
import nacigateMain from "./nacigateMain"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const Auth = useSelector((state => {
    return state.AuthorizationReducer.Auth;
  }));
  return (
    <Tab.Navigator initialRouteName="Main"
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
      {Auth ? <Tab.Screen name="Main" component={nacigateMain} options={{ title: "Главная", }} /> : null}
      {Auth ? <Tab.Screen name="Profil" component={ProfileContainer} options={{ title: "Профиль" }} /> : null}

      <Tab.Screen name="Authorization" component={AuthorizationScreen} options={{ title: "Авторизация" }} />
    </Tab.Navigator>
  );
}