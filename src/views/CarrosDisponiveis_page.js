import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
import * as CarrosAction from '../services/actions/carrosAction'
import * as CarroAction from '../services/actions/carroAction'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button } from 'react-native-paper';

export default function Carros_Disponiveis(props) {
    const { navigation } = props
    const dispatch = useDispatch()
    const carros = useSelector(store => store.carros)


    const deletar = (id) => {
        dispatch(CarroAction.remove(id))
    }

    
    useLayoutEffect(() => {
        dispatch(CarrosAction.getList())
    }, [dispatch])

//Enviar por props o nome do Tuner para que seja pega a collection certa.
    return (
        <ImageBackground source={require('../img/fundomenuinicial.jpg')} style={styles.backImage}>
        <View style={{paddingTop: 10}}>
        <Button style={styles.botaoRedirect}
            mode="contained" 
            onPress={() => navigation.navigate('CRUD Carros')}
            color="#2190FF" > 
            Adicionar Remap
        </Button>
        <FlatList
                    data={carros}
                    renderItem={({ item }) =>
                        <View style={{paddingTop: 10}}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("CRUD Carros", item)}
                            >
                                <View style={styles.botao}>
                                <Text style={{color: "white"}}>
                                    Carro com remap preparado:
                                </Text>
                                <Text style={{color: "white", fontSize: 21}}>
                                    {`Modelo: ${item.nome} ${item.motor}, para ${item.potencia}cv`}
                                </Text>
                                </View>
                                <Button style={styles.botaoRedirect}
                                    mode="contained" 
                                    onPress={() => deletar(item.id)}
                                    color="#40019B" > 
                                    remover remap
                                </Button>
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
        paddingTop: 13
    },
    botaoRedirect: { 
        marginTop: 10, 
        width: 300, 
        marginLeft: 50
    },
})