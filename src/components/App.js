import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Main from './Main';
import {Provider} from 'react-redux';
import {store, persistor} from '../store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';
import styles from '../styles/styles';

export default class App extends Component {
	
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<LoadingView />} persistor={persistor}>
					<Main/>
				</PersistGate>
			</Provider>
		);
	}
}

class LoadingView extends Component
{
	render()
	{
		return(
			<Text styles={styles.container}>
				Loading...
			</Text>
		);
	}
}