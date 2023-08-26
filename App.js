import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>
				Open up App.js to start working on your app!
			</Text>
			<StartGameScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	textStyle: {
		color: "red"
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
