import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
state = { logIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC0_IQpi45UG9L9enJH79Ht-V6H77_wRJk',
    authDomain: 'reactfirebase-e4791.firebaseapp.com',
    databaseURL: 'https://reactfirebase-e4791.firebaseio.com',
    projectId: 'reactfirebase-e4791',
    storageBucket: 'reactfirebase-e4791.appspot.com',
    messagingSenderId: '212321822451'
    }
    );

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logIn: true });
      } else {
        this.setState({ logIn: false });
      }
    });
  }

renderContent() {
  switch (this.state.logIn) {
    case true:
    return (<Button
    onPress={() => firebase.auth().signOut()}
    >LOGOUT</Button>
  );
    case false:
    return <LoginForm />;
    default:
    return <Spinner size="large" />;

  }
}

  render() {
    return (
        <View>

          {this.renderContent()}
        </View>
    );
  }
}

export default App;
