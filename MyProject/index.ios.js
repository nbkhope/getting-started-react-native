/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

class MyProject extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native <Text>{this.state.name}</Text>!
        </Text>

        <Image
          source={require('./images/atom.png')}
          style={styles.image}
        />

        <TextInput
          placeholder="Enter your name"
          style={styles.inputText}
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#191970',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 196,
    height: 196,
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    backgroundColor: 'gray',
    padding: 10,
    color: 'white',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
