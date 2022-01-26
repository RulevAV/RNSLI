import * as React from 'react';
import { useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ProfileInput } from './ProfileInput/ProfileInput';
import { useDispatch, useSelector } from "react-redux";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const SignupSchema = Yup.object().shape({
  lastName: Yup.string()
    .required('Введите фамилию!'),
  firstName: Yup.string()
    .required('Введите имя!'),
  patronymic: Yup.string()
    .required('Введите отчество!'),
});

export default function ProfilScreen({ Profile, SaveProfile }) {
  const [imageUri, setImageUri] = useState(Profile.photo);
  const noPhoto = '../../../assets/img/noPhoto.jpeg';

  PhotoFromGallery = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includebase64: true,
    };

    launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        //  console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setImageUri(response.assets[0].uri);
      }
    });

  }
  const editable = !!Profile.MyProfil;
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

              {!imageUri ?
                <Image source={require(noPhoto)}
                  style={styles.img}
                  resizeMode='contain' /> :
                <Image
                  style={styles.img}
                  //resizeMode='contain'
                  source={{
                    uri: imageUri
                  }} />}

              {editable ? <Text style={styles.changeImg} onPress={PhotoFromGallery}>Изменить фотографию</Text>
                : null}

              <ProfileInput
                editable={editable}
                title="Фамиля"
                value={props.values.lastName}
                placeholder="Введите фамилию"
                onChangeText={props.handleChange('lastName')}
                errors={props.errors.lastName}
                touched={props.touched.lastName} />

              <ProfileInput
                editable={editable}
                title="Имя"
                value={props.values.firstName}
                placeholder="Введите имя"
                onChangeText={props.handleChange('firstName')}
                errors={props.errors.firstName}
                touched={props.touched.firstName} />

              <ProfileInput
                editable={editable}
                title="Отчечтво"
                value={props.values.patronymic}
                placeholder="Введите отчечтво"
                onChangeText={props.handleChange('patronymic')}
                errors={props.errors.patronymic}
                touched={props.touched.patronymic} />
              {editable ? <Button style={styles.buttom} title='Сохранить' onPress={props.handleSubmit} /> : null}
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
    alignSelf: "center"
  },
  changeImg: {
    alignSelf: "center",
    fontSize: 25,
    margin: 15
  }
});
