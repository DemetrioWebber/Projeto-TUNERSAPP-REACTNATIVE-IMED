import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { Text, Button } from 'react-native-paper';

export default function Menu(props) {
    const { navigation } = props
//Adicionar função de redirecionamento para página de Tuners,
//Adicionar função de redirecionamento para página de Sobre.
    return (
        <ImageBackground source={require('../img/fundomenuinicial.jpg')} style={styles.backImage}>
        <View style={{marginTop: 50}}>
            <Button style={styles.botaoRedirect}
                mode="contained" 
                onPress={() => navigation.navigate('Tuners')}> 
                Tuners Disponíveis
            </Button>
            <Button style={styles.botaoRedirect}
                mode="contained" 
                onPress={() => navigation.navigate('Mapa')}> 
                Onde estão?
            </Button>
            <Button style={styles.botaoRedirect}
                mode="contained" 
                onPress={() => navigation.navigate('FAQ')}> 
                Perguntas e Respostas
            </Button>
            <Button style={styles.botaoRedirect}
                mode="contained" 
                onPress={() => navigation.navigate('Sobre o Aplicativo')}> 
                Sobre o aplicativo
            </Button>
            <Button style={styles.botaoRedirect}
                mode="contained" 
                onPress={() => navigation.replace('Login')}> 
                Fazer Logout 
            </Button>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    botaoRedirect: { 
        marginTop: 10, 
        width: 300, 
        marginLeft: 50
    },
    backImage:{
        width: '100%', 
        height: '100%',
    },
})
