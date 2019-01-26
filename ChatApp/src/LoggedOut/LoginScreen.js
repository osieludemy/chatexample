import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {FormInput, Button} from "react-native-elements";
import i18n from 'i18n-js'
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
              placeholder={i18n.t('LoginScreen.emailPlaceholder')}
              keyboardType={'email-address'}
              underlineColorAndroid={theme.colors.primary}
              inputStyle={styles.textInput}
            />
          </View>
          <View style={[styles.inputView,{marginTop: 20}]}>
            <FormInput
              placeholder={i18n.t('LoginScreen.passwordPlaceholder')}
              secureTextEntry
              underlineColorAndroid={theme.colors.primary}
              inputStyle={styles.textInput}
            />
          </View>
          <View style={{marginTop: 20, width: 350}}>
            <Button
              raised
              title={i18n.t('LoginScreen.signinButton')}
              onPress={() => {}}
              backgroundColor={theme.colors.primary}
            />
          </View>
          <Text style={{marginTop:40}}>{i18n.t('LoginScreen.orLabel')}</Text>
          <View style={styles.socialView}>
            <Button
              rightIcon={{name: 'google', type: 'material-community'}}
              raised
              title={i18n.t('LoginScreen.loginWithButton')}
              onPress={() => {}}
              backgroundColor={theme.colors.googleColor}
            />
          </View>
        </View>
        <View style={styles.dividersView}>
          <Text style={{marginTop:40}}>{i18n.t('LoginScreen.withoutAccountLabel')}</Text>
          <Text onPress={() => {}} style={styles.registerButton}>{i18n.t('LoginScreen.registerLabel')}</Text>
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
    alignSelf:'stretch',
    alignItems:'center',
  },
  socialView:{
    marginTop:20,
    width: 350
  },
  registerButton:{
    color:theme.colors.linkButton,
    marginTop:10
  },
  textInput:{
    width: 320
  }
})

export default LoginScreen
