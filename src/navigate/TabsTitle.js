import * as React from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main = (props) => {
    let navigation = useNavigation();
    return <TouchableOpacity onPress={() => navigation.navigate('MainDriver', { screen: 'Main' })}>
        <Text style={props}>Главная</Text>
    </TouchableOpacity>
}
const Profile = (props) => {
    const navigation = useNavigation();
    return <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={props}>Профиль</Text>
    </TouchableOpacity>
}
const Authorization = (props) => {
    const navigation = useNavigation();//Authorization
    return <TouchableOpacity onPress={() => navigation.navigate('AuthorizationDriver', { screen: 'Authorization' })}>
        <Text style={props}>Авторизация</Text>
    </TouchableOpacity>
}


export { Main, Profile, Authorization };