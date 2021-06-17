import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import Input from '../components/Input'
import * as CarroAction from '../services/actions/carroAction'
import { Text, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'

export default function CRUD_carros(props) {
    const dispatch = useDispatch()
    const { navigation } = props
    const [msg, setMsg] = useState("")
    const [form, setForm] = useState({
        nome: "",
        motor: "",
        potencia: "",
        celular: ""
    })

    const atualizaForm = (field) => setForm(oldValue => Object.assign({}, oldValue, field))

    useLayoutEffect(() => {
        const dados = props.route.params
        if (dados) setForm(dados)
    }, [])


    const validar = () => {
        let campos = Object.getOwnPropertyNames(form)
        for (const campo of campos) {
            if (form[campo] == "" || form[campo] == null)
                return false
        }
        return true
    }


    const cadastrarCarro = async () => {
        if (validar()) {
            try {
                await dispatch(CarroAction.save(form))
                navigation.navigate("Carros Disponiveis")
                alert('Agora é só aguardar alguém entrar em contato, obrigado!')
            } catch (error) {
                setMsg(error)
            }
        } else {
            setMsg("Algum campo não foi preenchido corretamente!")
        }
    }

    return (
        <ImageBackground source={require('../img/fundomenuinicial.jpg')} style={styles.backImage}>
        <View style={styles.container}>
            <Text style={{color:"white", fontSize: 22, fontWeight: "bold"}}>Informe os dados do carro!</Text>
            <Input
                label="Nome"
                value={form.nome}
                setValue={atualizaForm}
                name="nome"
            />
            <Input
                label="Motor"
                value={form.motor}
                setValue={atualizaForm}
                name="motor"
            />
            <Input
                label="Potencia"
                value={form.potencia}
                setValue={atualizaForm}
                name="potencia"
            />
            <Input
                label="Celular para Contato"
                value={form.celular}
                setValue={atualizaForm}
                name="celular"
            />
            <View style={{ marginTop: 5, width: "80%" }}>
            <Button style={styles.botaoRedirect}
                mode="contained" 
                onPress={cadastrarCarro}> 
                Cadastrar
            </Button>
            </View>
            <View>
                <Text>{msg}</Text>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backImage:{
        width: '100%', 
        height: '100%',
    },
    botaoRedirect: { 
        marginTop: 10, 
        width: 300, 
        marginLeft: 10
    },
    container: {
        alignItems: "center",
        paddingTop: "10%"
    },
})