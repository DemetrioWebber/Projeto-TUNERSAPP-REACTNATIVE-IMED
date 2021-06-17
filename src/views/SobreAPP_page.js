import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { Text, Button } from 'react-native-paper';

export default function Sobre(props) {
    const { navigation } = props
//Colocar aqui, como o app foi feito Expo ou CLI e por que?
//Colocar também a arquitetura do software, informar estrutura de pastas e a responsabilidade de cada uma.
    return (
        <ImageBackground source={require('../img/fundomenuinicial.jpg')} style={styles.backImage}>
        <View> 
            <Text style={{color: "white"}}>Pagina sobre o aplicativo</Text>
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