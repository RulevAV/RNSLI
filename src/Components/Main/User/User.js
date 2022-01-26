import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


export const User = (props) => {
    let noPhoto = '../../../../assets/img/noPhoto.jpeg';
    console.log(props.patronymic);
    return <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('test', props)} >
        {props.photo
            ? <Image
                style={styles.img}
                resizeMode='contain'
                source={{
                    uri: props.photo
                }}
            />
            : <Image source={require(noPhoto)}
                style={styles.img}
                resizeMode='contain' />
        }

        <View style={styles.text}>
            <Text style={styles.title} >{props.lastName}</Text>
            <Text style={styles.title}>{props.firstName}</Text>
            <Text style={styles.title}>{props.patronymic}</Text>

        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({

    item: {
        margin: 5,
        flexDirection: "row",
        borderWidth: 0.5,
    },
    img: {
        width: 100,
        height: 100,
        //borderWidth: 1,
        //borderColor: "#FFD700",
    },
    text: {
        padding: 10,
        borderLeftWidth: 0.5
    },
    title: {
        fontSize: 16,
        fontFamily: "Montserrat-Light"
    }
});
