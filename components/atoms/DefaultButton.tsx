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
				<Text>{text}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		color: '#fff',
		backgroundColor: '#023c69',
		padding: 10,
		fontSize: 16,
		borderRadius: 5,
		width: 100,
		textAlign: 'center',
	},
});
