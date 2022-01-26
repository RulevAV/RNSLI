
import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useEvent } from 'react-native-reanimated';
import { useDispatch, useSelector } from "react-redux";
import { User } from './User/User';
import { useEffect } from 'react';
import { MainActionThunkCreator } from '../../redux/MainReducer';
export default function MainScreen({ navigation }) {
  let dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(MainActionThunkCreator.ClientsGet());
    });
    return unsubscribe;
  }, [navigation]);
  const Profiles = useSelector((state => {
    return state.MainReducer.Profiles;
  }));
  const users = Profiles.map((item, index) => {
    return <User key={index} photo={item.photo} lastName={item.lastName} firstName={item.firstName} patronymic={item.patronymic} navigation={navigation} />
  });
  return (
    <ScrollView style={{ flex: 1 }}>
      {users}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});
