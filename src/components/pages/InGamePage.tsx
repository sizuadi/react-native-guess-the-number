import Card from '@/components/atoms/Card';
import { DefaultButton } from '@/components/atoms/DefaultButton';
import InstructionText from '@/components/atoms/InstructionText';
import NumberContainer from '@/components/atoms/NumberContainer';
import Title from '@/components/atoms/Title';
import GuessLogItem from '@/components/molecules/GuessLogItem';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

interface inGameProps {
	userNumber: number;
	onGameOver: (numberOfRounds: number) => void;
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
	const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver]);

	useEffect(() => {
		minBoundary = 0;
		maxBoundary = 100;
	}, []);

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
			minBoundary = currentGuess + 1;
		}

		const newGuessNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newGuessNumber);
		setGuessRounds((prevGuessRounds) => [newGuessNumber, ...prevGuessRounds]);
	}
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{/* GUESS */}
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<View style={styles.controlContainer}>
					<InstructionText>Higher or lower?</InstructionText>
					<View style={styles.buttonContainer}>
						<DefaultButton
							onPressButton={() => nextGuessHandler('lower')}
							addStyles={styles.buttonStyle}
						>
							<Ionicons name='remove' size={24} color='white' />
						</DefaultButton>
						<DefaultButton
							onPressButton={() => nextGuessHandler('greater')}
							addStyles={styles.buttonStyle}
						>
							<Ionicons name='add' size={24} color='white' />
						</DefaultButton>
					</View>
				</View>
			</Card>
			{/* LOG ROUNDS */}
			<View>
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessRounds.length - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item) => String(item)}
				/>
			</View>
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
	},
	buttonStyle: {
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
	},
});
