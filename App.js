import React from 'react';
import { View, Text, StyleSheets } from 'react-native';
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
// import Header from './src/components/Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import signinReducer from './src/reducers/signinReducer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const store = createStore(signinReducer);

const navigator = createStackNavigator({
    Signin: Signin,
    Signup: Signup,
}, 
{
    initialRouteName: 'Signin',
    defaultNavigationOptions: { 
        title: 'Passage Panther'
    }
}
);

let AppNavigation = createAppContainer(navigator);

class App extends React.Component {
        render() { 
            return (
                <Provider store = { store }>
                    <AppNavigation />
                </Provider>
            )
        }
    }

    export default App;