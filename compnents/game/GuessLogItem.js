import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const GuessLogItem = (props) => {
	const { roundNumber, guess } = props;
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
		</View>
	);
};

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		marginVertical: 2,
		padding: 12,
		backgroundColor: Colors.accent500,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",

		elevation: 4,

		shadowColor: "black",
		textShadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		textShadowRadius: 3
	},
	itemText: {
		fontFamily: "open-sans"
	}
});
