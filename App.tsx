import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Registrasi from './android/app/src/screen/Registrasi';
import Login from './android/app/src/screen/Login';



const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login}></Stack.Screen>
      <Stack.Screen name='Registrasi' component={Registrasi}></Stack.Screen>
      

      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
