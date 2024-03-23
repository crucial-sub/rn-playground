import { type ColorSchemeName } from 'react-native';
import { create } from 'zustand';

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
