import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const Instruction = ({ children, style }) => {
	return <Text style={[styles.instructionText, style]}> {children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
	instructionText: {
		fontFamily: "open-sans",
		color: Colors.accent500,
		fontSize: 24
	}
});
