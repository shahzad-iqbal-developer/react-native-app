import React, {Component } from 'react';
import { View , Text , TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../Utils/styles';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return( 
            <View style={styles.Header.MainView}>
               { this.props.showBack &&
                <TouchableOpacity onPress = {()=> this.props.navigation.goBack()}>
                     <Text style={styles.Header.HeaderTitle}> BACK </Text> 
                </TouchableOpacity>
               }
               

                <Text style={styles.Header.HeaderTitle}> {this.props.title}  </Text>

                {
                 this.props.showBack && <Text>    </Text>
                }
            </View>
        )
    }
}

export default Header;