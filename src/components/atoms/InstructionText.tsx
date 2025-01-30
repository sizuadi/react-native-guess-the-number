import Colors from '@/constants/colors';
import { Dimensions, StyleSheet, Text, TextStyle } from 'react-native';
interface InstructionTextProps {
	children: React.ReactNode;
	addStyles?: TextStyle;
}
export default function InstructionText({ children, addStyles }: InstructionTextProps) {
	return <Text style={[styles.instructionText, addStyles]}>{children}</Text>;
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
	instructionText: {
		color: Colors.white,
		fontSize: deviceWidth < 380 ? 20 : 25,
		textAlign: 'center',
		fontFamily: 'open-sans',
	},
});
