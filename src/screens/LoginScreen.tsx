import { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { mockApi } from "../apiFolder/mockApi";

const Login = ({ navigation }: any) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		try {
			const user = await mockApi.login(email, password);
			navigation.navigate("Profile", { userId: user.id });
		} catch (error: any) {
			Alert.alert("Error", error.message);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>

			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
				autoCapitalize="none"
			/>

			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>

			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate("Register")}>
				<Text style={styles.registerText}>Don't have an account? Register</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f4f6',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	title: {
		fontSize: 32,
		fontWeight: '700',
		color: '#333',
		marginBottom: 30,
	},
	input: {
		width: '100%',
		height: 50,
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingLeft: 15,
		marginBottom: 15,
		fontSize: 16,
		borderColor: '#ddd',
		borderWidth: 1,
	},
	button: {
		width: '100%',
		height: 50,
		backgroundColor: '#4CAF50',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginBottom: 20,
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
	registerText: {
		color: '#007BFF',
		fontSize: 16,
		fontWeight: '500',
		marginTop: 10,
	},
});
