import * as React from 'react';
import 'react-native-gesture-handler';
import MainScreen from './screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}
