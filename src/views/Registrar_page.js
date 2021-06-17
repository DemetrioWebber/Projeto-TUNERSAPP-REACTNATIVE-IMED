import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground, Image } from 'react-native'
import Input from '../components/Input'
import * as LoginAction from '../services/actions/loginAction'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button } from 'react-native-paper';

export default function Registro(props) {
    const { navigation } = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState('')

    const cadastro = async () => {
        try {
            await dispatch(LoginAction.saveNewUsers(email, password))
            navigation.replace("Menu Inicial")
        } catch (error) {
            setMsg(error)
        }
    }


    return (
        <ImageBackground source={require('../img/registerBackground.jpg')} style={styles.backImage}>
        <View style={styles.container}>
                <Image
                    style={{width: "80%", height: "40%"}}
                    source={require(
                        "../img/tuneMyCar.png"
                    )}
                />
            <Text style={styles.registroText}>Informe os dados para Registro:</Text>
            <Input
                label="E-mail"
                value={email}
                setValue={setEmail}

            />
            <Input
                label="Senha"
                seguro={true}
                value={password}
                setValue={setPassword}
                keyboardType="numeric"
            />
            <View style={styles.caixaBotao}>
                <Button 
                    mode="contained" 
                    onPress={cadastro}
                    color='#585858'
                    > 
                    Registrar-se 
                </Button>
            </View>
            <View>
                <Text style={{ color: "red", margin: 10 }}>{msg}</Text>
            </View>

        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: "20%"
    },
    caixaBotao: {
        marginTop: 20,
        width: "80%"
    },
    backImage:{
        width: '100%', 
        height: '100%',
    },
    registroText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20
    },
})
