import React, { Component } from 'react';
import LoginScreen from '../Containers/LoginScreen';
import DashboardScreen from '../Containers/DashboardScreen';
import Splash from '../Containers/Splash';

import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class AppNavigator extends Component{

    constructor(props){
        super(props);
        this.state = {showSplash:true}
    }
    
    render(){
          return(
                 this.state.showSplash ? <Splash/> : 
                 <NavigationContainer>
                    <Stack.Navigator initialRouteName = "LoginScreen" headerMode= "none">
                        <Stack.Screen name="LoginScreen" component = {LoginScreen}/>
                        <Stack.Screen name="DashboardScreen" component = {DashboardScreen}/>
                    </Stack.Navigator>
                </NavigationContainer> 
          )  
    }

    componentDidMount(){
        setTimeout(()=>{ 
           this.setState({showSplash:false})
       },2000)
    }
    
}

export default AppNavigator;