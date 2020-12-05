import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { SaveCredentials } from "../Store/Actions/SaveLogin";

class DashboardScreen extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    // console.log(""+JSON.stringify(this.props.LoginReducer.Username))
    return (
      <View>
         <Text style={{fontSize:25}}> UserName : {this.props.Username} </Text>  
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state.LoginReducer;
}
const mapDispatchToProps = (dispatch) => {
  return {
      SaveCredentials: (Credentials) => dispatch(SaveCredentials(Credentials)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
 
