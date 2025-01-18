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
		color: '#18aaff',
		textAlign: 'center',
		borderWidth: 2,
		borderColor: '#1493dd',
		padding: 12,
		borderRadius: 10,
	},
});
