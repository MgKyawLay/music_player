import {RootStackParamList} from './RootStackParamList.ts';
import {ExplorerScreen, HomeScreen, LibraryScreen} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../theme/colors.ts';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName: string;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Explorer') {
            iconName = 'search-outline';
          } else if (route.name === 'Library') {
            iconName = 'folder-outline';
          }

          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
        headerShown: false,
      })}
      initialRouteName={'Home'}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Explorer'} component={ExplorerScreen} />
      <Tab.Screen name={'Library'} component={LibraryScreen} />
    </Tab.Navigator>
  );
};
