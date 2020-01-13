import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            <Text> I am in the Signin Screen </Text>
            <TextInput 
            username = { this.props.username }
            password = { this.props.password }
            forgotPassword = { this.props.forgotPassword }
            forgotPasswordBoolean = { this.props.forgotPasswordBoolean }
            enterUsername = { this.props.enterUsername } 
            enterPassword = { this.props.enterPassword }
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);