import React, {Component} from 'react';
import { View , Text, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';

class demo extends Component{

    constructor(props){
        super(props)
        this.state = ({TextValue: 'First String',count:0}) // state definde
    }

    render(){ 
        return(
            <View>
                <Header title={"DEMO SCREEN 1"}  />
                <Text style={{fontSize:25}}> {this.state.count} </Text>  
                <TouchableOpacity style={{}} onPress={()=> this.setState({count:this.state.count+1})}>
                    <Text style={{fontSize:30}}> Increase Count by 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{}} onPress={()=> this.resetCounter() }>
                    <Text style={{fontSize:30}}> Reset Count</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}} onPress={()=> this.incrementcountertotwo() }>
                    <Text style={{fontSize:30}}> Increment Count to 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{}} onPress={()=> this.props.navigation.navigate("DemoScreen2") }>
                    <Text style={{fontSize:30}}> Go to 2nd screen</Text>
                </TouchableOpacity>

            </View>
        ) 
    }

    componentDidMount(){
            setTimeout(()=>{
                // We are chaging state
                
                 this.setState({TextValue:'thirdScreen'});
            },2000)
    }

    componentWillUnmount(){

    }

    resetCounter = ()=> {
        this.setState({count:0})
    }

    incrementcountertotwo=function(){
        this.setState({count:this.state.count+2})
    }.bind(this)

    // resetCountertwo(){
    //     this
    // }

}

export default demo;