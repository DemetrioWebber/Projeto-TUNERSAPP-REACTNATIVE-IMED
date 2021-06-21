import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { Text, Button } from 'react-native-paper';

export default function FAQ(props) {
    const { navigation } = props

    return (
        <ImageBackground source={require('../img/fundomenuinicial.jpg')} style={styles.backImage}>
        <View> 
            <Text style={styles.textostyle}>Como utilizar o app?</Text>
            <Text style={styles.textostyle}>Acesse a página tuners disponíveis para acessar a tabela de tuners, após isso
            selecione o de sua preferencia, cadastre um carro em adicionar remap, coloque seu número e espere alguém entrar em contato!</Text>
            <Text style={styles.textostyle}>Posso cadastrar mais de um remap?</Text>
            <Text style={styles.textostyle}>Com certeza, basta clicar em adicionar remap!</Text>
            <Text style={styles.textostyle}>Posso remover um dos remaps que cadastrei?</Text>
            <Text style={styles.textostyle}>Com certeza, basta clicar em remover remap.</Text>
            <Text style={styles.textostyle}>Onde vejo a localização das oficinas?</Text>
            <Text style={styles.textostyle}>No menu principal clique em onde estão!</Text>
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