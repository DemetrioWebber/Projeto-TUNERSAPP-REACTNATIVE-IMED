import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper';

export default function Input(props) {

    return (
        <View style={styles.caixaTexto}>
            <TextInput
                label={props.label}
                secureTextEntry={props.seguro}
                value={props.value}
                onChangeText={value => props.name ? props.setValue({ [props.name]: value }) : props.setValue(value)}
                keyboardType={props.keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    caixaTexto: {
        padding: 5,
        marginTop: 5,
        width: "80%",
        paddingLeft: 10,
    }
})
