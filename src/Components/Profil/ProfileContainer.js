import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DataUser } from './DataUser/DataUser';
import { useDispatch, useSelector } from "react-redux";
import ProfilScreen from './Profil';
import { ProfileAction } from '../redux/ProfileReducer';
export default ProfileContainer = () => {
    const Profile = useSelector((state => {
        return state.ProfileReducer;
    }));
    const disoath = useDispatch();
    const SaveProfile = (photo, lastName, firstName, Patronymic) => {
        //console.log(photo, lastName, firstName, Patronymic);
        disoath(ProfileAction.Save(photo, lastName, firstName, Patronymic));
    }
    return <ProfilScreen Profile={Profile} SaveProfile={SaveProfile} />
}