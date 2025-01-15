import { DefaultButton } from '@/components/atoms/DefaultButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, TextInput, View } from 'react-native';

export default function StartGamePage() {
	const [enteredNumber, setEnteredNumber] = useState<string>('');

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

	function confirmiInputHandler() {
		const number = parseInt(String(enteredNumber));
		//

		if (isNaN(number) || number < 1 || number > 99) {
			Alert.alert('Invalid number', 'please enter a number between 1 and 99.', [
				{ text: 'Okay', style: 'destructive', onPress: resetInputHandler },
			]);
			return;
		}
	}
	return (
		<>
			<LinearGradient colors={['#023c69', '#1481c0']} style={styles.rootScreen}>
				<ImageBackground
					source={require('@/assets/images/bg-pict.jpg')}
					style={styles.rootScreen}
					imageStyle={{ opacity: 0.15 }}
				>
					<View style={styles.inputContainer}>
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
								<DefaultButton
									onPressButton={confirmiInputHandler}
									text='Confirm'
								/>
							</View>
						</View>
					</View>
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
		backgroundColor: '#0b6599',
		padding: 20,
		marginHorizontal: 25,
		borderRadius: 15,
		elevation: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		alignItems: 'center',
	},
	inputText: {
		color: '#fff',
		borderBottomColor: '#fff',
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
