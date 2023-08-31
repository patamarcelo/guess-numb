import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import PrimaryButton from "../compnents/ui/PrimaryButton";

import Colors from "../utils/colors";
import Title from "../compnents/ui/Title";
import NumberContainer from "../compnents/game/NumberContainer";
import Card from "../compnents/ui/Card";
import Instruction from "../compnents/ui/Instruction";

import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../compnents/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
	const { onCancel, userNumber, onGameOver } = props;
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "greather" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie", "You know that this is wrong...", [
				{ text: "Sorry", style: "cancel" }
			]);
			return;
		}
		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRandNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRandNumber);
		setGuessRounds((prev) => [newRandNumber, ...prev]);
	};

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	const guesRoundListLength = guessRounds.length;

	return (
		<View style={styles.homeScreen}>
			<Title>Oponent Guest</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Instruction style={styles.instructionText}>
					Higher or Lower?
				</Instruction>
				<View>
					<View style={styles.buttonsContainer}>
						<View style={styles.btnContainer}>
							<PrimaryButton
								onPress={nextGuessHandler.bind(this, "lower")}
							>
								<Ionicons
									name="md-remove"
									size={24}
									color="white"
								/>
							</PrimaryButton>
						</View>
						<View style={styles.btnContainer}>
							<PrimaryButton
								onPress={nextGuessHandler.bind(
									this,
									"greather"
								)}
							>
								<Ionicons
									name="md-add"
									size={24}
									color="white"
								/>
							</PrimaryButton>
						</View>
					</View>
				</View>
			</Card>
			<View style={styles.listContainer}>
				{/* {guessRounds.map((data, i) => {
					return <Text key={i}>{data}</Text>;
				})} */}

				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guesRoundListLength - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item, index) => index}
				/>
			</View>
			<View style={styles.cancelContainer}>
				<PrimaryButton onPress={onCancel}>Cancel</PrimaryButton>
			</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		padding: 16,
		gap: 10
	},
	cancelContainer: {
		marginTop: "auto",
		alignItems: "center"
	},
	instructionText: {
		marginBottom: 20
	},
	homeScreen: {
		flex: 1,
		padding: 24
		// alignItems: "center",
		// gap: 10
		// justifyContent: "center"
	},
	btnContainer: {
		// flex: 0
		width: "50%"
	},
	buttonsContainer: {
		flexDirection: "row",
		marginTop: 10
	},
	title: {
		color: Colors.accent500,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		borderWidth: 2,
		borderColor: Colors.accent500,
		padding: 12
	}
});
