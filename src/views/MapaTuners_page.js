import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Dimensions } from 'react-native'
import * as Location from 'expo-location'
import { useSelector } from 'react-redux'

export default function Mapa() {


    const tuners = useSelector(store => store.tuners) // array []
    const [myPosition, setMyPosition] = useState(null)
    const [pontoInicial, setPontoInicial] = useState({
        latitude: -28.2130702,
        longitude: -51.5447743,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015
    })


    useLayoutEffect(() => {
        getMyPosition()
    }, [])

    const getMyPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert("Permissão de acesso a localização negada!")
        } else {
            try {
                const minhaLocalizacao = await Location.getCurrentPositionAsync()
                setMyPosition(minhaLocalizacao.coords)
                let novoPontoInicial = Object.assign({}, pontoInicial, minhaLocalizacao.coords)
                setPontoInicial(novoPontoInicial)

            } catch (error) {
                Alert.alert("Erro ao acessar as coordenadas do GPS!")
            }
        }

    }

    return (
        <View>
            <MapView
                style={styles.mapStyle}
                region={pontoInicial}
            >
                {myPosition ?
                    <Marker
                        coordinate={{
                            latitude: myPosition.latitude,
                            longitude: myPosition.longitude
                        }}
                        title="Onde Estou!"
                        description=""
                    >
                    </Marker>
                    : null}

                {tuners.map(item =>
                    <Marker
                        key={item.id}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude
                        }}
                        title={item.nome}
                        description={item.localizacao}
                    >
                        <Text style={{ backgroundColor: "#40019B", color: "white"}}>{item.nome}</Text>
                    </Marker>)}

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

})
