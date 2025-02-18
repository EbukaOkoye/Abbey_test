/** @format */

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { usePickers } from "../apiFolder/queries";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ManagersContacts = () => {
	const { data } = usePickers();
	const navigation = useNavigation();

	// Check if data exists and extract it properly
	const picks = data?.data?.data || [];

	console.log("pickers", picks);

	return (
		<View
			style={{
				marginHorizontal: wp("6%"),
				marginTop: 10,
			}}
		>
			<Text style={{ marginBottom: 10, fontSize: 18, fontWeight: "600" }}>
				Contact Managers
			</Text>
			<ScrollView
				style={{ maxHeight: 300 }}
				nestedScrollEnabled={true}
				// contentContainerStyle={{
				// 	paddingBottom: 10,
				// }}
			>
				{picks.map((picker, index) => (
					<View
						key={index}
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View
							// key={index}
							style={{
								flexDirection: "row",
								gap: 8,
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Image
								source={
									require("../../assets/user1.jpg") // Fallback to placeholder image
								}
								style={{
									width: wp("10"),
									height: hp("6"),
									borderRadius: 8,
									shadowColor: "rgba(0,0,0,0.15)",
									shadowOffset: { width: 0, height: 3 },
									shadowOpacity: 0.5,
									shadowRadius: 5,
								}}
							/>
							<View>
								<Text
									style={{
										fontSize: 16,
										fontWeight: "600",
										color: "#02763BEB",
									}}
								>
									{picker.fullName}
								</Text>
								<Text style={{ fontSize: 12, color: "#888" }}>
									{picker.accountID}
								</Text>
							</View>
						</View>

						<TouchableOpacity
							onPress={() =>
								navigation.navigate("MessageScreen", {
									fullName: picker.fullName,
									accountID: picker.accountID,
								})
							}
						>
							<View
								style={{
									width: wp("12"),
									height: hp("6"),
									borderRadius: 10,
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "#02763beb",
								}}
							>
								<Ionicons
									name="arrow-forward-circle-outline"
									size={30}
									color="white"
								/>
							</View>
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default ManagersContacts;
