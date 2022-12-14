import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './navigator/RootNavigator';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
