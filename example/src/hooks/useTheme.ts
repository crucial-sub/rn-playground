import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useInitialTheme } from 'react-native-unistyles';
import { getStorage, setStorage } from '../lib/utils/storage';
import { useThemeStore } from '../stores/theme';

const useTheme = () => {
  const colorScheme = useColorScheme();
  const storedTheme = getStorage('theme');
  const { setSelectedSwitch } = useThemeStore();

  const initialTheme =
    storedTheme === undefined || storedTheme === 'system'
      ? colorScheme
      : storedTheme;

  useEffect(() => {
    if (storedTheme === undefined) {
      setStorage('theme', 'system');
      setSelectedSwitch('system');
    } else {
      setSelectedSwitch(storedTheme);
    }
  }, [storedTheme]);

  useInitialTheme(initialTheme);
};

export default useTheme;
