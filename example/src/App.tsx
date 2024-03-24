import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import BottomSheet from './components/BottomSheet';
import './lib/styles/uniStyles';
import MainScreen from './screens/MainScreen';

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
