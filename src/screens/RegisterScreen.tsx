// import React, { useState } from "react";
// import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
// import { mockApi } from "../apiFolder/mockApi";

// const Register = ({ navigation }: any) => {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [name, setName] = useState("");

// 	const handleRegister = async () => {
// 		try {
// 			const user = await mockApi.register(email, password, name);
// 			navigation.navigate("Profile", { userId: user.id });
// 		} catch (error: any) {
// 			Alert.alert("Error", error.message);
// 		}
// 	};

// 	return (
// 		<View style={styles.container}>
// 			<Text>Register</Text>
// 			<TextInput placeholder="Name" value={name} onChangeText={setName} />
// 			<TextInput placeholder="Email" value={email} onChangeText={setEmail} />
// 			<TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
// 			<Button title="Register" onPress={handleRegister} />
// 		</View>
// 	);
// };

// export default Register;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	button: {
// 		marginVertical: 5
// 	}
// });

import React, { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { mockApi } from "../apiFolder/mockApi";

const Register = ({ navigation }: any) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const handleRegister = async () => {
		try {
			const user = await mockApi.register(email, password, name);
			navigation.navigate("Profile", { userId: user.id });
		} catch (error: any) {
			Alert.alert("Error", error.message);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Register</Text>

			<TextInput
				style={styles.input}
				placeholder="Full Name"
				value={name}
				onChangeText={setName}
			/>

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

			<TouchableOpacity style={styles.button} onPress={handleRegister}>
				<Text style={styles.buttonText}>Register</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate("Login")}>
				<Text style={styles.loginText}>Already have an account? Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f9f9f9',
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	title: {
		fontSize: 32,
		fontWeight: '700',
		color: '#333',
		marginBottom: 30,
		textAlign: 'center',
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
	loginText: {
		color: '#007BFF',
		fontSize: 16,
		fontWeight: '500',
		marginTop: 10,
		textAlign: 'center',
	},
});
