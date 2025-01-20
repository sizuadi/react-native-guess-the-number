import Title from '@/components/atoms/Title';
import { StyleSheet, Text, View } from 'react-native';

export default function InGamePage() {
	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{/* GUESS */}
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
