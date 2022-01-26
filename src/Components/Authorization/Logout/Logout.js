import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export const Logout = ({ LogoutBtn }) => {
    return <View style={styles.form}>
        <Button onPress={LogoutBtn} title='Выход' />
    </View>
}
const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

});
