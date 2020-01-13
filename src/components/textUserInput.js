import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Button } from 'react-native';

const TextUserInput = props => {
    return ( 
        <View style = { styles.viewStyle1 } >
            {console.log("These are the props: ", props)}
            <TextInput style = { styles.textInputStyle1 } ></TextInput>
            <TextInput style = { styles.textInputStyle2 } placeholder = "username or email" value = { props.username } onChangeText = { props.enterUsername }></TextInput>
            <TextInput style = { styles.textInputStyle3 } secureTextEntry = { true } placeholder = "password" value = { props.password } onChangeText = { props.enterPassword }></TextInput>
            <View style = { styles.viewStyle2 } >
            <TouchableOpacity>
                <Text style = { styles.signup }> Don't have an account? Signup! </Text>
            </TouchableOpacity>

            {/* When you press Forgot Password? It changes the state property "forgot password" to true. Through conditional rendering, it shows the modal:  */}
            <TouchableOpacity onPress = { props.forgotPassword } >
                {props.forgotPasswordBoolean? 
                <Modal visible = {props.forgotPasswordBoolean} onRequestClose = {props.forgotPassword}> 
                    <View>
                        <Text> Trouble Logging In? Please Enter Email for a Valdiation Link! </Text>
                        <TextInput style = { styles.textInputStyle1 } placeholder = "Please enter your email"></TextInput>
                        <Button title = "Send" />
                        <Button onPress = {props.forgotPassword} title = "Back To Login" />
                    </View>
                </Modal> : <Text style = { styles.forgotPassword }>Forgot Password?</Text>}
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