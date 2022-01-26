
import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';


export const DataUser = (props) => {
    return <View style={styles.content}>
        <View style={styles.section}>
            <Text style={styles.label}>{props.title}</Text>
            <TextInput style={styles.input} value={props.value} placeholder={props.placeholder} onChangeText={props.onChangeText} />
            <Text style={styles.errorMessages}>{
                props.errors && props.touched ?
                    props.errors : ""

            }</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        marginTop: 5,
        marginLeft: 15,
        marginEnd: 15,
        padding: 15,
        borderColor: "silver",
        borderRadius: 5
    },
    label: {
        color: "#42AAFF",
        paddingLeft: 30,
        fontSize: 20
    },
    section: {
        padding: 5,
        paddingBottom: 15,
        margin: 5,
        borderWidth: 0.5,
        borderRadius: 5
    },
    content: {
        flex: 1,

    },
    errorMessages: {
        marginLeft: 25,
        marginTop: 5,
        color: "red",
    }
});
