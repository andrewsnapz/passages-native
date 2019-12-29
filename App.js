import React from 'react';
import { View, Text, StyleSheets } from 'react-native';
import Signin from './src/screens/Signin';
import Header from './src/components/header';

class App extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                signinUsername: '',
                password: ''
            }
        }


        render() { 
            return (
            <View>
                <Header/>
                <Signin/>
            </View>
            )
        }
    }

    export default App;