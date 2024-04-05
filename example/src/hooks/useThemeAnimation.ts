import { makeImageFromView } from '@shopify/react-native-skia';
import React from 'react';
import { useColorScheme } from 'react-native';
import { UnistylesRuntime } from 'react-native-unistyles';
import { sleep } from '../lib/utils/public';
import { setStorage } from '../lib/utils/storage';
import { useThemeAnimationStore } from '../stores/theme';

type ThemeType = 'system' | 'light' | 'dark';

const useThemeAnimation = () => {
  const colorScheme = useColorScheme();
  const { ref, isAnimating, setState } = useThemeAnimationStore();

  const changeTheme = React.useCallback((theme: ThemeType) => {
    setStorage('theme', theme);

    if (theme === 'system') {
      UnistylesRuntime.setTheme(colorScheme || 'light');
    } else {
      UnistylesRuntime.setTheme(theme);
    }
  }, []);

  const playChangeThemeAnimation = React.useCallback(
    async (theme: ThemeType) => {
      if (isAnimating || ref === undefined) {
        return;
      }

      const snapshot1 = await makeImageFromView(ref);

      if (snapshot1 === null) {
        return;
      }

      setState({ snapshot1, isAnimating: true });

      await sleep(100);

      changeTheme(theme);

      await sleep(100);

      const snapshot2 = await makeImageFromView(ref);

      if (snapshot2 === null) {
        return;
      }

      setState({ snapshot2, isAnimating: true });
    },
    [ref, isAnimating]
  );

  const clearAnimationState = React.useCallback(async () => {
    setState({
      snapshot1: undefined,
      snapshot2: undefined,
      isAnimating: false,
    });
  }, []);

  return {
    playChangeThemeAnimation,
    clearAnimationState,
  };
};

export default useThemeAnimation;
