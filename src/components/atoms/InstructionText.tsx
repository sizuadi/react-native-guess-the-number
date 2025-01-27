import Colors from '@/constants/colors';
import { StyleSheet, Text, TextStyle } from 'react-native';
interface InstructionTextProps {
	children: React.ReactNode;
	addStyles?: TextStyle;
}
export default function InstructionText({ children, addStyles }: InstructionTextProps) {
	return <Text style={[styles.instructionText, addStyles]}>{children}</Text>;
}

const styles = StyleSheet.create({
	instructionText: {
		color: Colors.white,
		fontSize: 20,
		textAlign: 'center',
	},
});
