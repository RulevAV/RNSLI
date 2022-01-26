import React from 'react';
import { Text, View, Button, Image, StyleSheet, TextInput } from 'react-native';
import { Formik } from "formik";
import * as Yup from 'yup';

const AuthoInput = (props) => {

    return <View>
        <TextInput
            autoCapitalize="none"
            value={props.values}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            style={styles.input}
            secureTextEntry={!!props.secureTextEntry}
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

export const Login = ({ LoginBtn }) => {
    const User = '../../../../assets/img/User.png';
    return (
        <View style={styles.form}>
            <Formik initialValues={{ Login: "", Password: "" }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    LoginBtn(values.Login, values.Password);
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
