import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TextInput} from 'react-native';
import {connect} from 'react-redux';
import PinInput from "./PinInput";
import styles from '../styles/styles';

class Main extends Component {

	render() {
	
		
		if(this.props.loggedIn)
		{
			return (
				<View style={styles.container}>
					<Text>				
						Welcome, user!!
					</Text>
					<Button title='logout' onPress={this.props.logout} />
				</View>
			);
		}
		else{
			return (
				<View style={styles.container}>
					<PinInput/>
				</View>
			);	
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)


function mapStateToProps(state)
{
	return{
		loggedIn: state.app.loggedIn
	}
}

function mapDispatchToProps(dispatch)
{
	return {
		logout: () => dispatch({type:"LOGOUT"}),
	}

}

