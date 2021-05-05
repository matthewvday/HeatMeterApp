import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ProfileScreen from './app/screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return( 
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Welcome" component={WelcomeScreen}/>
       <Stack.Screen name="Login" component={LoginScreen}/>
       <Stack.Screen name="Register" component={RegisterScreen}/>
       <Stack.Screen name="Profile" component={ProfileScreen}/>
     </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
