import Colors from '@/constants/colors';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

interface CardProps {
	children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
	return <View style={styles.inputContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: Colors.primary500,
		paddingVertical: deviceWidth < 380 ? 15 : 20,
		paddingHorizontal: deviceWidth < 380 ? 20 : 30,
		marginVertical: deviceWidth < 380 ? 10 : 20,
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
