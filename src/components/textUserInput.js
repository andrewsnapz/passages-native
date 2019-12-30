import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const TextUserInput = props => {
    return ( 
        <View style = { styles.viewStyle1 } >
            {console.log("these are the props:", props)}
            <TextInput style = { styles.textInputStyle1 } ></TextInput>
            <TextInput style = { styles.textInputStyle2 } placeholder = "username or email" value = { props.username } onChangeText = { props.enterUsername }></TextInput>
            <TextInput style = { styles.textInputStyle3 } placeholder = "password" value = { props.password } onChangeText = { props.enterPassword }></TextInput>
            <View style = { styles.viewStyle2 } >
            <TouchableOpacity>
                <Text style = { styles.signup }>Don't have an account? Signup! </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style = { styles.forgotPassword }>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
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
    textInputStyle2: {
        height: 50,
        backgroundColor: '#F0EEEE',
        borderWidth: 1,
        margin: 15,
        borderRadius: 5
    },
    textInputStyle3: {
        height: 50,
        backgroundColor: '#F0EEEE',
        borderWidth: 1,
        margin: 15,
        borderRadius: 5
    },
    viewStyle1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "space-between",
        width: 480,
        height: 750,
        borderWidth: 1,
        borderColor: "black",
    },
    viewStyle2: { 
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    signup: { 
        alignSelf: "flex-start"
    },
    forgotPassword: { 
        alignSelf: "flex-end"
    }
})

export default TextUserInput