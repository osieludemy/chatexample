import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {FormInput, Button} from "react-native-elements";
import theme from '../common/Theme'

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dividersView}>
          <Text style={styles.title}>Chat</Text>
        </View>
        <View style={styles.dividersView}>
          <View style={styles.inputView}>
            <FormInput
              placeholder={'email'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={[styles.inputView,{marginTop: 20}]}>
            <FormInput
              placeholder={'password'}
              secureTextEntry
            />
          </View>
          <View style={[styles.inputView,{marginTop: 20}]}>
            <Button
              raised
              title={'Sig in'}
              onPress={() => {}}
              backgroundColor={theme.colors.primary}
            />
          </View>
          <Text style={{marginTop:40}}>Or</Text>
          <View style={styles.socialView}>
            <Button
              rightIcon={{name: 'google', type: 'material-community'}}
              raised
              title={'Sig in with'}
              onPress={() => {}}
              backgroundColor={theme.colors.googleColor}
            />
          </View>
        </View>
        <View style={styles.dividersView}>
          <Text style={{marginTop:40}}>Without account yet?</Text>
          <Text onPress={() => {}} style={styles.registerButton}>Register</Text>
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 20,
  },
  inputView:{
    width: 350
  },
  socialView:{
    marginTop:20,
    width: 350
  },
  registerButton:{
    color:theme.colors.linkButton,
    marginTop:10
  }
})

export default LoginScreen
