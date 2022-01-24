// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../Components/Main/Main';
import ProfileContainer from '../Components/Profil/ProfileContainer';



const Stack = createNativeStackNavigator();

function nacigateMain() {
    return (
        <Stack.Navigator initialRouteName="Users">
            <Stack.Screen name="Users" component={MainScreen} options={{ title: "Пользователи", }} />
            <Stack.Screen name="test" component={ProfileContainer} />
        </Stack.Navigator>
    );
}

export default nacigateMain;