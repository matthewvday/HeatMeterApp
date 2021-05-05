import React from 'react';
import { ImageBackground,StyleSheet, View, Image, Text, Button} from 'react-native';


function WelcomeScreen({navigation}) {
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
            onPress={()=> navigation.navigate('Login')}
            />
            </View>
        
          <View style={styles.registerButton}>
          <Button
            title="Register"
            onPress={() => navigation.navigate('Register')}
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
    },
    title:{
        color: "#faaa3e",
        fontSize: 50,
    },
})

export default WelcomeScreen;