import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
         Text, 
         View,
        
        } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { Title } from 'native-base';

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen   
          name = 'Home'
          component = {HomeScreen}
          options={{
            title: "Love Calculator",
            headerStyle:{
              backgroundColor: '#2475B0',
            },
            headerTintColor:'#fff'
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default App;



