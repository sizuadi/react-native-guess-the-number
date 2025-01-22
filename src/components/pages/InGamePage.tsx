import { DefaultButton } from '@/components/atoms/DefaultButton';
import NumberContainer from '@/components/atoms/NumberContainer';
import Title from '@/components/atoms/Title';
import Colors from '@/constants/colors';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

interface inGameProps {
	userNumber: number;
}

function generateRandomBetween(min: number, max: number, exclude: number) {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	return randomNumber;
}

let maxBoundary = 100;
let minBoundary = 1;
export default function InGamePage({ userNumber }: inGameProps) {
	const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	function nextGuessHandler(direction: 'lower' | 'greater') {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong...', [
				{ text: 'Sorry!', style: 'destructive' },
			]);
			return;
		}
		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			maxBoundary = currentGuess + 1;
		}

		// TODO : GAME OVER PAGE
		// if (condition) {
		// }
		const newGuessNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newGuessNumber);
	}
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{/* GUESS */}
			<NumberContainer>{currentGuess}</NumberContainer>
			<View style={styles.controlContainer}>
				<Text style={styles.controlText}>Higher or lower?</Text>
				<View style={styles.buttonContainer}>
					<DefaultButton onPressButton={() => nextGuessHandler('lower')} text='-' />
					<DefaultButton onPressButton={() => nextGuessHandler('greater')} text='+' />
				</View>
			</View>
			{/* LOG ROUNDS */}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	controlContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	controlText: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
		color: Colors.white,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 300,
		maxWidth: '80%',
	},
});
