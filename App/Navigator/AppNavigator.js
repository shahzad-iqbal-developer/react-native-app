import React, { Component } from 'react';
import demo from '../Containers/demo';
import demo2 from '../Containers/demo2';

import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator(){
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "DemoScreen" headerMode= "none">
            <Stack.Screen name="DemoScreen" component = {demo}/>
            <Stack.Screen name="DemoScreen2" component = {demo2}/>
        </Stack.Navigator>
     </NavigationContainer>
    ) 
}

export default AppNavigator;