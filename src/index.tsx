import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View className="flex-1 justify-center items-center bg-white">
			<Text className="text-2xl font-bold">Welcome to PalmaBooks!</Text>
			<StatusBar style="auto" />
		</View>
	);
}
