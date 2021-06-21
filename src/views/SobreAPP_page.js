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
            <Text style={styles.textostyle}>
                O aplicativo:
            </Text>
            <Text style={styles.textostyle}>
                Como foi arquitetado?
            </Text>
            <Text style={styles.textostyle}>
                Foi feito utilizando React native Expo usando uma Estrutura de pastas com componentes, services e views.
            </Text>
            <Text style={styles.textostyle}>
                Components: Guarda todos os componentes reutilizáveis do app
            </Text>
            <Text style={styles.textostyle}>
                img: Guarda as imagens de fundo do app
            </Text>
            <Text style={styles.textostyle}>
                services: Guarda todas as comunicações com banco, actions e reducers do redux.
            </Text>
            <Text style={styles.textostyle}>
                views: Guarda todas as telas do app e os elementos que contém em cada uma.
            </Text>
            <Text style={styles.textostyle}>
                E no arquivo APP.js utiliza o navigation container para instanciação e orientação das views.
            </Text>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backImage:{
        width: '100%', 
        height: '100%',
    },
    textostyle:{
        fontSize: 20,
        color: 'white',
        marginTop: 10
    }
})