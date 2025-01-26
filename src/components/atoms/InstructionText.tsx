import Colors from '@/constants/colors';
import { StyleSheet, Text } from 'react-native';
interface InstructionTextProps {
	children: React.ReactNode;
}
export default function InstructionText({ children }: InstructionTextProps) {
	return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
	instructionText: {
		color: Colors.white,
		fontSize: 20,
		textAlign: 'center',
	},
});
