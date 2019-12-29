import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => { 
    return ( 
        <View style = { styles.viewStyle }>
            <Text style = { styles.headerStyle } > Passage Panther </Text>
        </View>
    )
}
    const styles = StyleSheet.create({
        headerStyle: { 
            fontSize: 20
        },
        viewStyle: { 
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            paddingTop: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2},
            shadowOpacity: 0.2,
            elevation: 2,
            position: 'relative'
        }
    })


export default Header;