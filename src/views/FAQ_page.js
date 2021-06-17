import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { Text, Button } from 'react-native-paper';

export default function FAQ(props) {
    const { navigation } = props

    return (
        <ImageBackground source={require('../img/fundomenuinicial.jpg')} style={styles.backImage}>
        <View> 
            <Text style={{color: "white"}}>Pagina FAQ perguntas e respostas sobre</Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backImage:{
        width: '100%', 
        height: '100%',
    },
})