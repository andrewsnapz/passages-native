import React from 'react';
import { View, StyleSheet, TextInput, Text, Modal, TouchableOpacity } from 'react-native';

const ForgotPassword = props => {
    return ( 
        <View style = { styles.viewStyle }>
                <Text>
                    ForgotPassword Box
                </Text>
                <TouchableOpacity onPress = {props.visibleFunction}>
                    <Text>
                        go back
                    </Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: { 
    width: 440,
    height: 700,
    backgroundColor: 'red'
    }
})

export default ForgotPassword;