import { View, Text } from 'react-native';
import { LinkButton } from '../atoms/LinkButton';

export default function StartGamePage() {
	return (
		<>
			<View>
				<Text>Hello World!</Text>
				<LinkButton link='/in_game' text='In Game' />
				<LinkButton link='/in_game' text='In Game' />
			</View>
		</>
	);
}
