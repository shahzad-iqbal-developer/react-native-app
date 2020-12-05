import React, {Component} from 'react';
import { View , Text, TouchableOpacity, Button } from 'react-native'; 

class Splash extends Component{

    constructor(props){
        super(props)
        this.state = ({TextValue: 'First String',count:0}) // state definde
    }
    

    render(){ 
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'blue'}}>
                 <Text style={{color:'#ffffff',fontSize:30,fontWeight:'bold'}}>Splash Screen</Text>
            </View>
        ) 
    } 
}

export default Splash;