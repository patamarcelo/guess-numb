import { Image, Text, View, StyleSheet } from "react-native";
import Title from "../compnents/ui/Title";

import Colors from "../utils/colors";
import PrimaryButton from "../compnents/ui/PrimaryButton";

const GameOverScreen = (props) => {
	const { roundsNumber, userNumber, onStartNewGame } = props;
	return (
		<View style={styles.rootContainer}>
			<Title> GAME OVER</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../assets/image/success.png")}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone need
				<Text style={styles.highlight}> {roundsNumber} </Text>
				rounds to guess the number
				<Text style={styles.highlight}> {userNumber} </Text>.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>
				Start New Game
			</PrimaryButton>
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 24,
		textAlign: "center",
		marginBottom: 24
	},
	highlight: {
		fontFamily: "open-sans-bold",
		color: Colors.primary500
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center"
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 200,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: "hidden",
		margin: 36
	},
	image: {
		width: "100%",
		height: "100%"
	}
});
