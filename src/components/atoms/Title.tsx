import Colors from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

interface TitleProps {
	children: React.ReactNode;
}
export default function Title({ children }: TitleProps) {
	return (
		<View>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.accent,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.accent,
		padding: 12,
		borderRadius: 10,
	},
});
