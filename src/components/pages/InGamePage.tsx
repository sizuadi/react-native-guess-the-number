import { DefaultButton } from '@/components/atoms/DefaultButton';
import { StyleSheet, Text, View } from 'react-native';

export default function InGamePage() {
	return (
		<View style={styles.screen}>
			<Text>Hello World!</Text>
			<DefaultButton text='Test Game' />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
});
