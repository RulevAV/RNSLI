
import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { User } from './User/User';

export default function MainScreen({ navigation }) {
  const Profiles = useSelector((state => {
    return state.MainReducer.Profiles;
  }));
  const users = Profiles.map((item, index) => {
    return <User key={index} img={item.img} title={item.title} massage={item.massage} navigation={navigation} />
  });
  return (
    <ScrollView style={{ flex: 1 }}>
      {users}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  text: {
    //justifyContent: "center",
  },
  item: {
    margin: 5,
    flexDirection: "row",
    borderWidth: 0.5,
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold"
  },
  massage: {
    fontSize: 15,
    fontFamily: "Montserrat-Light",
  }
});
