import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
	return <Text style={style.title}>{children}</Text>;
};

export default Title;

const style = StyleSheet.create({
	title: {
		fontFamily: "open-sans-bold",
		color: "whitesmoke",
		fontSize: 18,
		textAlign: "center",
		borderWidth: 2,
		borderColor: "white",
		padding: 12
	}
});
