import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/styles.js'

class PinInput extends Component {

	constructor(props)
	{
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.state = {
			text: '',
			title: ''
		};

		
	}

	

	handleSubmit()
	{
		if(this.props.set)
		{
			if(this.state.text == this.props.pin)
			{
				Alert.alert('pin is correct!');
				this.props.login();
			}
			else
			{
				Alert.alert('incorrect pin')
			}
		}
		else 
		{
			this.props.submitPin(this.state.text);
			this.props.setPin();
			this.props.login();
		}
		this.setState({text: ''})
	}

	render() {
		let title = '';
		if(this.props.set)
		{
			title = 'Please enter your pin.';
		}
		else{

			title = 'This is your first login. Set your new pin below.';
		}

		return (
			<View style={styles.container}>
				<Text>
					{title}
				</Text>
				<Text>
					
				</Text>
				<TextInput
					style={styles.input}
					keyboardType='number-pad'
					placeholder='enter pin'
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
				/>
				<Button title='submit' onPress={this.handleSubmit}/>
				<View style={styles.unset}>
					<Button 
						title='unset' 
						onPress={() => {
							this.props.unsetPin();
						}}
				/>
				</View>
			</View>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(PinInput)

function mapDispatchToProps(dispatch)
{
	return {
		submitPin: (data) => dispatch({type: 'SUBMIT_PIN', data: data}),
		setPin: () => dispatch({type: 'SET_PIN'}),
		unsetPin: () => dispatch({type: 'UNSET_PIN'}),
		login: () => dispatch({type:"LOGIN"}),
	}

}

function mapStateToProps(state)
{
	return{
		pin: state.pin.pin,
		set: state.pin.isSet
	}
}

