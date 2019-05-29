import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
state = { email: '', password: '', error: '', loading: false };

onButtonPress() {

  const { email, password } = this.state;

  this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(this.onLoginFailed.bind(this));
    });
}

onLoginSuccess() {
  this.setState({
    error: '',
    loading: false,
    email: '',
    password: ''
  });
}

onLoginFailed() {
  this.setState(
    {
      error: 'Authentication Error',
      loading: false
    }
  );
}

renderButton() {
  if (this.state.loading) {
    return (
      <Spinner size='small' />
    );
  }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Login
    </Button>
  );
}

render() {
  return (
    <Card>

   <CardSection >
   <Input
    placeHolder="youremail@gmail.com"
    label="Email"
    value={this.state.email}
    onChangeText={email => this.setState({ email })}
   />
   </CardSection>
   <CardSection>
   <Input
    secureTextEntry
    placeHolder="password"
    label="Password"
    value={this.state.password}
    onChangeText={password => this.setState({ password })}
   />
   </CardSection>
   <Text style={styles.textStyle}>
    {this.state.error}
   </Text>

    <CardSection>
      {this.renderButton()}
    </CardSection>
    </Card>
  );
}
}

const styles = {
  textStyle: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  }
};

export default LoginForm;
