import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import TextInput from '../components/TextUserInput';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => ({
    enterUsername: (text) => {
        dispatch(actions.enterUsername(text));
    },

    enterPassword: (text) => { 
        dispatch(actions.enterPassword(text));
    },

    forgotPassword: () => { 
        dispatch(actions.forgotPassword());
    },
});

const mapStateToProps = state => ({
    username: state.signin.username,
    password: state.signin.password,
    forgotPasswordBoolean: state.signin.forgotPassword,
})

class Signin extends React.Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return ( 
        <View>
            <TextInput 
            username = { this.props.username }
            password = { this.props.password }
            forgotPassword = { this.props.forgotPassword }
            forgotPasswordBoolean = { this.props.forgotPasswordBoolean }
            enterUsername = { this.props.enterUsername } 
            enterPassword = { this.props.enterPassword }
            />

            <View style = { styles.viewStyle2 } >
            <TouchableOpacity onPress = { () => this.props.navigation.navigate('Signup') }>
                <Text style = { styles.signup }> Don't have an account? Signup! </Text>
            </TouchableOpacity>

            {/* When you press Forgot Password? It changes the state property "forgot password" to true. Through conditional rendering, it shows the modal:  */}
            <TouchableOpacity onPress = { this.props.forgotPassword } >
                {this.props.forgotPasswordBoolean? 
                <Modal visible = { this.props.forgotPasswordBoolean } onRequestClose = { this.props.forgotPassword } transparent = { true }> 
                    <View>
                        <Text> Trouble Logging In? Please Enter Email for a Valdiation Link! </Text>
                        <TextInput style = { styles.textInputStyle1 } placeholder = "Please enter your email"></TextInput>
                        <Button title = "Send" />
                        <Button onPress = { this.props.forgotPassword } title = "Back To Login" />
                    </View>
                </Modal> : <Text style = { styles.forgotPassword }>Forgot Password?</Text>}
            </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);