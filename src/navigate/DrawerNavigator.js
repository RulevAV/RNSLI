import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { ProfileActionThunkCreator } from '../redux/ProfileReducer';
import { Main, Profile, Authorization } from './TabsTitle';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const disoath = useDispatch();
  useEffect(() => {
    disoath(ProfileActionThunkCreator.ClientGet());
  }, []);
  const Auth = useSelector((state => {
    return state.AuthorizationReducer.Auth;
  }));
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        {Auth ?
          <Drawer.Screen name="MainDriver" component={TabNavigator} options={{
            drawerIcon: Main,
            title: ''
          }} /> : null}
        <Drawer.Screen name="AuthorizationDriver" component={TabNavigator} options={{
          drawerIcon: Authorization,
          title: ''
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}