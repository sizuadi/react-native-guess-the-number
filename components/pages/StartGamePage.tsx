import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function StartGamePage() {
	return (
		<View>
			<Text>Hello World!</Text>
			<Link href='/in_game' style={{ color: 'blue' }}>
				In Game
			</Link>
		</View>
	);
}
