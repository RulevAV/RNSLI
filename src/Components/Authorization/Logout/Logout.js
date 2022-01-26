import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { ProfileActionThunkCreator } from '../../../redux/ProfileReducer';

export const Logout = ({ LogoutBtn }) => {
    let dispatch = useDispatch();
    let fn = () => {
        dispatch(ProfileActionThunkCreator.Clients());
    }
    return <View style={styles.form}>
        <Button onPress={LogoutBtn} title='Выход' />
        <Button onPress={fn} title='clients' />
    </View>
}
const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

});
