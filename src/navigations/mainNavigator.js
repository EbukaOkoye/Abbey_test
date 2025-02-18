/** @format */

import "react-native-gesture-handler";

import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLayout from "./appNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function TabLayout() {
	// const {Navigator, Screen} = Tab
	const { Navigator, Screen } = Stack;

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Navigator>
				<Screen
					name="LandingPage"
					component={AppLayout}
					options={{ headerShown: false }}
				/>
			</Navigator>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	background: {
		// flex: 1,
		// resizeMode: "cover",
		// justifyContent: "center",
	},
	container: {
		justifyContent: "flex-start",
		alignItems: "baseline",
	},
	gradient: {
		height: 580,
		marginTop: 230,
		justifyContent: "center",
		alignItems: "flex-start",
	},
});
