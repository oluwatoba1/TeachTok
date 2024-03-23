import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorParams} from './types';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<MainNavigatorParams>();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
