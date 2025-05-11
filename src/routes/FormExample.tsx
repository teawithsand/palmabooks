import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function FormExample() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = () => {
		Alert.alert("Form Submitted", `Name: ${name}\nEmail: ${email}`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Name:</Text>
			<TextInput
				style={styles.input}
				value={name}
				onChangeText={setName}
				placeholder="Enter your name"
			/>

			<Text style={styles.label}>Email:</Text>
			<TextInput
				style={styles.input}
				value={email}
				onChangeText={setEmail}
				placeholder="Enter your email"
				keyboardType="email-address"
				autoCapitalize="none"
			/>

			<Button title="Submit" onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: "center",
	},
	label: {
		fontSize: 16,
		marginBottom: 8,
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 8,
		borderRadius: 4,
	},
});
