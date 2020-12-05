import React, {Component} from 'react';
import { View , Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Components/Header';
import Images from '../Utils/Images';
import styles from '../Utils/styles';
import { connect } from "react-redux";
import { SaveCredentials } from '../Store/Actions/SaveLogin'

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
                            secureTextEntry={true}
                            placeholderTextColor={'grey'}
                        /> 
                    </View>

                    <View>
                        <TouchableOpacity style={{}} onPress={() => this.Save()}>
                            <Text style={[styles.Login.Button,{backgroundColor:'blue'}]} > Login </Text>
                        </TouchableOpacity>
                    </View>
                   

                 </View> 
            </View>
        ) 
    } 

    Save(){
        let Credentials ={username:this.state.Email,password:this.state.Password}
        this.props.SC(Credentials); 
        this.props.navigation.navigate('DashboardScreen');
    }

}

const mapStateToProps = (state) => {
    return state;
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        SC: (Credentials) => dispatch(SaveCredentials(Credentials)), 
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
 
