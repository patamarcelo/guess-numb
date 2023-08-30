import { View, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const Card = ({ children }) => {
	return <View style={style.inputContainer}>{children}</View>;
};

export default Card;

const style = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		// flex: 1,
		marginHorizontal: 24,
		borderRadius: 8,

		//SHADOWS
		elevation: 4, //android
		//SHADOWS
		// shadowColor: "grey",
		shadowOffset: { width: 10, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 6,

		marginTop: 36,
		backgroundColor: Colors.primary800,
		padding: 16
	}
});
