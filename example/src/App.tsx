import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import BottomSheet from './components/BottomSheet';
import useTheme from './hooks/useTheme';
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
  React.useEffect(() => {
    useTheme();
  }, []);

  return (
    <NavigationContainer theme={APP_THEME}>
      <MainScreen />
      <BottomSheet />
    </NavigationContainer>
  );
}
