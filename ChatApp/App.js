import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'react-native-firebase';

import LoginScreen from './src/LoggedOut/LoginScreen'
import i18n from './src/common/translation/i18n'
import RNlanguages from 'react-native-languages'



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount(): void {
    //i18n.locale = RNlanguages.language
    RNlanguages.addEventListener('change', this._onLanguageChanges)
  }

  componentWillUnmount(): void {
    RNlanguages.removeEventListener('change',this._onLanguageChanges)
  }

  _onLanguageChanges = ({language}) => {
    i18n.locale = language
  }

  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (
        <View style={styles.container}>
          <LoginScreen/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
