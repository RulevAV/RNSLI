import React from 'react';
import { Text, View, Button, Image, StyleSheet, TextInput } from 'react-native';

import { Formik } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    Login: Yup.string()
        .max(50, 'Максимум 50 символов!')
        .required('Введите логин!'),
    Password: Yup.string()
        .required('Введите пароль!'),
});

const LogOut = () => {
    return <View style={styles.form}>
        <Button title='Выход' />
    </View>
}

const Login = () => {
    const User = '../icon/User.png';
    return (
        <View style={styles.form}>
            <Formik initialValues={{ Login: "", Password: "" }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    // console.log(values);
                }}>
                {(props) => {
                    return (
                        <View style={styles.content}>
                            <Image source={require(User)} style={styles.img} />
                            <TextInput
                                style={styles.input}
                                value={props.values.Login}
                                placeholder='Введите Логин'
                                onChangeText={props.handleChange('Login')} />


                            {props.errors.Login && props.touched.Login
                                ?
                                (<Text style={styles.errorMessages}>{props.errors.Login}</Text>) : null}

                            <TextInput
                                secureTextEntry
                                style={styles.input}
                                value={props.values.Password}
                                placeholder='Введите Пароль'
                                onChangeText={props.handleChange('Password')} />

                            {props.errors.Password && props.touched.Password
                                ?
                                (<Text style={styles.errorMessages}>{props.errors.Password}</Text>) : null}

                            <Button style={styles.buttom} title='Войти' onPress={props.handleSubmit} />
                        </View>
                    )
                }}
            </Formik>
        </View>
    );
}
export default function Form({ addArticle }) {
    const flag = false;
    return (<>
        {flag === true ? <Login />
            : <LogOut />
        }
    </>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    errorMessages: {
        color: "red",
    },
    content: {
    },
    input: {
        width: 200,
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: "silver",
        borderRadius: 5
    },
    buttom: {
        marginTop: 15,
    },
    img: {
        alignSelf: "center"
    }
});
