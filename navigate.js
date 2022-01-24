import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/Components/Main/Main';
import ProfileContainer from './src/Components/Profil/ProfileContainer';
import AuthorizationScreen from './src/Components/Authorization/Authorization';
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export default function Navigate() {
  const Auth = useSelector((state => {
    return state.AuthorizationReducer.Auth;
  }));
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
        {Auth ? <Tab.Screen name="Main" component={MainScreen} options={{ title: "Главная", }} /> : null}
        {Auth ? <Tab.Screen name="Profil" component={ProfileContainer} options={{ title: "Профиль" }} /> : null}

        <Tab.Screen name="Authorization" component={AuthorizationScreen} options={{ title: "Авторизация" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}