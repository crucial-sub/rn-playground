import { type ColorSchemeName } from 'react-native';
import { create } from 'zustand';
import { DarkColors, LightColors, type IColors } from '../lib/styles/colors';

interface ThemeState {
  theme: ColorSchemeName;
  selectedSwitch: 'system' | 'light' | 'dark';
  setTheme: (theme: ColorSchemeName) => void;
  setSelectedSwitch: (selectedSwitch: 'system' | 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>((set) => {
  return {
    theme: undefined,
    selectedSwitch: 'system',
    setTheme: (theme: ColorSchemeName) => set({ theme }),
    setSelectedSwitch: (selectedSwitch: 'system' | 'light' | 'dark') =>
      set({ selectedSwitch }),
  };
});

interface ColorsState {
  colors: IColors;
}

export const useColorsStore = create<ColorsState>(() => {
  return {
    colors:
      useThemeStore.getState().theme === 'dark' ? DarkColors : LightColors,
  };
});
