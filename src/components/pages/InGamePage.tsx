import { DefaultButton } from '@/components/atoms/DefaultButton';
import InstructionText from '@/components/atoms/InstructionText';
import NumberContainer from '@/components/atoms/NumberContainer';
import Title from '@/components/atoms/Title';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

interface inGameProps {
	userNumber: number;
	onGameOver: () => void;
}

function generateRandomBetween(min: number, max: number, exclude: number) {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	return randomNumber;
}

let maxBoundary = 100;
let minBoundary = 0;
export default function InGamePage({ userNumber, onGameOver }: inGameProps) {
	const initialGuess = generateRandomBetween(0, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

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

		const newGuessNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newGuessNumber);
	}
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{/* GUESS */}
			<NumberContainer>{currentGuess}</NumberContainer>
			<View style={styles.controlContainer}>
				<InstructionText>Higher or lower?</InstructionText>
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
	buttonContainer: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: 300,
		maxWidth: '80%',
	},
});
