import React from 'react';
import { Text, View, Button, Image, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Login } from './Login/Login';
import { Logout } from './Logout/Logout';
import { AuthorizationAction } from '../redux/AuthorizationReducer';


export default function Authorization({ addArticle }) {
    const Auth = useSelector((state => {
        return state.AuthorizationReducer.Auth;
    }));
    const disoath = useDispatch();
    const LogoutBtn = () => {
        disoath(AuthorizationAction.Logout());
    }
    const LoginBtn = (Login, Password) => {
        console.log(Login, Password);
        disoath(AuthorizationAction.Login());
    }
    return (<>
        {!Auth ? <Login LoginBtn={LoginBtn} />
            : <Logout LogoutBtn={LogoutBtn} />
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
