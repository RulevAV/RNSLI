import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { ProfileActionThunkCreator } from '../redux/ProfileReducer';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const disoath = useDispatch();
  useEffect(() => {
    disoath(ProfileActionThunkCreator.Client);
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={TabNavigator} />
        <Drawer.Screen name="Profil" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}