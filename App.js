import React from 'react';
import { Button, LogBox } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login_page from './src/views/Login_page'
import Registrar_page from './src/views/Registrar_page'
import Menu_inicial from './src/views/Menu_inicial'
import FAQ from './src/views/FAQ_page'
import Tuners from './src/views/Tuners_page'
import Mapa from './src/views/MapaTuners_page'
import CRUD_carros from './src/views/New_carros_page'
import Sobre from './src/views/SobreAPP_page'
import Carros_Disponiveis from './src/views/CarrosDisponiveis_page'
import { Provider as StoreProvider } from 'react-redux'
import store from './src/services/store'

import "./src/services/ConnectFirebase"

export default function App() {
  LogBox.ignoreLogs(['Setting a timer'])

  const Stack = createStackNavigator()

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login_page}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registro"
            component={Registrar_page}
            options={{
              title: 'Voltar ao login',
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Menu Inicial"
            component={Menu_inicial}
            options={{
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('Demétrio Webber Barreto dos Santos, aluno do curso de Ciência da Computação na IMED, 3 semestre!')}
                  title="Sobre o Dev"
                  color="#7400ff"
                />
              ),
            }}
          />
          <Stack.Screen
            name="FAQ"
            component={FAQ}
            options={{
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Tuners"
            component={Tuners}
            options={{
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Mapa"
            component={Mapa}
            options={{
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="CRUD Carros"
            component={CRUD_carros}
            options={{
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Carros Disponiveis"
            component={Carros_Disponiveis}
            options={{
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Sobre o Aplicativo"
            component={Sobre}
            options={{
              headerStyle: {
                backgroundColor: '#7400FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
