import 'react-native-gesture-handler'

import Routes from './src/routers';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>

    <Routes></Routes>
    </NavigationContainer>

  );
}

