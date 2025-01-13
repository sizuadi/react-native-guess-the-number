import { DefaultButton } from '@/components/atoms/DefaultButton';
import { Text, View } from 'react-native';
export default function GameOverPage() {
	return (
		<View>
			<Text>Game over!</Text>
			<DefaultButton onPress={() => {}} text='New Game' />
		</View>
	);
}
