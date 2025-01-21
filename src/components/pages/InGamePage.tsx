import NumberContainer from '@/components/atoms/NumberContainer';
import Title from '@/components/atoms/Title';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
export default function InGamePage({ userNumber }: inGameProps) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{/* GUESS */}
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				{/* - + */}
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
});
