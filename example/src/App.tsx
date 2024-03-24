import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import BottomSheet from './components/BottomSheet';
import useTheme from './hooks/useTheme';
import './lib/styles/uniStyles';
import MainScreen from './screens/MainScreen';

export default function App() {
  useTheme();

  const { styles } = useStyles(stylesheet);

  const theme = React.useMemo(() => {
    return {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: styles.themeColors.backgroundColor,
        card: styles.themeColors.backgroundColor,
        text: styles.themeColors.text,
        primary: styles.themeColors.primary,
        border: styles.themeColors.border,
      },
    };
  }, [styles]);

  return (
    <NavigationContainer theme={theme}>
      <MainScreen />
      <BottomSheet />
    </NavigationContainer>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  themeColors: {
    backgroundColor: theme.background.primary,
    text: theme.text.primary,
    primary: theme.general.primary,
    border: theme.text.secondary,
  },
}));
