import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const Signup = () => {
    return ( 
        <View>
            <Text>SignUp Screen</Text>
            <TextInput style = { styles.textInputStyle1 } placeholder="fullname"> </TextInput>
            <TextInput style = { styles.textInputStyle1 } placeholder = "email"> </TextInput>
            <TextInput style = { styles.textInputStyle1 } placeholder = "username"> </TextInput>
            <TextInput style = { styles.textInputStyle1 } placeholder = "password"> </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle1: {
        height: 50,
        backgroundColor: '#F0EEEE',
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        borderRadius: 5
    },
});

export default Signup;