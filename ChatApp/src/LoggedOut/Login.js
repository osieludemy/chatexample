import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {FormInput, Button} from "react-native-elements";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dividersView}>
          <Text>Chat</Text>
        </View>
        <View style={styles.dividersView}>
          <View>
            <FormInput
              placeholder={'email'}
              keyboardType={'email-address'}
            />
          </View>
          <View>
            <FormInput
              placeholder={'password'}
              secureTextEntry
            />
          </View>
          <View>
            <Button raised title={'Log In'} onPress={() => {}}/>
          </View>
          <Text>Or</Text>
          <View>
            <Button raised title={'Log in with Google'} onPress={() => {}}/>
          </View>
        </View>
        <View style={styles.dividersView}>
          <Text>Without account yet?</Text>
          <Text onPress={() => {}}>Register</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  dividersView:{
    alignItems: 'center'
  }
})

export default Login
