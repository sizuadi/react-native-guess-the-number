import GameOverPage from '@/components/pages/GameOverPage';
import InGamePage from '@/components/pages/InGamePage';
import StartGamePage from '@/components/pages/StartGamePage';
import Colors from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

export default function Index() {
	const [userNumber, setUserNumber] = useState(0);
	const [gameIsOver, setGameIsOver] = useState(false);
	const [guessNumbers, setGuessNumbers] = useState(0);

	function pickedNumberHandler(pickedNumber: number) {
		setUserNumber(pickedNumber);
	}

	function gameOverHandler(numberOfRounds: number) {
		setGameIsOver(true);
		setGuessNumbers(numberOfRounds);
	}

	function startNewGameHandler() {
		setUserNumber(0);
		setGameIsOver(false);
		setGuessNumbers(0);
	}

	let page = <StartGamePage onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		page = <InGamePage userNumber={userNumber} onGameOver={gameOverHandler} />;
	}

	if (gameIsOver && userNumber) {
		page = (
			<GameOverPage
				userNumber={userNumber}
				roundsNumber={guessNumbers}
				onStartNewGame={startNewGameHandler}
			/>
		);
	}

	return (
		<>
			<StatusBar style='light' />
			<LinearGradient colors={['#023c69', '#1481c0']} style={styles.rootScreen}>
				<ImageBackground
					source={require('@/assets/images/bg-pict.jpg')}
					style={styles.rootScreen}
					imageStyle={{ opacity: 0.15 }}
				>
					<SafeAreaView style={styles.rootScreen}>{page}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	inputContainer: {
		marginTop: 100,
		backgroundColor: Colors.primary800,
		padding: 20,
		marginHorizontal: 25,
		borderRadius: 15,
		elevation: 10,
		shadowColor: Colors.black,
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		alignItems: 'center',
	},
	inputText: {
		color: Colors.white,
		borderBottomColor: Colors.white,
		borderBottomWidth: 2,
		width: 50,
		paddingBottom: 5,
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		alignItems: 'center',
		marginHorizontal: 10,
	},
});
