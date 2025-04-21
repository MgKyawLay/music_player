import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomTabNavigator} from "./navigation/BottomTabs.tsx";

const App = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <BottomTabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
