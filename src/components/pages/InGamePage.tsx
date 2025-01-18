import { DefaultButton } from '@/components/atoms/DefaultButton';
import Title from '@/components/atoms/Title';
import { StyleSheet, View } from 'react-native';

export default function InGamePage() {
	return (
		<View style={styles.screen}>
			<Title>Test Hello World</Title>
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
