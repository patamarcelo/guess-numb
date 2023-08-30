import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./utils/colors";

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setgameIsOver] = useState(true);
	const [guessRounds, setGuessRounds] = useState(0);

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	const startGameHandler = (pickedNumber) => {
		setUserNumber(pickedNumber);
		setgameIsOver(false);
	};

	const resetGame = () => {
		setUserNumber("");
	};

	const gameOverHandler = (rounds) => {
		setgameIsOver(true);
		setGuessRounds(rounds);
	};

	const statNewGameHandler = () => {
		setUserNumber(null);
		setGuessRounds(0);
	};

	let screen = <StartGameScreen onConfirmNumber={startGameHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen
				onGameOver={gameOverHandler}
				onCancel={resetGame}
				userNumber={userNumber}
			/>
		);
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				roundsNumber={guessRounds}
				userNumber={userNumber}
				onStartNewGame={statNewGameHandler}
			/>
		);
	}

	return (
		<LinearGradient
			colors={[Colors.primary700, Colors.accent500]}
			style={styles.rootScreen}
		>
			<ImageBackground
				source={require("./assets/image/background.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.imageS}
			>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1
	},
	imageS: {
		opacity: 0.15
	}
});
