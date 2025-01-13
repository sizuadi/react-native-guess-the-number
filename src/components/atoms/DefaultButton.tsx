import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface DefaultButtonProps {
	onPress?: () => void;
	addStyles?: ViewStyle;
	text: string;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ onPress, addStyles, text }) => {
	return (
		<Pressable onPress={onPress}>
			<View style={[styles.button, addStyles]}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#023c69',
		padding: 10,
		borderRadius: 20,
		width: 100,
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 16,
	},
});
