import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


function LoginScreen({navigation}) {
    return (
        <View style={styles.background}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
       placeholder="Password"
       style={styles.input}
       autoCapitalize="none"
       secureTextEntry
      />
      <Button
      title="Login"
      onPress={() => navigation.navigate('Profile')}
      />
      </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
        paddingTop: 120,
        alignItems: "center",
    },
    input: {
      backgroundColor: '#e8e8e8',
      width: '100%',
      padding: 20,
      borderRadius: 8,
      marginVertical: 8,

    },
})

export default LoginScreen;