import React, {Component} from 'react';
import { View , Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../Components/Header';

class Input extends Component{

    constructor(props){
        super(props)
        this.state = ({Email: '',Password:''}) // state definde
    }

    render(){ 
        return(
            <View>
                <Header showBack={false} title={"Login Screen"}  />
                 
                 <TextInput
                    style={{padding:10,fontSize:20, margin:10, height: 60, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => this.setState({Email:text})}
                    value={this.state.Email}
                    placeholder={'Enter Email'}
                    placeholderTextColor={'grey'}
                  /> 
                 
            </View>
        ) 
    }
  

}

export default Input;