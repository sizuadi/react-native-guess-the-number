import Colors from '@/constants/colors';
import { Platform, StyleSheet, Text, View } from 'react-native';

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
		fontFamily: 'open-sans-bold',
		color: Colors.white,
		textAlign: 'center',
		// borderWidth: Platform.OS === 'android' ? 2 : 0,
		borderWidth: Platform.select({ ios: 0, android: 2 }),
		borderColor: Colors.white,
		padding: 12,
		borderRadius: 10,
		maxWidth: '80%',
		width: 300,
	},
});
