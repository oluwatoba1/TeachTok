import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from '../components/BottomTab';
import Home from '../screens/Home';
import {BottomTabParamList} from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Home} />
      <Tab.Screen name="Activity" component={Home} />
      <Tab.Screen name="Bookmarks" component={Home} />
      <Tab.Screen name="Profile" component={Home} />
    </Tab.Navigator>
  );
}
