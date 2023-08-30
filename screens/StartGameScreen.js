import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../compnents/ui/PrimaryButton";
import Colors from "../utils/colors";
import Title from "../compnents/ui/Title";
import Card from "../compnents/ui/Card";
import Instruction from "../compnents/ui/Instruction";

const StartGameScreen = (props) => {
	const { onConfirmNumber } = props;
	const [entNumber, setNumber] = useState("");

	const handlerInputeNubmer = (text) => {
		setNumber(text);
	};

	const resetInputHandler = () => {
		setNumber("");
	};

	const confirmInputHandler = () => {
		const choseNumber = parseInt(entNumber);
		console.log(choseNumber);

		if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
			Alert.alert(
				"Invalid Number",
				"Number has to be a number between 1 and 99",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetInputHandler
					}
				]
			);
			return;
		}

		onConfirmNumber(choseNumber);
	};

	return (
		<View style={style.rootContainer}>
			<Title>Guess My Number</Title>
			<Card>
				<Instruction>Enter a Number</Instruction>
				<TextInput
					style={style.textInput}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={entNumber}
					onChangeText={handlerInputeNubmer}
				/>
				<View style={style.buttonsContainer}>
					<View style={style.btnContainer}>
						<PrimaryButton onPress={resetInputHandler}>
							Reset
						</PrimaryButton>
					</View>
					<View style={style.btnContainer}>
						<PrimaryButton onPress={confirmInputHandler}>
							Confirm
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
};

export default StartGameScreen;

const style = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center"
	},
	btnContainer: {
		flex: 1
	},
	buttonsContainer: {
		flexDirection: "row",
		marginTop: 10
	},
	textInput: {
		fontSize: 32,
		height: 50,
		width: 50,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center"
	}
});
