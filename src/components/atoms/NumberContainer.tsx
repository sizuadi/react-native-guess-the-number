import Colors from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface NumberContainerProps {
	children: React.ReactNode;
}
export default function NumberContainer({ children }: NumberContainerProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent,
		padding: 24,
		margin: 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: Colors.accent,
		fontSize: 36,
		fontFamily: 'open-sans-bold',
	},
});
