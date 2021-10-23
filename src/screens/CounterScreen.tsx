import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {

    const [counter, setCounter] = useState(10);

    return (
        <View style={ styles.container }>

            <Text style={ styles.title } >
                Contador: { counter }
            </Text>

            <Fab 
                onPress={ () => setCounter( counter + 1 ) }
                title='+1'
            />

            <Fab 
                onPress={ () => setCounter( counter - 1 ) } 
                position='bl'
                title='-1'
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: { 
        textAlign: 'center',
        fontSize: 40,
        top: -15                    
    }
})

export default CounterScreen
