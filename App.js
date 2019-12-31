import React from 'react';
import { View, Text, StyleSheets } from 'react-native';
import Signin from './src/screens/Signin';
import Header from './src/components/Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import signinReducer from './src/reducers/signinReducer'

const store = createStore(signinReducer);

class App extends React.Component {
        render() { 
            return (
            <View>
                <Provider store = { store }>
                    <Header/>
                    <Signin/>
                </Provider>
            </View>
            )
        }
    }

    export default App;