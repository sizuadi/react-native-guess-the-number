import Card from '@/components/atoms/Card';
import { DefaultButton } from '@/components/atoms/DefaultButton';
import InstructionText from '@/components/atoms/InstructionText';
import Title from '@/components/atoms/Title';
import Colors from '@/constants/colors';
import { useState } from 'react';
import {
	Alert,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	TextInput,
	useWindowDimensions,
	View,
} from 'react-native';

interface StartGameProps {
	onPickNumber: (pickedNumber: number) => void;
}

export default function StartGamePage({ onPickNumber }: StartGameProps) {
	const [enteredNumber, setEnteredNumber] = useState<string>('');
	const { width, height } = useWindowDimensions();

	function numberInputHandler(text: string) {
		if (text === '') {
			setEnteredNumber('');
		} else {
			setEnteredNumber(text);
		}
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		const number = parseInt(String(enteredNumber));
		if (isNaN(number) || number < 1 || number > 99) {
			Alert.alert('Invalid number', 'please enter a number between 1 and 99.', [
				{ text: 'Okay', style: 'destructive', onPress: resetInputHandler },
			]);
			return;
		}

		onPickNumber(number);
	}

	const marginTop = height < 380 ? 30 : 50;

	return (
		<ScrollView style={styles.screenContainer}>
			<KeyboardAvoidingView behavior='position' style={styles.screenContainer}>
				<View style={[styles.rootContainer, { marginTop: marginTop }]}>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a number</InstructionText>
						<TextInput
							style={styles.inputText}
							maxLength={2}
							keyboardType='number-pad'
							autoCapitalize='none'
							autoCorrect={false}
							defaultValue=''
							value={enteredNumber === '' ? '' : enteredNumber}
							onChangeText={(text) => numberInputHandler(text)}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<DefaultButton onPressButton={resetInputHandler} text='Reset' />
							</View>
							<View style={styles.buttonContainer}>
								<DefaultButton onPressButton={confirmInputHandler} text='Confirm' />
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		alignItems: 'center',
	},
	inputContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 20,
		paddingHorizontal: 30,
		marginTop: 20,
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
