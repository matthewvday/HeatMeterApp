import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

function LoginScreen(props) {
    return (
      <TextInput
        placeholder="Your Email"
        style={styles.textInput}
        autoCapitalize="none"
      />
    );
}

const styles = StyleSheet.create({
    textInput: {

    }
})

export default LoginScreen;