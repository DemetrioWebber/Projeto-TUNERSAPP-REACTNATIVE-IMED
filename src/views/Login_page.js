import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, CheckBox, TouchableOpacity, ImageBackground, Image } from 'react-native'
import Input from '../components/Input'
import * as LoginAction from '../services/actions/loginAction'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login(props) {

    const { navigation } = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [lembreme, setLembreme] = useState(false);
    const [msg, setMsg] = useState("")

    useLayoutEffect(() => {

        const getUsernameAndPassord = async () => {
            let email = await AsyncStorage.getItem("email")
            let senha = await AsyncStorage.getItem("senha")
            if (email) {
                setEmail(email)
                setLembreme(true)
            }
            if (senha) setPassword(senha)
        }
        getUsernameAndPassord()

    }, [])

    const validarCredenciais = async () => {
        try {
            await dispatch(LoginAction.login(email, password, lembreme))
            navigation.replace("Menu Inicial")
        } catch (error) {
            setMsg(error)
        }
    }


    return (
            <ImageBackground source={require('../img/loginBackground.jpg')} style={styles.backImage}>
            <View style={styles.container}>
            <Image
                    style={{width: "70%", height: "45%"}}
                    source={require(
                        "../img/tuneMyCar.png"
                    )}
                />
                <View>
                    <Text style={{ color: "red", margin: 10 }}>{msg}</Text>
                </View>
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

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={lembreme}
                        onValueChange={setLembreme}
                        style={styles.checkbox}
                    />
                    <Text style={styles.lembremeText}>Lembre-me</Text>
                </View>
                <View style={styles.caixaBotao}>
                <Button 
                    mode="contained" 
                    onPress={validarCredenciais}
                    > 
                    Login 
                </Button>
                
                </View>
                <View style={{ marginTop: 8 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> navigation.navigate("Registro")}
                    >
                        <Text style={{color: "#ffffff"}}>Não é cadastrado? Crie sua conta!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: "10%"
    },
    caixaBotao: {
        marginTop: 10,
        width: "80%"
    },
    checkboxContainer: {
        flexDirection: "row",
    },
    checkbox: {
        alignSelf: "center",
    }, 
    button: {
        alignItems: "center",
        backgroundColor: "#585858",
        marginTop: 10,
        padding: 8
    },
    backImage:{
        width: '100%', 
        height: '100%',
    },
    bemVindoText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 10
    },
    lembremeText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 15,
        margin: 8
    },
})