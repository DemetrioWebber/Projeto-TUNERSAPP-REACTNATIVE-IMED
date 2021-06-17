import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import * as TunersAction from '../services/actions/tunersAction'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button } from 'react-native-paper';

export default function Tuners(props) {
    const { navigation } = props
    const dispatch = useDispatch()
    const tuners = useSelector(store => store.tuners)

    useLayoutEffect(() => {
        dispatch(TunersAction.getList())
    }, [dispatch])

//Enviar por props o nome do Tuner para que seja pega a collection certa.
    return (
        <ImageBackground source={require('../img/fundomenuinicial.jpg')} style={styles.backImage}>
        <View style={{paddingTop: 50}}>
        <FlatList
                    data={tuners}
                    renderItem={({ item }) =>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Carros Disponiveis", item)}
                            >
                                <View style={styles.botao}>
                                <Text style={{color: "white"}}>
                                    Pedir carros ao Tuner:
                                </Text>
                                <Text style={{color: "white", fontSize: 26}}>
                                    {`${item.nome}`}
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    }
                    keyExtractor={item => item.id}
                />
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backImage:{
        width: '100%', 
        height: '100%',
    },
    botao: {
        marginLeft: 5,
        marginTop: 5,
        height: 80,
        backgroundColor: "#7400FF",
        borderRadius: 70,
        alignItems: "center",
        paddingTop: 20
    }
})