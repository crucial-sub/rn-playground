import * as React from 'react';
import 'react-native-gesture-handler';
import MainScreen from './screens/MainScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomSheet from './components/BottomSheet';

const APP_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={APP_THEME}>
      <MainScreen />
      <BottomSheet />
    </NavigationContainer>
  );
}
