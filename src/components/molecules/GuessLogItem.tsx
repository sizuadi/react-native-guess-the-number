import Colors from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

interface GuessLogItemProps {
	roundNumber: number;
	guess: number;
}

export default function GuessLogItem({ roundNumber, guess }: GuessLogItemProps) {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Phone's Guess {guess}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		marginVertical: 8,
		backgroundColor: Colors.accent,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		elevation: 4,
		shadowColor: Colors.black,
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
	},
	itemText: {
		fontSize: 18,
		fontFamily: 'open-sans',
	},
});
