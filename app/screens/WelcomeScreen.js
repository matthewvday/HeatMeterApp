import React from 'react';
import { ImageBackground,StyleSheet, View, Image, Text, Button} from 'react-native';
import LoginScreen from './LoginScreen';

function WelcomeScreen(props) {
    return (
      <ImageBackground 
        style={styles.background}
        source={require('../assets/flamesbackground.jpeg')}
      >
          <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../assets/meterlogo.png')} />
          <Text style={styles.title}>HeatMeter</Text>
          </View>
          <View style={styles.loginButton}> 
          <Button
            title="Login"
            onPress={()=> console.log("hey")}
            />
            </View>
        
          <View style={styles.registerButton}>
          <Button
            title="Register"
            onPress={() => console.log("Button pressed")}
            />
          </View>

      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 250,
        alignItems: "center",
    },
    registerButton:{
        width:'100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    title:{
        color: "#faaa3e",
        fontSize: 50,
    },
})

export default WelcomeScreen;