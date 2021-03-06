import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DataUser } from './DataUser/DataUser';
import { useDispatch, useSelector } from "react-redux";
import ProfilScreen from './Profil';
import { ProfileActionThunkCreator } from '../../redux/ProfileReducer';


export default ProfileContainer = ({ route, navigation }) => {
    const Profile = useSelector((state => {
        return state.ProfileReducer;
    }));
    Profile.MyProfil = true;
    let params = route.params ? route.params : Profile;
    const disoath = useDispatch();
    const SaveProfile = (photo, lastName, firstName, patronymic) => {
        disoath(ProfileActionThunkCreator.ClientPut(photo, lastName, firstName, patronymic));
    }
    return <ProfilScreen Profile={params} SaveProfile={SaveProfile} />
}