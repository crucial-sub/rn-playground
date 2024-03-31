import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import BottomSheet from './components/BottomSheet';
import ThemeChangeSnapshot from './components/ThemeChangeSnapshot';
import useTheme from './hooks/useTheme';
import './lib/styles/uniStyles';
import { navigationRef } from './lib/utils/navigation-helper';
import RootStackNavigator from './navigation/RootStackNavigator';
import { useThemeChangeAnimationStore } from './stores/style';

export default function App() {
  useTheme();

  const { styles } = useStyles(stylesheet);
  const { setState } = useThemeChangeAnimationStore();

  const viewRef = React.useRef(null);

  React.useEffect(() => {
    setState({ ref: viewRef, isAnimating: false });
  }, []);

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
    <>
      <View ref={viewRef} style={{ flex: 1 }}>
        <NavigationContainer ref={navigationRef} theme={theme}>
          <RootStackNavigator />
          <BottomSheet />
        </NavigationContainer>
      </View>

      <ThemeChangeSnapshot />
    </>
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
