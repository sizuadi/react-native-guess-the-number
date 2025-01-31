import { DefaultButton } from '@/components/atoms/DefaultButton';
import Title from '@/components/atoms/Title';
import Colors from '@/constants/colors';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
interface GameOverProps {
	roundsNumber: number;
	userNumber: number;
	onStartNewGame: () => void;
}
export default function GameOverPage({ roundsNumber, userNumber, onStartNewGame }: GameOverProps) {
	return (
		<View style={styles.rootContainer}>
			<Title>Game over!</Title>
			<Image source={require('@/assets/images/trophy.png')} style={styles.imageSuccess} />
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to
				guess the number <Text style={styles.hightlight}>{userNumber}</Text>.
			</Text>
			<DefaultButton text='New Game' onPressButton={onStartNewGame} />
		</View>
	);
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageSuccess: {
		width: deviceWidth < 380 ? 150 : 300,
		height: deviceWidth < 380 ? 150 : 300,
	},
	summaryText: {
		fontSize: 18,
		fontFamily: 'open-sans-bold',
		color: 'white',
		textAlign: 'center',
		marginBottom: 20,
	},
	hightlight: {
		color: Colors.warning500,
	},
});
