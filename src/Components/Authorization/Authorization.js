import React from 'react';
import { Text, View, Button, Image, StyleSheet, TextInput } from 'react-native';

import { Formik } from "formik";
import * as Yup from 'yup';

const AuthoInput = (props) => {
    let inputProps = {
        value: props.values,
        placeholder: props.placeholder,
        onChangeText: props.onChangeText
    };
    if (props.secureTextEntry)
        inputProps.secureTextEntry = true;
    return <View>
        <TextInput
            {...inputProps}
            style={styles.input}

        />
        {props.errors && props.touched ?
            <Text style={styles.errorMessages}>{
                props.errors
            }</Text> : null}

    </View>
}


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
    const User = '../../../assets/img/User.png';
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
                            <AuthoInput
                                value={props.values.Login}
                                placeholder='Введите Логин'
                                onChangeText={props.handleChange('Login')}
                                errors={props.errors.Login}
                                touched={props.touched.Login}
                            />
                            <AuthoInput
                                secureTextEntry
                                value={props.values.Password}
                                placeholder='Введите Пароль'
                                onChangeText={props.handleChange('Password')}
                                errors={props.errors.Password}
                                touched={props.touched.Password}
                            />




                            <Button style={styles.buttom} title='Войти' onPress={props.handleSubmit} />
                        </View>
                    )
                }}
            </Formik>
        </View>
    );
}
export default function Form({ addArticle }) {
    const flag = true;
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
        marginTop: 5,
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
