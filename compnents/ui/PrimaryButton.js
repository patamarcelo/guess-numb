import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../utils/colors";
const PrimaryButton = (props) => {
	const { children, onPress } = props;

	const pressHandler = () => {
		onPress();
	};

	return (
		<View style={style.buttonOuter}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [style.pressed, style.buttonInner]
						: style.buttonInner
				}
				onPress={pressHandler}
				android_ripple={{ color: Colors.primary600 }}
			>
				<Text style={style.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const style = StyleSheet.create({
	buttonOuter: {
		borderRadius: 10,
		margin: 4,
		overflow: "hidden"
	},
	buttonText: {
		color: "white",
		textAlign: "center"
	},
	buttonInner: {
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2
	},
	pressed: {
		opacity: 0.75,
		backgroundColor: Colors.primary600
	}
});
