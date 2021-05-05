import React, { Component } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default class RegisterScreen extends Component {

  constructor(props)
  {
    super(props);
    this.state={user_email:'',user_password:'',passwordCheck:''}
  }

  InsertRecord=()=>
  {
    var user_email=this.state.user_email;
    var user_password=this.state.user_password;
    var passwordCheck=this.state.passwordCheck;


    if(user_email==0 || user_password==0){
      alert("Missing fields");
    }
    else if(passwordCheck != user_password){
      alert("Passwords don't match")
    }
    else
    {

      var InsertAPIURL="http://localhost:8080/api/insert.php"

      var headers={
        'Accept':'application/json',
        'Content-Type':"application.json"
      }

      var Data={
        user_email:user_email,
        user_password:user_password
      }

      fetch(InsertAPIURL,
        {
          method:'POST',
          headers:headers,
          body: JSON.stringify(Data)
        }
        )
        .then((response)=>response.json())
        .then((response)=>
        {
          alert(response[0].Message);
        }
        ).catch((error)=>{
          alert("Error"+error);
        })
    }
  }

  render(){
    const { navigate } = this.props.navigation;  
    return (
      <View style={styles.background}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={user_email=>this.setState({user_email})}
          />
        <TextInput
          placeholder="Password"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry 
          onChangeText={user_password=>this.setState({user_password})}

          />
        <TextInput
          placeholder="Re-enter Password"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry 
          onChangeText={passwordCheck=>this.setState({passwordCheck})}
          />
        <Button
          title="Register"
          onPress={this.InsertRecord}
          />
      </View>
    );
  }

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
