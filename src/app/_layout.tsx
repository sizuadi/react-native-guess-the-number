import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		'open-sans': require('@/assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('@/assets/fonts/OpenSans-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
		</Stack>
	);
}
