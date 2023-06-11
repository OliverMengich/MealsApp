import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
					headerStyle: {
						backgroundColor: '#351401',
					},
					headerTintColor: 'white',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
					contentStyle: {
						backgroundColor: '#351401',
					},
				}}>
					<Stack.Screen options={{
						title: 'All Categories',
					}} name="MealsCategories" component={CategoriesScreen} />
					<Stack.Screen
						// set title dynamically
						// options={({ route,navigation }) => {
						// 	const { categoryId } = route.params;
						// 	return { title: route.params.categoryId }}}
						name="MealsOverview" component={MealsOverviewScreen} />
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="light" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
