/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppNavigator from './App/Navigator/AppNavigator'

class App extends Component{
  constructor(){
      super();
  }

  render(){
    return( 
        <AppNavigator/> 
    )
  }
}
 
export default App;