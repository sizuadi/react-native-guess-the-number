import { DefaultButton } from '@/components/atoms/DefaultButton';
import { Text, View } from 'react-native';

export default function InGamePage() {
	return (
		<View>
			<Text>Hello World!</Text>
			<DefaultButton onPress={() => {}} text='Test Game' />
		</View>
	);
}
