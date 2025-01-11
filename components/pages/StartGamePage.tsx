import { View, StyleSheet, TextInput } from 'react-native';
import { LinkButton } from '@/components/atoms/LinkButton';
import { DefaultButton } from '@/components/atoms/DefaultButton';

export default function StartGamePage() {
	return (
		<>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.inputText}
					maxLength={2}
					keyboardType='number-pad'
					autoCapitalize='none'
					autoCorrect={false}
				/>
				<View>
					<DefaultButton onPress={() => {}} text='Start Game' />
				</View>
				<LinkButton link='/in_game' text='In Game' />
				<LinkButton link='/in_game' text='In Game' />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
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
});
