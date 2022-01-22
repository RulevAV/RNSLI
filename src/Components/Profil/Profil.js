
import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const DataUser = (props) => {
  return <View style={styles.content}>
    <View style={styles.section}>
      <Text style={styles.label}>{props.title}</Text>
      <TextInput style={styles.input} value={props.value} placeholder={props.placeholder} onChangeText={props.onChangeText} />
      <Text style={styles.errorMessages}>{
        props.errors && props.touched ?
          props.errors : ""

      }</Text>
    </View>
  </View>
};

const SignupSchema = Yup.object().shape({
  lastName: Yup.string()
    .required('Введите фамилию!'),
  firstName: Yup.string()
    .required('Введите имя!'),
  Patronymic: Yup.string()
    .required('Введите отчество!'),
});

export default function ProfilScreen() {
  const noPhoto = '../../../assets/img/noPhoto.jpeg';
  return (
    <ScrollView style={styles.profile}>
      <Formik initialValues={{ lastName: "", firstName: "", Patronymic: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {(props) => {
          return (
            <View style={styles.content}>
              <Image source={require(noPhoto)}
                style={styles.img}
                resizeMode='contain' />
              <Text style={styles.changeImg}>Изменить фотографию</Text>
              <DataUser
                title="Фамилмя"
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
                value={props.values.Patronymic}
                placeholder="Введите отчечтво"
                onChangeText={props.handleChange('Patronymic')}
                errors={props.errors.Patronymic}
                touched={props.touched.Patronymic} />
              <Button style={styles.buttom} title='Сохранить' onPress={props.handleSubmit} />
            </View>
          )
        }}
      </Formik>
      {/* 
      
      */}
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
    borderWidth: 2,
    borderColor: "#FFD700",
    alignSelf: "center"
  },
  changeImg: {
    alignSelf: "center",
    fontSize: 25,
    margin: 15
  },
  input: {
    borderWidth: 1,
    marginTop: 5,
    marginLeft: 15,
    marginEnd: 15,
    padding: 15,
    borderColor: "silver",
    borderRadius: 5
  },
  label: {
    color: "#42AAFF",
    paddingLeft: 30,
    fontSize: 20
  },
  section: {
    padding: 5,
    paddingBottom: 15,
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 5
  },
  content: {
    flex: 1,
    //backgroundColor: "red",

  },
  errorMessages: {
    marginLeft: 25,
    marginTop: 5,
    color: "red",
  },
});
