import React, {Component} from 'react';
import { View , Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/Header';
import Images from '../Utils/Images';
import styles from '../Utils/styles';

class LoginScreen extends Component{

    constructor(props){
        super(props)
        this.state = ({Email: '',Password:''}) // state definde
    }

    render(){ 
        return(
            <View style={{backgroundColor:"#fff"}}>
                <Header showBack={false} title={"Login Screen"}  />
                 <View style={{ height:'90%',  }}>
                    <Image style={{justifyContent:'center',width:'100%'}} source={Images.Icon_Splash}  />
                    <View style={{marginTop:50}}>
                        <TextInput
                            style={styles.Login.TextInput}
                            onChangeText={text => this.setState({Email:text})}
                            value={this.state.Email}
                            placeholder={'Enter Email'}
                            placeholderTextColor={'grey'}
                        /> 

                        <TextInput
                            style={styles.Login.TextInput}
                            onChangeText={text => this.setState({Password:text})}
                            value={this.state.Password}
                            placeholder={'Enter Password'}
                            placeholderTextColor={'grey'}
                        /> 
                    </View>

                    <View>
                        <TouchableOpacity style={{}} onPress={() => this.props.navigation.navigate('DashboardScreen')}>
                            <Text style={[styles.Login.Button,{backgroundColor:'blue'}]} > Login </Text>
                        </TouchableOpacity>
                    </View>
                   

                 </View>

                
                

            </View>
        ) 
    }
 

    componentDidMount(){
           
    }

    componentWillUnmount(){

    }
 

}

export default LoginScreen;