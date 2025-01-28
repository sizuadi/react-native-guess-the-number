import Colors from '@/constants/colors';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface DefaultButtonProps {
	addStyles?: ViewStyle;
	text?: string;
	onPressButton?: () => void;
	children?: React.ReactNode;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
	addStyles,
	text,
	onPressButton,
	children,
}) => {
	return (
		<View style={[styles.button, addStyles]}>
			<Pressable onPress={onPressButton} android_ripple={{ color: '#023c69' }}>
				{children !== undefined && children}
				{text !== undefined && <Text style={styles.buttonText}>{text}</Text>}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary800,
		borderRadius: 20,
		width: 100,
		overflow: 'hidden',
	},
	buttonText: {
		textAlign: 'center',
		padding: 10,
		fontFamily: 'open-sans',
		color: Colors.white,
		fontSize: 16,
	},
});
