import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface DefaultButtonProps {
	addStyles?: ViewStyle;
	text: string;
	onPressButton?: () => void;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({ addStyles, text, onPressButton }) => {
	return (
		<View style={[styles.button, addStyles]}>
			<Pressable onPress={onPressButton} android_ripple={{ color: '#023c69' }}>
				<Text style={styles.buttonText}>{text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#023c69',
		borderRadius: 20,
		width: 100,
		overflow: 'hidden',
	},
	buttonText: {
		textAlign: 'center',
		padding: 10,
		color: '#fff',
		fontSize: 16,
	},
});
