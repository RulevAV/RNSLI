
import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

const noPhoto = '../../../assets/img/noPhoto.jpeg';

const User = (props) => {
  let img = '../../../assets/img/noPhoto.jpeg'
  props.img ? props.img : noPhoto;
  return <View style={styles.item}>
    <Image source={require(img)}
      style={styles.img}
      resizeMode='contain' />
    <View style={styles.text}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.massage}>{props.massage}</Text>
    </View>
  </View>
}

export default function MainScreen() {

  return (
    <ScrollView style={{ flex: 1 }}>
      <User img={null} title="Заголовок" massage="
      текст"/>
      <User img={null} title="Заголовок" massage="
      текст"/>
      <User img={null} title="Заголовок" massage="
      текст"/>
      <User img={null} title="Заголовок" massage="
      текст"/>
      <User img={null} title="Заголовок" massage="
      текст"/>
      <User img={null} title="Заголовок" massage="
      текст"/>
      <User img={null} title="Заголовок" massage="
      текст"/>
      <User img={null} title="Заголовок" massage="
      текст"/>

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
