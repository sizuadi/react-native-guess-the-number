import Colors from '@/constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CardProps {
	children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
	return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: 20,
		paddingHorizontal: 30,
		marginTop: 20,
		marginHorizontal: 25,
		borderRadius: 15,
		elevation: 10,
		shadowColor: Colors.black,
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		alignItems: 'center',
	},
});
