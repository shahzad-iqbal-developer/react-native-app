/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { Provider } from "react-redux";
import configureStore from './App/Store/configureStore';

import AppNavigator from './App/Navigator/AppNavigator'

class App extends Component{
  constructor(){
      super();
  }

  render(){
    return( 
      <Provider store={configureStore}>
          <AppNavigator/> 
      </Provider> 
    )
  }
}
 
export default App;