import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DataUser } from './DataUser/DataUser';
import { useDispatch, useSelector } from "react-redux";

const SignupSchema = Yup.object().shape({
  lastName: Yup.string()
    .required('Введите фамилию!'),
  firstName: Yup.string()
    .required('Введите имя!'),
  patronymic: Yup.string()
    .required('Введите отчество!'),
});

export default function ProfilScreen({ Profile, SaveProfile }) {
  const noPhoto = '../../../assets/img/noPhoto.jpeg';
  const ComponentImg = !Profile.photo ?
    <Image source={require(noPhoto)}
      style={styles.img}
      resizeMode='contain' /> :
    <Image
      style={styles.img}
      //resizeMode='contain'
      source={{
        uri: Profile.photo
      }} />;
  const selectIMG = () => {
    let body = new FormData();
    body.append('photo', { uri: imagePath, name: 'photo.png', filename: 'imageName.png', type: 'image/png' });
    body.append('Content-Type', 'image/png');

    // fetch(Url, {
    //   method: 'POST', headers: {
    //     "Content-Type": "multipart/form-data",
    //     "otherHeader": "foo",
    //   }, body: body
    // })
    //   .then((res) => checkStatus(res))
    //   .then((res) => res.json())
    //   .then((res) => { console.log("response" + JSON.stringify(res)); })
    //   .catch((e) => console.log(e))
  }
  return (
    <ScrollView style={styles.profile}>
      <Formik initialValues={{ photo: Profile.photo, lastName: Profile.lastName, firstName: Profile.firstName, patronymic: Profile.patronymic }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          SaveProfile(values.photo, values.lastName, values.firstName, values.patronymic);
        }}>
        {(props) => {
          return (
            <View style={styles.content}>

              {ComponentImg}
              <Text style={styles.changeImg} onPress={selectIMG}>Изменить фотографию</Text>

              <View>

              </View>
              <DataUser
                title="Фамиля"
                value={props.values.lastName}
                placeholder="Введите фамилию"
                onChangeText={props.handleChange('lastName')}
                errors={props.errors.lastName}
                touched={props.touched.lastName} />

              <DataUser
                title="Имя"
                value={props.values.firstName}
                placeholder="Введите имя"
                onChangeText={props.handleChange('firstName')}
                errors={props.errors.firstName}
                touched={props.touched.firstName} />

              <DataUser
                title="Отчечтво"
                value={props.values.patronymic}
                placeholder="Введите отчечтво"
                onChangeText={props.handleChange('patronymic')}
                errors={props.errors.patronymic}
                touched={props.touched.patronymic} />
              <Button style={styles.buttom} title='Сохранить' onPress={props.handleSubmit} />
            </View>
          )
        }}
      </Formik>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  img: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    //borderColor: "#FFD700",
    alignSelf: "center"
  },
  changeImg: {
    alignSelf: "center",
    fontSize: 25,
    margin: 15
  }
});
