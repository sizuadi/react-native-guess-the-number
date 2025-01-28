import Colors from '@/constants/colors';
import { ValidRoutes } from '@/types';
import { Link } from 'expo-router';
import { StyleSheet, TextStyle } from 'react-native';

interface LinkButtonProps {
	link: ValidRoutes;
	addStyles?: TextStyle;
	text: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link, addStyles, text }) => {
	return (
		<Link href={link} style={[styles.button, addStyles]}>
			{text}
		</Link>
	);
};

const styles = StyleSheet.create({
	button: {
		color: Colors.white,
		backgroundColor: Colors.primary800,
		padding: 10,
		fontSize: 16,
		borderRadius: 5,
		width: 100,
		fontFamily: 'open-sans',
		textAlign: 'center',
	},
});
