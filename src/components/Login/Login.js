import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {

	render() {
		return(
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image 
						style={styles.logo}
						source={require('../../images/logo.png')}
					/>
					<Text style={styles.title}>Unfold your financial future</Text>
				</View>
				<View style={styles.formContainer}>
					<LoginForm />
				</View>
			</KeyboardAvoidingView>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#9b59b6'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 120,
		height: 120,
	},
	title: {
		color: '#FFF',
		marginTop: 10,
		width: 240,
		textAlign: 'center',
		fontFamily: 'Cochin',
		fontSize: 18,
		fontWeight: 'bold',
		opacity: 0.8
	}
});